import React, { useRef, useEffect, useCallback } from 'react';
import EventOverlay from '../EventOverlay/EventOverlay';
import styles from './VideoPlayer.module.scss';
import { setCurrentTime } from '../Events/slice';
import { useAppDispatch } from '@/lib/store/store';

interface VideoPlayerProps {
  src: string;
  currentTime: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, currentTime }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const dispatch = useAppDispatch();
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current && Math.abs(videoRef.current.currentTime - currentTime) > 0.1) {
      videoRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        src={src}
        className={styles.video}
        onTimeUpdate={() => {
          if (videoRef.current) {
            dispatch(setCurrentTime(videoRef.current.currentTime));
          }
        }}
        onClick={handlePlayPause}
        controls
      />
      <EventOverlay videoRef={videoRef} />
    </div>
  );
};

export default VideoPlayer;
