import { Route } from "react-router-dom";
import Main from "../Main/Main";

import "./App.css";

function App() {
  return (
    <Route>
      <div className="App">
        <div className="content">
          <Main> </Main>
        </div>
      </div>
    </Route>
  );
}

export default App;
