import React from "react";
import styled from "styled-components";

export type TCard = {
  title: string;
  description: string;
  iconMark?: React.ReactElement;
};

const AvatarWrap = styled.div``;

const InfoWrap = styled.div``;

const Title = styled.h6`
  font-weight: 500;
  font-size: 20px;
  margin: 0;
  letter-spacing: 0.0015em;
`;

const Description = styled.span`
  letter-spacing: 0.0025em;
  display: block;
`;

const CardContainer = styled.div`
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  display: flex;

  ${AvatarWrap} + ${InfoWrap} {
    margin-left: 16px;
  }

  ${Title} + ${Description} {
    margin-top: 3px;
  }
`;

export const Card: React.FC<TCard> = ({ title, description, iconMark }) => {
  return (
    <CardContainer>
      {iconMark && <AvatarWrap>{iconMark}</AvatarWrap>}
      <InfoWrap>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoWrap>
    </CardContainer>
  );
};
