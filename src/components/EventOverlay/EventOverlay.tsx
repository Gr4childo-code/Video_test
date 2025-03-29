import React, { useRef, useEffect, useCallback } from 'react';
import styles from './EventOverlay.module.scss';
import { getAllEvents, getCurrentTime } from '../Events/selector';
import { useSelector } from 'react-redux';

interface EventOverlayProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const EventOverlay: React.FC<EventOverlayProps> = ({ videoRef }) => {
  const currentTime = useSelector(getCurrentTime);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(null);
  const events = useSelector(getAllEvents);

  const drawEvents = useCallback(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (video.videoWidth && video.videoHeight) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    events.forEach(event => {
      const isActive = currentTime >= event.timestamp && currentTime <= event.timestamp + event.duration;

      if (isActive) {
        const timeLeft = event.timestamp + event.duration - currentTime;
        const opacity = Math.min(0.3, 0.1 + (timeLeft / event.duration) * 0.2);
        ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
        ctx.fillRect(event.zone.left, event.zone.top, event.zone.width, event.zone.height);

        ctx.strokeStyle = 'green';
        ctx.lineWidth = 2;
        ctx.strokeRect(event.zone.left, event.zone.top, event.zone.width, event.zone.height);
      }
    });

    animationFrameRef.current = requestAnimationFrame(drawEvents);
  }, [currentTime, events, videoRef]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(drawEvents);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [drawEvents]);

  return <canvas ref={canvasRef} className={styles.canvasOverlay} />;
};

export default EventOverlay;
