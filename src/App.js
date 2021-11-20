import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SeconderyButton } from "./components/atoms/button/SeconderyButton";
import { SearchInput } from "./components/molcules/SearchInput";
import { UserCard } from "./components/organism/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

const user = {
  name: "勇人",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "dddd@ddd.com",
  phone: "080-1234-5678",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <HeaderOnly>
      <PrimaryButton>テスト</PrimaryButton>
      <SeconderyButton>検索</SeconderyButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </HeaderOnly>
  );
}
