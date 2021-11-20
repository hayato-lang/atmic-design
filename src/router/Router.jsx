import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../components/page/Top";
import { Users } from "../components/page/Users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
