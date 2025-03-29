import { Events } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EventsState {
  events: Events;
}

const initialState: EventsState = {
  events: []
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<Events>) => {
      state.events = action.payload;
    }
  }
});

export const { setEvents } = eventsSlice.actions;
