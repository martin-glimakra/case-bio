import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import movies from "./components/listor/movies";

import { useState, useEffect } from "react";

import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { Book } from "./pages/Book";
import { BookingInfo } from "./pages/BookingInfo";
import { Header } from "./components/Header/Header";

function App() {
  useEffect(() => {
    setState(movies);
  }, []);

  const [state, setState] = useState(null);

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/book/:theMovie" exact>
            <Book state={state} />
          </Route>
          <Route path="/bookinginfo/:theMovie/:time/:seats" exact>
            <BookingInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
