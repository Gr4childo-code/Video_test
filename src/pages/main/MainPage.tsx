import EventsList from '@/components/Events/EventsList/EventsList';
import React from 'react';

import styles from './MainPage.module.scss';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import { VIDEO_SRC } from '@/constants/constants';
import { useSelector } from 'react-redux';
import { getCurrentTime } from '@/components/Events/selector';
import { useAppDispatch } from '@/lib/store/store';
import { setCurrentTime } from '@/components/Events/slice';
const MainPage = () => {
  const currentTime = useSelector(getCurrentTime);
  const dispatch = useAppDispatch();
  const handleEventClick = (timestamp: number) => {
    dispatch(setCurrentTime(timestamp));
  };
  return (
    <div className={styles.MainPage}>
      <EventsList handleEventClick={handleEventClick} />

      <div className={styles.MainPage__videoContainer}>
        <VideoPlayer src={VIDEO_SRC} currentTime={currentTime} />
      </div>
    </div>
  );
};

export default MainPage;
