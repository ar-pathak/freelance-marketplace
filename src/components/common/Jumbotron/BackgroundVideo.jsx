import React, { useState, useRef } from 'react';
import VideoControls from './VideoControls';

const BackgroundVideo = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const handleTogglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
                ref={videoRef}
                className="w-full h-full object-cover scale-110"
                src="https://fiverr-res.cloudinary.com/video/upload/v1/video-attachments/generic_asset/asset/18ad23debdc5ce914d67939eceb5fc27-1738830703211/Desktop%20Header%20new%20version"
                autoPlay
                muted
                loop
                playsInline
                title="Fiverr background video"
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