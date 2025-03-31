import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import Event from '@/components/Events/Event/Event';
import { IEvent } from '@/types/types';

jest.mock('@/utils/timeStampConverter', () => ({
  timeStampConverter: jest.fn((timestamp: number) => `Converted: ${timestamp}`)
}));

const mockStore = configureStore([]);

describe('Event Component', () => {
  const mockHandleEventClick = jest.fn<(timestamp: number) => void>();
  const event: IEvent = {
    timestamp: 1698765432000,
    duration: 3600000,
    zone: {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    }
  };

  let store: MockStoreEnhanced<unknown, {}>;

  beforeEach(() => {
    store = mockStore({
      events: {
        currentTime: 1698765433000
      }
    });
  });

  it('Рендер Event компонента отображается корректно в DOM', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <Event event={event} handleEventClick={mockHandleEventClick} />
          </tbody>
        </table>
      </Provider>
    );

    // Timestamp
    expect(screen.getByText('Converted: 1698765432000')).toBeInTheDocument();
    // Timestamp + duration
    expect(screen.getByText('Converted: 1698769032000')).toBeInTheDocument();
    // Durtaion
    expect(screen.getByText('Converted: 3600000')).toBeInTheDocument();

    // кнопка 'Go to' существует в документе
    expect(screen.getByText('Go to')).toBeInTheDocument();
  });

  it('Нажатие на кнопку "Go to" вызывает handleEventClick', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <Event event={event} handleEventClick={mockHandleEventClick} />
          </tbody>
        </table>
      </Provider>
    );

    fireEvent.click(screen.getByText('Go to'));

    expect(mockHandleEventClick).toHaveBeenCalledWith(event.timestamp);
  });

  it('Установка currentTime > event.timestamp присваивает класс Event__active', () => {
    store = mockStore({
      events: {
        currentTime: 1698765433000
      }
    });

    render(
      <Provider store={store}>
        <table>
          <tbody>
            <Event event={event} handleEventClick={mockHandleEventClick} />
          </tbody>
        </table>
      </Provider>
    );

    const row = screen.getByRole('row');
    expect(row).toHaveClass('Event__active');
  });

  it('Установка currentTime <= event.timestamp не присваивает класс Event__active', () => {
    store = mockStore({
      events: {
        currentTime: 1698765431000
      }
    });

    render(
      <Provider store={store}>
        <table>
          <tbody>
            <Event event={event} handleEventClick={mockHandleEventClick} />
          </tbody>
        </table>
      </Provider>
    );

    const row = screen.getByRole('row');
    expect(row).not.toHaveClass('Event__active');
  });
});
