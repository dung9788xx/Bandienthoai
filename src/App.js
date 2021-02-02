import Root from "./Root";
import './App.css';
import {Provider} from 'react-redux'
import store from "./js/store";
function App() {
  return (
      <Provider store={store}>
        <Root></Root>
      </Provider>

  );
}

export default App;
