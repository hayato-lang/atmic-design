import { Router } from "./router/Router";
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
  return <Router />;
}
