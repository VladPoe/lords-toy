import React from "react";
import styled from "styled-components";
import { violetBlack, violetDark } from "../tokens/colors";
import { adaptive } from "../tokens/screen";

const SIDE_PADDING_XS = "16px";
const SIDE_PADDING_XL = "36px";

const RootWrapper = styled.div`
  background-color: ${violetBlack};
  background-image: linear-gradient(
    to bottom,
    ${violetDark} 0%,
    ${violetBlack} 70%
  );
  min-height: 100vh;
`;

const PageLayout = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;

  ${adaptive.XL} {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Header = styled.header`
  padding-top: 16px;
  padding-left: ${SIDE_PADDING_XS};
  padding-right: ${SIDE_PADDING_XS};
  padding-bottom: 22px;

  ${adaptive.M} {
    padding-top: 22px;
    padding-bottom: 22px;
  }

  ${adaptive.XL} {
    padding-left: 20%;
    padding-right: 340px;
  }
`;

const Main = styled.main`
  padding-left: ${SIDE_PADDING_XS};
  padding-right: ${SIDE_PADDING_XS};
  overflow-y: auto;

  ${adaptive.XL} {
    padding-bottom: 28px;
    padding-left: 20%;
  }
`;

const Footer = styled.footer`
  color: white;
  margin: 0;
  text-align: center;
  margin-top: auto;
  padding-top: 16px;
  padding-bottom: 14px;
  padding-left: ${SIDE_PADDING_XS};
  padding-right: ${SIDE_PADDING_XS};
  box-sizing: border-box;
  background-color: ${violetBlack};

  ${adaptive.XL} {
    padding: 0;
  }
`;

export const Layout = {
  RootWrapper: RootWrapper,
  PageLayout: PageLayout,
  Header: Header,
  Main: Main,
  Footer: Footer,
};
