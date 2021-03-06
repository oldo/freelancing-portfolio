import React from 'react';
import { Image } from '../items';

interface SelectedWorkVideoProps {
  video: Image;
}

const SelectedWorkVideo: React.FC<SelectedWorkVideoProps> = ({ video }) => {
  return (
    <div className="w-full h-full rounded-lg relative overflow-hidden bg-gray-200" style={{ minHeight: 300 }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="min-w-full min-h-full h-full w-full absolute"
      >
        <source src={video.src} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 w-full py-2 px-4 bg-gray-900 bg-opacity-50 text-white">Your caption here</div>
    </div>
  );
};

export default SelectedWorkVideo;
