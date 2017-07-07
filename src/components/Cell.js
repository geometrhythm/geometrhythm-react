import React from 'react';
import widgetConstants from '../constants/widgetConstants';

const { RING_ROTATION_OFFSET_TO_START_AT_TOP } = widgetConstants;

const getStyle = (rhythm, index) => {
  const rotation = ((2 * Math.PI * index) / rhythm.length)
                 + RING_ROTATION_OFFSET_TO_START_AT_TOP
                 ;

  return {
    transform: `rotate(${rotation}rad)`,
    transformOrigin: '200px 200px',
    position: 'absolute',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  };
};

const getSvgProps = (isOnset) => {
  return {
    viewBox: '0 0 20 20',
    stroke: 'black',
    fill: isOnset ? 'black' : 'white',
  };
};

export default ({ rhythm, isOnset, index, flipCell }) => {
  const onClick = () => flipCell(rhythm, index);

  const style = getStyle(rhythm, index);

  const svgProps = getSvgProps(isOnset);

  return (
    <div {...{ onClick, style }} >
      <svg {...svgProps}>
        <circle {...{ cx: 10, cy: 10, r: 10 }} />
      </svg>
    </div>
  );
};
