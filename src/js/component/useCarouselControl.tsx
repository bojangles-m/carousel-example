import { useReducer } from 'react';

export const useCarouselControl = (size: number) => {
  const [state, dispatch] = useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case 'PLAY':
          return {
            ...state,
            isPlaying: true,
          };
        case 'PAUSE':
          return {
            ...state,
            isPlaying: false,
          };
        case 'PREV':
          return {
            ...state,
            currentIndex: (state.currentIndex - 1 + size) % size,
          };
        case 'NEXT':
          return {
            ...state,
            currentIndex: (state.currentIndex + 1) % size,
          };
        case 'GOTO':
          return {
            ...state,
            currentIndex: action.index,
          };
        default:
          return state;
      }
    },
    {
      currentIndex: 0,
      isPlaying: true,
    },
  );

  return [state, dispatch];
};
