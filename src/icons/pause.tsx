import React from 'react';

const PauseSVG = ({
  width = '100%',
  height = '100%',
  viewBox = '0 0 45.975 45.975',
  className = '',
  style = {},
}: IIconProps) => (
  <svg
    width={width}
    height={height}
    style={style}
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M13.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.763,2.238,5,5,5s5-2.238,5-5V5C18.987,2.238,16.75,0,13.987,0z" />
    <path d="M31.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.762,2.238,5,5,5s5-2.238,5-5V5C36.987,2.239,34.749,0,31.987,0z" />
  </svg>
);

const Pause = <T extends IIconProps>(props: T): JSX.Element => {
  return <PauseSVG {...props} />;
};

export default Pause;
