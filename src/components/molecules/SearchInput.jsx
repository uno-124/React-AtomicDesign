import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <div>
      <Scontainer>
        <Input placeholder="検索条件を入力" />
        <SbuttonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SbuttonWrapper>
      </Scontainer>
    </div>
  );
};

const Scontainer = styled.div`
  display: flex;
  align-items: center;
`;

const SbuttonWrapper = styled.div`
  padding-left: 8px;
`;
