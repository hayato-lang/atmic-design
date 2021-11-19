import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SeconderyButton } from "./components/atoms/button/SeconderyButton";
import { SearchInput } from "./components/molcules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SeconderyButton>検索</SeconderyButton>
      <br />
      <SearchInput />
    </div>
  );
}
