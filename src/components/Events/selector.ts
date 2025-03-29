import { eventsSlice } from './slice';
import { AppState } from '@/lib/store/store';

export const getAllEvents = (state: AppState) => state[eventsSlice.name].events;
