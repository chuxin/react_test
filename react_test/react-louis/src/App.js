import './bak/App.css';
import React from 'react';
import Router from "./router_test/Router";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//
//
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>你好啊</h3>
                <Router></Router>
            </div>
        );
    }
}

export default App;
