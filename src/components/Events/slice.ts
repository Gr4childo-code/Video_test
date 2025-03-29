import { IEvents } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EventsState {
  events: IEvents;
  currentTime: number;
}

const initialState: EventsState = {
  events: [],
  currentTime: 0
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<IEvents>) => {
      state.events = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    }
  }
});

export const { setEvents, setCurrentTime } = eventsSlice.actions;
