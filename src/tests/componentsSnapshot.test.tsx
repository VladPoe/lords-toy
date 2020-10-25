import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";

import { AliveCell } from "../components/AliveCell";
import { DeadCell } from "../components/DeadCell";
import { Life } from "../components/Life";
import { Button } from "../components/Button";

describe("Basic visual component should be rendered correctly", () => {
  it("AliveCell valid snapshot", () => {
    const aliveCell = renderer.create(<AliveCell />).toJSON();
    expect(aliveCell).toMatchSnapshot();
  });

  it("DeadCell valid snapshot", () => {
    const deadCell = renderer.create(<DeadCell />).toJSON();
    expect(deadCell).toMatchSnapshot();
  });

  it("Life component valid snapshot", () => {
    const life = renderer.create(<Life />).toJSON();
    expect(life).toMatchSnapshot();
  });

  it("Button component valid snapshot", () => {
    const button = renderer
      .create(<Button text="test button" type="submit" onClick={() => null} />)
      .toJSON();
    expect(button).toMatchSnapshot();
  });
});
