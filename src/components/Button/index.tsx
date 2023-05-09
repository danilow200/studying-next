import React, { useState } from "react";
import { theme } from "../../styles/Theme";

interface Props {
  border?: string;
  backgroundColor?: string;
  color?: string;
  children?: React.ReactNode;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  onClick?: () => void;
  padding?: string;
  radius?: string;
  secondary?: boolean;
  width?: string;
}

const Button: React.FC<Props> = (props) => {
  const defaultProps: Props = {
    border: 'none',
    backgroundColor: props.secondary ? theme.colors.secondary :theme.colors.primary,
    color: props.secondary ? theme.colors.primary : theme.colors.secondary,
    children: '',
    height: '35px',
    radius: '999px',
    padding: '5px 20px',
    width: '',
  }


  const mergedProps = { ...defaultProps, ...props };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  return (
    <button
      onClick={mergedProps.onClick}
      style={{
        alignItems: 'center',
        backgroundColor: isHovering ? mergedProps.color : mergedProps.backgroundColor,
        border: mergedProps.border,
        borderRadius: mergedProps.radius,
        color: isHovering ? mergedProps.backgroundColor : mergedProps.color,
        display: 'flex',
        fontFamily: mergedProps.fontFamily,
        fontSize: mergedProps.fontSize,
        fontWeight: mergedProps.fontWeight,
        justifyContent: 'center',
        height: mergedProps.height,
        padding: mergedProps.padding,
        width: mergedProps.width,
        transition: 'background-color 0.2s ease-in-out',
        cursor: 'pointer',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {mergedProps.children}
    </button>
  );
};

export default Button;