import React from "react";
import { Card } from "./Card";
import { AVATARS, Avatar } from "./Avatar";
import { Animation, ANIMATION_TYPES } from "./Animation";

const TITLE = "Мёртвая";
const DESCRIPTION = "или прикидывается";

export const DeadCell: React.FC = () => {
  return (
    <Animation type={ANIMATION_TYPES.TREMBLE}>
      <Card
        title={TITLE}
        description={DESCRIPTION}
        iconMark={<Avatar type={AVATARS.DEAD_CELL} />}
      />
    </Animation>
  );
};
