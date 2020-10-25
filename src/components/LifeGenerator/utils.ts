import React from "react";
import { CREATION_ITEMS, TCreationProcess } from "./CreationProcess";

export const getCellVitality = (): true | false => Boolean(Math.random() < 0.5);

export const isLifeToArise = (creationProcess: TCreationProcess): boolean => {
  return (
    creationProcess.length > 1 &&
    creationProcess
      .slice(creationProcess.length - 2)
      .every((item) => item.kind === CREATION_ITEMS.ALIVE_CELL)
  );
};

export const isLifeToDie = (creationProcess: TCreationProcess): boolean => {
  const hasThreeLastDeadCells = creationProcess
    .slice(creationProcess.length - 3)
    .every((item) => item.kind === CREATION_ITEMS.DEAD_CELL);
  const hasLifeNear =
    creationProcess.length > 3 &&
    creationProcess[creationProcess.length - 4].kind === CREATION_ITEMS.LIFE;
  return hasThreeLastDeadCells && hasLifeNear;
};

export const removeLife = (
  creationProcess: TCreationProcess
): TCreationProcess => {
  const indexOfLifeToRemove = creationProcess.length - 4;
  return [
    ...creationProcess.slice(0, indexOfLifeToRemove),
    ...creationProcess.slice(indexOfLifeToRemove + 1),
  ];
};

export const scrollBottom = (ref: React.RefObject<HTMLElement>): void => {
  const element = ref?.current;
  if (!element) {
    return;
  }
  element.scrollTop = element.scrollHeight;
};
