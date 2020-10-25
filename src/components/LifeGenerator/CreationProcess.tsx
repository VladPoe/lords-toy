import React from "react";
import styled from "styled-components";
import { KeysFromConst } from "../../utils/types";
import { AliveCell } from "../AliveCell";
import { DeadCell } from "../DeadCell";
import { Life } from "../Life";
import { adaptive } from "../../tokens/screen";

export const CREATION_ITEMS = {
  ALIVE_CELL: "aliveCell",
  DEAD_CELL: "deadCell",
  LIFE: "life",
} as const;

export type TCreationKind = KeysFromConst<typeof CREATION_ITEMS>;

export type TCreationItem = {
  kind: TCreationKind;
  id: number;
};

export type TCreationProcess = Array<TCreationItem>;

const ITEMS_MAPPER: Record<TCreationKind, React.ReactElement> = {
  [CREATION_ITEMS.ALIVE_CELL]: <AliveCell />,
  [CREATION_ITEMS.DEAD_CELL]: <DeadCell />,
  [CREATION_ITEMS.LIFE]: <Life />,
};

const ListItem = styled.li``;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  ${adaptive.M} {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  ${adaptive.XL} {
    margin-left: 0;
    width: calc(100% - 340px);
  }

  ${ListItem} + ${ListItem} {
    margin-top: 4px;

    ${adaptive.L} {
      margin-top: 10px;
    }
  }
`;

export const CreationProcess: React.FC<{ list: TCreationProcess }> = ({
  list,
}) => {
  return (
    <List>
      {list.map((type: TCreationItem) => (
        <ListItem key={type.id}>{ITEMS_MAPPER[type.kind]}</ListItem>
      ))}
    </List>
  );
};
