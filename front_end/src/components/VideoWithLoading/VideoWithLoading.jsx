import { useRef, useState } from "react";

function VideoWithLoading({ videoSrc }) {
    const [loading, setLoading] = useState(true);
    const videoRef = useRef(null);

    return (
        <div className="relative">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
            )}

            <video
                ref={videoRef}
                width="100%"
                muted
                autoPlay
                loop
                className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
                onLoadedData={() => setLoading(false)}
                onWaiting={() => setLoading(true)}  // Khi video buffering
                onPlaying={() => setLoading(false)} // Khi video tiếp tục phát
            >
                <source src={videoSrc} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoWithLoading;