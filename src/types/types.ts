export interface IEvent {
  timestamp: number;
  duration: number;
  zone: IZone;
}

export interface IZone {
  left: number;
  top: number;
  width: number;
  height: number;
}

export type IEvents = IEvent[];
