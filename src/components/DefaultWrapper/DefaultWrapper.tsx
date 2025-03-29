'use client';

import React from 'react';
import { setEvents } from '../Events/slice';
import { useAppDispatch } from '@/lib/store/store';
import { Events } from '@/types/types';
import MainPage from '@/pages/main/MainPage';

type Props = {
  data: Events;
};

export const DefaultWrapper = ({ data }: Props) => {
  const dispatch = useAppDispatch();

  dispatch(setEvents(data));

  return <MainPage />;
};
