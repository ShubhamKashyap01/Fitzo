import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
  src?: string;
  icon?: any;
  size?: SizeProp | number;
}

const Icon: React.FC<IconProps> = (props) => {
  const { src, icon, size } = props;
  return (
    <>
      {src && (
        <img
          src={src}
          alt=""
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      )}
      {icon && <FontAwesomeIcon icon={icon} size={size} />}
    </>
  );
};

Icon.defaultProps = {
  src: "",
  icon: "",
  size: '2x',
};

export default Icon;
