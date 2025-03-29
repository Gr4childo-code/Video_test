'use client';
import { IEvent } from '@/types/types';
import { timeStampConverter } from '@/utils/timeStampConverter';
import React from 'react';
import styles from './Event.module.scss';

type Props = {
  event: IEvent;
};
const Event = ({ event }: Props) => {
  return (
    <tr className={styles.Event}>
      <td className={styles.Event__time}>{timeStampConverter(event.timestamp)}</td>
      <td className={styles.Event__time}>{timeStampConverter(event.timestamp + event.duration)}</td>
      <td className={styles.Event__time}>{timeStampConverter(event.duration)}</td>
      <td className={styles.Event__handle}>Go to</td>
    </tr>
  );
};

export default Event;
