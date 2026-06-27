import React from 'react';

export const Icon = ({ className, children, variant, contentKey, ...props }) => {
  return (
      <svg
          viewBox={props.viewBox || "0 0 24 24"}
          fill={props.fill || "none"}   // keep fill none for outline icons
          stroke={props.stroke || "currentColor"} // add this line
          className={className}
          {...props}
      >
        {children}
      </svg>
  );
};