'use client';

import React from 'react';
import { setEvents } from '../Events/slice';
import { useAppDispatch } from '@/lib/store/store';
import { IEvents } from '@/types/types';
import MainPage from '@/pages/main/MainPage';

type Props = {
  data: IEvents;
};

export const DefaultWrapper = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  const sortedEvents = [...data.sort((a, b) => a.timestamp - b.timestamp)];
  dispatch(setEvents(sortedEvents));

  return <MainPage />;
};
