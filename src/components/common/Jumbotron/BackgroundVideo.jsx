import React, { useState, useRef, useEffect } from 'react';
import VideoControls from './VideoControls';

const BackgroundVideo = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isApiReady, setIsApiReady] = useState(false);
    const iframeRef = useRef(null);

    useEffect(() => {
        // Initialize YouTube API
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Define the callback function for when the API is ready
        window.onYouTubeIframeAPIReady = () => {
            setIsApiReady(true);
        };

        return () => {
            // Cleanup
            window.onYouTubeIframeAPIReady = null;
        };
    }, []);

    const handleTogglePlay = () => {
        if (iframeRef.current && isApiReady) {
            const message = isPlaying ? 'pauseVideo' : 'playVideo';
            iframeRef.current.contentWindow.postMessage(
                JSON.stringify({
                    event: 'command',
                    func: message
                }), 
                '*'
            );
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
                ref={iframeRef}
                className="w-full h-full object-cover scale-110"
                src="https://www.youtube-nocookie.com/embed/iaoq5WjHyFc?autoplay=1&mute=1&loop=1&playlist=iaoq5WjHyFc&controls=0&showinfo=0&rel=0&enablejsapi=1&origin=http://localhost:5173"
                title="YouTube video player"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen={true}
                loading="lazy"
                crossOrigin="anonymous"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                importance="low"
                fetchPriority="low"
            />

            {/* Base gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 
                          mix-blend-multiply animate-gradient" />
                          
            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-radial-dark opacity-70 pointer-events-none"></div>
            
            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-20 bg-noise mix-blend-soft-light pointer-events-none"></div>

            {/* Video Controls */}
            <VideoControls 
                isPlaying={isPlaying} 
                onTogglePlay={handleTogglePlay} 
            />
        </div>
    );
};

export default BackgroundVideo; 