
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './redux';
import { getCharacters } from './redux/characters/actions';
import './App.css';



// Create redux store
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Kick off things by getting all characters
store.dispatch(getCharacters());

// Create app
// const container = document.querySelector('#root');

ReactDOM.render(
    <div id="safety-helmet">Reactor.core</div>,
    document.getElementById("supercontainer")
);
// ReactDOM.render(
//     <Button message="Luke Skywalker"/>,
//     document.getElementById('option0')
// );



// Render app
class AppContainer extends Component {
    render() {
        return (
            // <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
                // </AppContainer>
        )
    }

}
export default AppContainer;

// export default app;
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//             ok
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
