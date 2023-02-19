import "./App.css";
import "./custom.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Head />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
