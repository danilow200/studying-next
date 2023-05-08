import React from "react";

interface Props {
  border?: string;
  backgroundColor?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
}

const defaultProps: Props = {
    border: 'none',
    backgroundColor: '#000',
    color: '#F9D',
    children: '',
    height: '20px',
    radius: '999px',
    width: '100px',
}

const Button: React.FC<Props> = (props) => {
    const mergedProps = { ...defaultProps, ...props };
  
    return (
      <button
        onClick={mergedProps.onClick}
        style={{
          backgroundColor: mergedProps.backgroundColor,
          border: mergedProps.border,
          borderRadius: mergedProps.radius,
          color: mergedProps.color,
          height: mergedProps.height,
          width: mergedProps.width,
          transition: 'background-color 0.2s ease-in-out',
        }}
      >
        {mergedProps.children}
      </button>
    );
  };

export default Button;