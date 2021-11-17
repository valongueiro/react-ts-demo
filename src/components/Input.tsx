import React from "react";

type InputProps = {
  value: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  return <input type="text" onChange={props.onChangeHandler} />;
};
