import React from "react";

type ButtonProps = {
  onClickHandler: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

export const Button = ({ onClickHandler }: ButtonProps) => {
  return (
    <button
      onClick={(event) => {
        onClickHandler(event, 1);
      }}
    >
      Click
    </button>
  );
};
