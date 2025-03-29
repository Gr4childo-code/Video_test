'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAllEvents } from '../selector';
import styles from './EventsList.module.scss';
import Event from '../Event/Event';

const EventsList = () => {
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
            <Event key={event.timestamp} event={event} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsList;
