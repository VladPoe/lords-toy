import React from "react";
import { Card } from "./Card";
import { AVATARS, Avatar } from "./Avatar";
import { Animation, ANIMATION_TYPES } from "./Animation";

const TITLE = "Живая";
const DESCRIPTION = "и шевелится!";

export const AliveCell: React.FC = () => {
  return (
    <Animation type={ANIMATION_TYPES.FROM_LEFT}>
      <Card
        title={TITLE}
        description={DESCRIPTION}
        iconMark={<Avatar type={AVATARS.ALIVE_CELL} />}
      />
    </Animation>
  );
};
