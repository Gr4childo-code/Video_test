'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAllEvents } from '../selector';
import styles from './EventsList.module.scss';
import Event from '../Event/Event';
type Props = {
  handleEventClick: (timestamp: number) => void;
};
const EventsList = ({ handleEventClick }: Props) => {
  const events = useSelector(getAllEvents);

  return (
    <div className={styles.EventsList}>
      <table className={styles.EventsList__table}>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Duration</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <Event key={event.timestamp} event={event} handleEventClick={handleEventClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsList;
