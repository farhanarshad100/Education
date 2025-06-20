import React, { CSSProperties, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Card = ({ children, className = "", style = {} }: CardProps) => {
  return (
    <div className={`w-1/3 p-4 flex-wrap rounded-2xl ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
