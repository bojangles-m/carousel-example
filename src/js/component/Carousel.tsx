import React, { useEffect, useState } from 'react';
import classNames from 'clsx';

import styles from './styles.css';

export const Carousel: React.FC = ({ children }) => {
  return <div className={styles.carousel}>{children}</div>;
};

export const Slides: React.FC = ({ children }) => {
  return <div className={styles.slides}>{children}</div>;
};

export interface ISlideProps {
  title: string;
  description: string;
  author: string;
  isCurrent: boolean;
}

export const Slide: React.FC<ISlideProps> = ({
  title,
  description,
  author,
  isCurrent,
}) => {
  return (
    <div
      className={classNames(styles.clearBefore, styles.slide, {
        [`${styles.hide}`]: !isCurrent,
      })}>
      <h4>{title}</h4>
      <div>{description}</div>
      <div className={styles.author}>-- {author} --</div>
    </div>
  );
};

export const Panel: React.FC = ({ children }) => {
  return <div className={styles.panel}>{children}</div>;
};

export const SlidesNav: React.FC = ({ children }) => {
  return <div className={styles.navigation}>{children}</div>;
};

interface ISlidesNavItemProps {
  isCurrent: boolean;
  onClick: any;
}

export const SlidesNavItem: React.FC<ISlidesNavItemProps> = ({
  isCurrent,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.item, {
        [styles.active]: isCurrent,
      })}
    />
  );
};

export const Controls: React.FC = ({ children }) => {
  return <div className={styles.controls}>{children}</div>;
};

interface IProgressBarProps {
  animate: boolean;
  time: number;
}

const useProgress = (animate: boolean, time: number): number => {
  const [progress, setProgress] = useState(0);

  useEffect((): any => {
    let rafId: any = null;
    if (animate) {
      let start: any = null;

      let step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        setProgress(progress);

        if (progress < time) {
          rafId = requestAnimationFrame(step);
        }
      };

      rafId = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(rafId);
  }, [animate, time]);

  return animate ? Math.min(progress / time, time) : 0;
};

export const ProgressBar: React.FC<IProgressBarProps> = ({ animate, time }) => {
  const progress = useProgress(animate, time); // 0.4

  return (
    <div className={styles.progressBar}>
      <div style={{ width: `${progress * 100}%` }} />
    </div>
  );
};
