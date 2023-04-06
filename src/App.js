import logo from './logo.svg';
import './App.css';
import {Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import List from "./components/board/List";
import Detail from "./components/board/Detail";
import Insert from "./components/board/Insert";
import Update from "./components/board/Update";

function App() {
  return (
    <div className="App">
      <header>
          <Router>
              <Header/>
          <Routes>
              <Route exact path={"/"} element={<Home/>}/>
              <Route exact path={"/board/list"} element={<List/>}/>
              <Route exact path={"/board/detail/:no"} element={<Detail/>}/>
              <Route exact path={"/board/insert"} element={<Insert/>}/>
              <Route exact path={"/board/update/:no"} element={<Update/>}/>
          </Routes>
              {/*<Footer/>    */}
          </Router>

      </header>
    </div>
      // <Fragment>
      //
      //   <Header/>
      //     <Home/>
      // </Fragment>

  );
}

export default App;
