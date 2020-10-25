import React from "react";
import { Card } from "./Card";
import { AVATARS, Avatar } from "./Avatar";
import { Animation, ANIMATION_TYPES } from "./Animation";

const TITLE = "Жизнь";
const DESCRIPTION = "Ку-ку!";

export const Life: React.FC = () => {
  return (
    <Animation type={ANIMATION_TYPES.FADE_IN}>
      <Card
        title={TITLE}
        description={DESCRIPTION}
        iconMark={<Avatar type={AVATARS.LIFE} />}
      />
    </Animation>
  );
};
