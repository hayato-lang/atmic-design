import styled from "styled-components";
import { SearchInput } from "../molcules/SearchInput";
import { UserCard } from "../organism/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `勇人${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "dddd@ddd.com",
    phone: "080-1234-5678",
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
      <SUsersArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUsersArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUsersArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
