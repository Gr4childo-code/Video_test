import { IEvents } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EventsState {
  events: IEvents;
}

const initialState: EventsState = {
  events: []
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<IEvents>) => {
      state.events = action.payload;
    }
  }
});

export const { setEvents } = eventsSlice.actions;
