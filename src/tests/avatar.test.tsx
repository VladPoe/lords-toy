import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";

import { Avatar, AVATARS, GRADIENT_MAP } from "../components/Avatar";

describe("Avatar should be visually correct", () => {
  it("Avatar for alive cell has yellow background", () => {
    const avatar = renderer
      .create(<Avatar type={AVATARS.ALIVE_CELL} />)
      .toJSON();
    expect(avatar).toHaveStyleRule(
      "background-image",
      GRADIENT_MAP[AVATARS.ALIVE_CELL]
    );
  });

  it("Avatar for dead cell has green background", () => {
    const avatar = renderer
      .create(<Avatar type={AVATARS.DEAD_CELL} />)
      .toJSON();
    expect(avatar).toHaveStyleRule(
      "background-image",
      GRADIENT_MAP[AVATARS.DEAD_CELL]
    );
  });

  it("Avatar for new life has green violet", () => {
    const avatar = renderer.create(<Avatar type={AVATARS.LIFE} />).toJSON();
    expect(avatar).toHaveStyleRule(
      "background-image",
      GRADIENT_MAP[AVATARS.LIFE]
    );
  });
});
