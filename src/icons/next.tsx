import React from 'react';

const NextSVG = ({
  width = '100%',
  height = '100%',
  viewBox = '0 0 18.909 18.909',
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
    <path
      d="M10.193,8.311L1.887,1.714C1.484,1.511,1.003,1.533,0.619,1.766C0.233,1.998,0,2.412,0,2.856v13.198
		c0,0.443,0.233,0.856,0.619,1.089c0.208,0.126,0.444,0.19,0.683,0.19c0.201,0,0.401-0.046,0.586-0.138l8.306-6.599
		c0.4-0.376,0.716-0.658,0.716-1.143S10.641,8.707,10.193,8.311z"
    />
    <path
      d="M18.193,8.311L9.887,1.714C9.484,1.511,9.002,1.533,8.618,1.766
		c-0.386,0.232-0.619,0.646-0.619,1.09v13.198c0,0.443,0.233,0.856,0.619,1.089c0.208,0.126,0.444,0.19,0.683,0.19
		c0.201,0,0.401-0.046,0.586-0.138l8.306-6.599c0.4-0.376,0.716-0.658,0.716-1.143S18.641,8.707,18.193,8.311z"
    />
  </svg>
);

const Next = <T extends IIconProps>(props: T): JSX.Element => {
  return <NextSVG {...props} />;
};

export default Next;
