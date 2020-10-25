import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { KeysFromConst } from "../utils/types";
import Skull from "../assets/images/skull.png";
import Chicken from "../assets/images/chicken.png";
import Flash from "../assets/images/flash.png";

export const AVATARS = {
  ALIVE_CELL: "aliveCell",
  DEAD_CELL: "deadCell",
  LIFE: "life",
} as const;

export type TAvatar = KeysFromConst<typeof AVATARS>;

export const GRADIENT_MAP: Record<TAvatar, string> = {
  [AVATARS.DEAD_CELL]: "linear-gradient(180deg,#0D658A 0%,#B0FFB4 100%)",
  [AVATARS.ALIVE_CELL]: "linear-gradient(180deg,#FFB800 0%,#FFF7B0 100%)",
  [AVATARS.LIFE]: "linear-gradient(180deg,#AD00FF 0%,#FFB0E9 100%)",
};

const IMAGES_MAP: Record<TAvatar, string> = {
  [AVATARS.DEAD_CELL]: Skull,
  [AVATARS.ALIVE_CELL]: Flash,
  [AVATARS.LIFE]: Chicken,
};

const ALT_TITLES_MAP: Record<TAvatar, string> = {
  [AVATARS.DEAD_CELL]: "skull",
  [AVATARS.ALIVE_CELL]: "flash",
  [AVATARS.LIFE]: "chicken",
};

const ALIGNING: Record<TAvatar, FlattenSimpleInterpolation> = {
  [AVATARS.DEAD_CELL]: css`
    transform: translate(-1px, 0px);
  `,
  [AVATARS.ALIVE_CELL]: css`
    transform: translate(-2px, -1px);
  `,
  [AVATARS.LIFE]: css`
    transform: translate(-1px, 0px);
  `,
};

const AvatarContainer = styled.div<{ type: TAvatar }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${({ type }) => `background-image: ${GRADIENT_MAP[type]};`}
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img<{ type: TAvatar }>`
  width: 21px;
  height: 21px;
  ${({ type }) => ALIGNING[type]}
`;

export const Avatar: React.FC<{ type: TAvatar }> = ({ type }) => {
  return (
    <AvatarContainer type={type}>
      <Img
        type={type}
        alt={ALT_TITLES_MAP[type]}
        width="21px"
        height="auto"
        src={IMAGES_MAP[type]}
      />
    </AvatarContainer>
  );
};
