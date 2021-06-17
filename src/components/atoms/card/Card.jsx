import React from "react";
import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px; // 影を作る x軸 y軸 ぼかしの強さ　ぼかしの広がり方
  border-radius: 8px;
  padding: 16px;
`;
