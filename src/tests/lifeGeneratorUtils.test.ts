import {
  isLifeToArise,
  isLifeToDie,
  removeLife,
} from "../components/LifeGenerator/utils";
import { CREATION_ITEMS } from "../components/LifeGenerator/CreationProcess";

describe("isLifeToArise util functions should work correctly", () => {
  it("isLifeToArise returns false for empty array", () => {
    expect(isLifeToArise([])).toBe(false);
  });
  it("isLifeToArise returns false for one aliveCell in array", () => {
    expect(isLifeToArise([{ kind: CREATION_ITEMS.ALIVE_CELL, id: 1 }])).toBe(
      false
    );
  });
  it("isLifeToArise returns true for two aliveCell in array in sequence", () => {
    expect(
      isLifeToArise([
        { kind: CREATION_ITEMS.ALIVE_CELL, id: 1 },
        { kind: CREATION_ITEMS.ALIVE_CELL, id: 2 },
      ])
    ).toBe(true);
  });
  it("isLifeToArise returns false for two aliveCell not in sequence", () => {
    expect(
      isLifeToArise([
        { kind: CREATION_ITEMS.ALIVE_CELL, id: 1 },
        { kind: CREATION_ITEMS.DEAD_CELL, id: 2 },
        { kind: CREATION_ITEMS.ALIVE_CELL, id: 3 },
      ])
    ).toBe(false);
  });
  it("isLifeToArise returns true two aliveCell not in sequense", () => {
    expect(
      isLifeToArise([
        { kind: CREATION_ITEMS.ALIVE_CELL, id: 1 },
        { kind: CREATION_ITEMS.ALIVE_CELL, id: 2 },
        { kind: CREATION_ITEMS.ALIVE_CELL, id: 3 },
      ])
    ).toBe(true);
  });
});

describe("isLifeToDie util functions should work correctly", () => {
  it("isLifeToArise returns false for empty array", () => {
    expect(isLifeToDie([])).toBe(false);
  });
  it("isLifeToArise returns false for one dead cell in array", () => {
    expect(isLifeToDie([{ kind: CREATION_ITEMS.DEAD_CELL, id: 1 }])).toBe(
      false
    );
  });
  it("isLifeToArise returns false for two dead cell in array in sequence", () => {
    expect(
      isLifeToDie([
        { kind: CREATION_ITEMS.DEAD_CELL, id: 1 },
        { kind: CREATION_ITEMS.DEAD_CELL, id: 2 },
      ])
    ).toBe(false);
  });
  it("isLifeToArise returns false for three dead cell in array in sequence but with no Life found", () => {
    expect(
      isLifeToDie([
        { kind: CREATION_ITEMS.DEAD_CELL, id: 1 },
        { kind: CREATION_ITEMS.DEAD_CELL, id: 2 },
        { kind: CREATION_ITEMS.DEAD_CELL, id: 3 },
      ])
    ).toBe(false);
  });
  it("isLifeToArise returns true for three dead cell in array in sequence and Life near", () => {
    expect(
      isLifeToDie([
        { kind: CREATION_ITEMS.LIFE, id: 0 },
        { kind: CREATION_ITEMS.DEAD_CELL, id: 1 },
        { kind: CREATION_ITEMS.DEAD_CELL, id: 2 },
        { kind: CREATION_ITEMS.DEAD_CELL, id: 3 },
      ])
    ).toBe(true);
  });
  it("isLifeToArise returns false for three dead cell in array in sequence but Life not near", () => {
    expect(
      isLifeToDie([
        { kind: CREATION_ITEMS.LIFE, id: 0 },
        { kind: CREATION_ITEMS.ALIVE_CELL, id: 1 },
        { kind: CREATION_ITEMS.DEAD_CELL, id: 2 },
        { kind: CREATION_ITEMS.DEAD_CELL, id: 3 },
        { kind: CREATION_ITEMS.DEAD_CELL, id: 5 },
      ])
    ).toBe(false);
  });
});

describe("Should remove life from list", () => {
  const input = [
    {
      kind: CREATION_ITEMS.ALIVE_CELL,
      id: 0,
    },
    {
      kind: CREATION_ITEMS.LIFE,
      id: 1,
    },
    {
      kind: CREATION_ITEMS.DEAD_CELL,
      id: 2,
    },
    {
      kind: CREATION_ITEMS.DEAD_CELL,
      id: 3,
    },
    {
      kind: CREATION_ITEMS.DEAD_CELL,
      id: 4,
    },
  ];
  const output = [
    {
      kind: CREATION_ITEMS.ALIVE_CELL,
      id: 0,
    },
    {
      kind: CREATION_ITEMS.DEAD_CELL,
      id: 2,
    },
    {
      kind: CREATION_ITEMS.DEAD_CELL,
      id: 3,
    },
    {
      kind: CREATION_ITEMS.DEAD_CELL,
      id: 4,
    },
  ];
  expect(removeLife(input)).toEqual(output);
});
