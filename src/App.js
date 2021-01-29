import "./App.css";
import { useState } from "react";

import Nav from "./components/Navigation/Nav/Nav";
import AnimeContainer from "./containers/animeContainer";
import MangaContainer from "./containers/mangaContainer";
import ItemDetail from "./components/itemDetail/ItemDetail";
import ItemDetailManga from "./components/itemDetail/itemDetailManga";
import BookMarksPage from "./components/Bookmarks/BookMarksPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { UserContext } from "./components/itemDetail/UserContext";

function App() {
  const [bookmark, setBookmark] = useState("hello from context");

  return (
    <Router>
      <div className="App">
        <Nav />

        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch>
                  <Route path="/anime" exact component={AnimeContainer} />
                  <Route path="/manga" exact component={MangaContainer} />
                  <Route path="/anime/:id" component={ItemDetail} />
                  <Route path="/manga/:id" component={ItemDetailManga} />
                  <UserContext.Provider value={{ bookmark, setBookmark }}>
                    <Route path="/bookmarks" component={AnimeContainer} />
                  </UserContext.Provider>
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
