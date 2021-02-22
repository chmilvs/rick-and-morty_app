import List from "./components/List/List";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharInfo from "./components/CharInfo/CharInfo";
import { Context } from "./context/context";
import { useReducer } from "react";
import reducer from "./utils/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <BrowserRouter>
      <Context.Provider value={{ state, dispatch }}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <List />
          </Route>

          <Route path={`${process.env.PUBLIC_URL}/:id`}>
            <CharInfo />
          </Route>
        </Switch>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
