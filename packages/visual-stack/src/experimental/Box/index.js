import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './Box.css';

const Box = ({
  align,
  border,
  children,
  className,
  direction,
  gap,
  grow,
  justify,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  ...restProps
}) => (
  <div
    {...restProps}
    className={classNames(
      'vs-box',
      `vs-box-direction-${direction}`,
      border && 'vs-box-border',
      gap && `vs-box-gap-${gap}`,
      padding && `vs-box-padding-${padding}`,
      paddingBottom && `vs-box-padding-bottom-${paddingBottom}`,
      paddingLeft && `vs-box-padding-left-${paddingLeft}`,
      paddingRight && `vs-box-padding-right-${paddingRight}`,
      paddingTop && `vs-box-padding-top-${paddingTop}`,
      align && `vs-box-align-${align}`,
      justify && `vs-box-justify-${justify}`,
      grow && 'vs-box-grow',
      className
    )}
  >
    {children}
  </div>
);

Box.defaultProps = {
  direction: 'row',
};

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['column', 'row']),
  padding: PropTypes.oneOf(['small', 'default', 'large', 'xl', 'xxl']),
  paddingTop: PropTypes.oneOf(['small', 'default', 'large', 'xl', 'xxl']),
  paddingBottom: PropTypes.oneOf(['small', 'default', 'large', 'xl', 'xxl']),
  paddingLeft: PropTypes.oneOf(['small', 'default', 'large', 'xl', 'xxl']),
  paddingRight: PropTypes.oneOf(['small', 'default', 'large', 'xl', 'xxl']),
  gap: PropTypes.oneOf(['small', 'default', 'large', 'xl', 'xxl']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  justify: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
  border: PropTypes.bool,
  grow: PropTypes.bool,
};

export default Box;
