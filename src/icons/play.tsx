import React from 'react';

const PlaySVG = ({
  width = '100%',
  height = '100%',
  viewBox = '0 0 163.861 163.861',
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
      d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275
		c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"
    />
  </svg>
);

const Play = <T extends IIconProps>(props: T): JSX.Element => {
  return <PlaySVG {...props} />;
};

export default Play;
