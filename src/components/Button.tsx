import React from "react";
import styled from "styled-components";
import { violet, violetBlack, yellow } from "../tokens/colors";
import { adaptive } from "../tokens/screen";

const ButtonStyled = styled.button`
  cursor: pointer;
  color: white;
  background-color: ${violet};
  padding-top: 10px;
  padding-bottom: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.0125em;
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition-property: background-color, color;
  transition-duration: 200ms;

  &:hover {
    background-color: ${yellow};
    color: ${violetBlack};
  }

  ${adaptive.M} {
    padding-top: 18px;
    padding-bottom: 18px;
  }
`;

export type TButton = {
  text: string;
  htmlTitle?: string;
  type?: "button" | "submit" | "reset";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<TButton> = ({
  text,
  htmlTitle,
  type = "button",
  onClick,
}) => {
  return (
    <ButtonStyled title={htmlTitle} type={type} onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};
