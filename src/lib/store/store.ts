import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';
import { combineReducers, configureStore, ThunkAction, Action, UnknownAction, Dispatch } from '@reduxjs/toolkit';
import { eventsSlice, EventsState } from '@/components/Events/slice';
export interface RootState {
  [eventsSlice.name]: EventsState;
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = Dispatch<UnknownAction> & {
  <ReturnType = void>(action: AppThunk<ReturnType>): ReturnType;
};
export const useAppDispatch = () => useDispatch<AppDispatch>();

const combinedReducer = combineReducers({
  [eventsSlice.name]: eventsSlice.reducer
});

const rootReducer = (
  state: ReturnType<typeof combinedReducer> | undefined,
  action: UnknownAction
): ReturnType<typeof combinedReducer> => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...(action.payload as RootState)
    };
  }
  return combinedReducer(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
    devTools: process.env.NODE_ENV === 'development'
  });

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === 'development'
});
