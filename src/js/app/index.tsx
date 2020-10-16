import React, { useEffect } from 'react';
import {
  Carousel,
  Slides,
  Slide,
  SlidesNav,
  SlidesNavItem,
  Controls,
  ProgressBar,
  Panel,
} from '../component/Carousel';
import { useCarouselControl } from '../component/useCarouselControl';
import { PlayIcon, PauseIcon, NextIcon } from '../../icons';

import styles from '../component/styles.css';
import slides from './slides.json';

const SLIDE_DURATION = 3000;
const DELAY = 50;

const App: React.FC = () => {
  const [state, dispatch] = useCarouselControl(slides.length);

  useEffect(() => {
    let stId: any = null;

    if (state.isPlaying) {
      stId = setTimeout(() => dispatch({ type: 'NEXT' }), SLIDE_DURATION);
    }

    return () => clearTimeout(stId);
  }, [state.currentIndex, state.isPlaying]);

  const ppButton = {
    type: state.isPlaying ? 'PAUSE' : 'PLAY',
    text: state.isPlaying ? <PauseIcon width="21" /> : <PlayIcon width="21" />,
  };

  return (
    <Carousel>
      <Slides>
        {slides.map((book: IBookProps, idx: number) => (
          <Slide
            key={idx}
            title={book.title}
            description={book.description}
            author={book.author}
            isCurrent={state.currentIndex === idx}
          />
        ))}
      </Slides>

      <Panel>
        <SlidesNav>
          {slides.map((_, idx: number) => (
            <SlidesNavItem
              key={idx}
              isCurrent={state.currentIndex === idx}
              onClick={() => dispatch({ type: 'GOTO', index: idx })}
            />
          ))}
        </SlidesNav>

        <Controls>
          <button
            className={styles.ppButton}
            onClick={() => dispatch({ type: ppButton.type })}>
            {ppButton.text}
          </button>
          <button
            className={styles.prev}
            onClick={() => dispatch({ type: 'PREV' })}>
            <NextIcon width="21" />
          </button>
          <button onClick={() => dispatch({ type: 'NEXT' })}>
            <NextIcon width="21" />
          </button>
        </Controls>

        <ProgressBar
          key={state.currentIndex + +state.isPlaying}
          animate={state.isPlaying}
          time={SLIDE_DURATION - DELAY}
        />
      </Panel>
    </Carousel>
  );
};

export default App;
