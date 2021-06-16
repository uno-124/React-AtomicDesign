import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

// 10要素の配列を定義、valに自動生成された番号が入る
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `jake-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@exsample.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex; // フレックスコンテナの指定(以降の要素を使用するため)
  flex-direction: column; // フレックスコンテナの並び方(縦並び)
  align-items: center; // フレックスコンテナの垂直方向に対して指定(中央揃え)
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
