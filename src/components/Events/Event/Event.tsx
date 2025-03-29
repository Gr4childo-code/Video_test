'use client';
import { IEvent } from '@/types/types';
import { timeStampConverter } from '@/utils/timeStampConverter';
import React from 'react';
import styles from './Event.module.scss';
import { getCurrentTime } from '../selector';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

type Props = {
  event: IEvent;
  handleEventClick: (timestamp: number) => void;
};
const Event = ({ event, handleEventClick }: Props) => {
  const currentTime = useSelector(getCurrentTime);
  return (
    <tr
      className={classNames(styles.Event, {
        [styles.Event__active]: currentTime > event.timestamp
      })}
    >
      <td className={styles.Event__time}>{timeStampConverter(event.timestamp)}</td>
      <td className={styles.Event__time}>{timeStampConverter(event.timestamp + event.duration)}</td>
      <td className={styles.Event__time}>{timeStampConverter(event.duration)}</td>
      <td className={styles.Event__handle} onClick={() => handleEventClick(event.timestamp)}>
        Go to
      </td>
    </tr>
  );
};

export default Event;
