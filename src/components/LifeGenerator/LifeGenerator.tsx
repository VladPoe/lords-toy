import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Layout } from "../Layout";
import { Heading } from "../Heading";
import {
  TCreationItem,
  TCreationKind,
  TCreationProcess,
  CreationProcess,
  CREATION_ITEMS,
} from "./CreationProcess";
import {
  isLifeToArise,
  isLifeToDie,
  removeLife,
  getCellVitality,
  scrollBottom,
} from "./utils";
import { adaptive } from "../../tokens/screen";

const FooterButtonWrap = styled.div`
  ${adaptive.L} {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  ${adaptive.XL} {
    position: absolute;
    right: 36px;
    top: 72px;
    width: 300px;
  }
`;

export const LifeGenerator: React.FC = () => {
  const [creationProcess, setCreationProcess] = useState<TCreationProcess>([]);
  const itemsContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    scrollBottom(itemsContainerRef);
  }, [creationProcess]);

  const clickHandler = (): void => {
    const newCellKind: TCreationKind = getCellVitality()
      ? CREATION_ITEMS.ALIVE_CELL
      : CREATION_ITEMS.DEAD_CELL;
    const newCell: TCreationItem = {
      kind: newCellKind,
      id: Math.random(),
    };
    const creationProcessUpdated: TCreationProcess = [
      ...creationProcess,
      newCell,
    ];
    if (isLifeToArise(creationProcessUpdated)) {
      setCreationProcess([
        ...creationProcessUpdated,
        {
          kind: CREATION_ITEMS.LIFE,
          id: Math.random(),
        },
      ]);
      return;
    }
    if (isLifeToDie(creationProcessUpdated)) {
      setCreationProcess(removeLife(creationProcessUpdated));
      return;
    }
    setCreationProcess(creationProcessUpdated);
  };

  return (
    <Layout.RootWrapper>
      <Layout.PageLayout>
        <Layout.Header>
          <Heading>Клеточное наполнение</Heading>
        </Layout.Header>
        <Layout.Main ref={itemsContainerRef}>
          <CreationProcess list={creationProcess} />
        </Layout.Main>
        <Layout.Footer>
          <FooterButtonWrap>
            <Button type="button" text="Сотворить" onClick={clickHandler} />
          </FooterButtonWrap>
        </Layout.Footer>
      </Layout.PageLayout>
    </Layout.RootWrapper>
  );
};
