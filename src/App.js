import "./App.css";

import Nav from "./components/Navigation/Nav/Nav";
import AnimeContainer from "./containers/animeContainer";
import MangaContainer from "./containers/mangaContainer";
import ItemDetail from "./components/itemDetail/ItemDetail";
import ItemDetailManga from "./components/itemDetail/itemDetailManga";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch>
                  <Route path="/" exact component={AnimeContainer} />
                  <Route path="/anime" exact component={AnimeContainer} />
                  <Route path="/manga" exact component={MangaContainer} />
                  <Route path="/anime/:id" component={ItemDetail} />
                  <Route path="/manga/:id" component={ItemDetailManga} />
                  <Route path="/bookmarks" exact component={AnimeContainer} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
