import React, { useEffect, useState } from "react";
import styled, {
  FlattenSimpleInterpolation,
  keyframes,
  Keyframes,
  css,
} from "styled-components";
import { KeysFromConst } from "../utils/types";

export const ANIMATION_TYPES = {
  FADE_IN: "fadeId",
  TREMBLE: "tremble",
  FROM_LEFT: "fromLeft",
} as const;

export type TAnimation = KeysFromConst<typeof ANIMATION_TYPES>;

const KEYFRAMES: Record<TAnimation, Keyframes> = {
  [ANIMATION_TYPES.FADE_IN]: keyframes`
    0% {
      opacity: 0;
      transform: scale(0);
    }
    60% {
      opacity: 0.3;
      transform: scale(0.6);
    }
    80% {
      opacity: 0.5;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `,
  [ANIMATION_TYPES.TREMBLE]: keyframes`
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(2px, -2px);
    }
    20% {
      transform: translate(0, 0);
    }
    30% {
      transform: translate(-2px, -2px);
    }
    40% {
      transform: translate(1px, -1px);
    }
    50% {
      transform: translate(0, 0);
    }
    60% {
      transform: translate(-3px, -3px);
    }
    70% {
      transform: translate(0, 0);
    }
    80% {
      transform: translate(2px, -2px);
    }
    90% {
      transform: translate(-1px, -1px);
    }
    100% {
      transform: translate(0, 0);
    }
  `,
  [ANIMATION_TYPES.FROM_LEFT]: keyframes`
    0% {
      transform: translate(-100%, 0);
      opacity: 0;
    }
    50% {
      transform: translate(4px, 0);
      opacity: 1
    }
    100% {
      transform: translate(0, 0);
    }
  `,
};

const ANIMATION: Record<TAnimation, FlattenSimpleInterpolation> = {
  [ANIMATION_TYPES.FADE_IN]: css`
    animation: 400ms ease-in ${KEYFRAMES[ANIMATION_TYPES.FADE_IN]};
  `,
  [ANIMATION_TYPES.TREMBLE]: css`
    animation: 500ms linear ${KEYFRAMES[ANIMATION_TYPES.TREMBLE]};
  `,
  [ANIMATION_TYPES.FROM_LEFT]: css`
    animation: 400ms ease-in ${KEYFRAMES[ANIMATION_TYPES.FROM_LEFT]};
  `,
};

const AnimationWrap = styled.div<{ animated: boolean; type: TAnimation }>`
  ${({ type }) => ANIMATION[type]};
`;

export const Animation: React.FC<{ type: TAnimation }> = ({
  type,
  children,
}) => {
  const [animated, setAnimatedStats] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => {
      setAnimatedStats(true);
    });
  }, []);
  return (
    <AnimationWrap animated={animated} type={type}>
      {children}
    </AnimationWrap>
  );
};
