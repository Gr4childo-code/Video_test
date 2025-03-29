export interface Event {
  timestamp: number;
  duration: number;
  zone: Zone;
}

export interface Zone {
  left: number;
  top: number;
  width: number;
  height: number;
}

export type Events = Event[];
