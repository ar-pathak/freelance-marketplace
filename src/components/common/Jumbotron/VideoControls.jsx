import React from 'react';
import { IoPlayCircleOutline, IoStopCircleOutline } from "react-icons/io5";

const VideoControls = ({ isPlaying, onTogglePlay }) => {
    return (
        <div className="absolute bottom-4 sm:bottom-8 2xl:bottom-12 right-4 sm:right-8 2xl:right-12 z-40">
            <button
                onClick={onTogglePlay}
                className="p-2 sm:p-3 2xl:p-4 rounded-full 
                        bg-black/50 backdrop-blur-md hover:bg-black/70 
                        text-white hover:text-white
                        transition-all duration-200
                        group shadow-md
                        border border-white/20
                        focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label={isPlaying ? "Stop video" : "Play video"}
            >
                {isPlaying ? (
                    <IoStopCircleOutline className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-12 2xl:h-12" />
                ) : (
                    <IoPlayCircleOutline className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-12 2xl:h-12" />
                )}
                
                {/* Simple tooltip on larger screens */}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2
                            bg-black/80 text-white text-sm px-3 py-1.5 rounded-lg
                            opacity-0 group-hover:opacity-100 transition-opacity
                            whitespace-nowrap shadow-md hidden sm:block">
                    {isPlaying ? 'Stop Video' : 'Play Video'}
                </span>
            </button>
        </div>
    );
};

export default VideoControls; 