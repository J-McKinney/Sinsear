// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import styling from "./App.css";

function App() {
  return (
    <>
      <div className={styling.wrapper}>
        <Router>
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/Home/" component={Home} />
            <Route path="/Contact/" component={Contact} />
            <Route path="*" component={Error} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
