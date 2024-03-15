import { Provider } from "react-redux";
import store from "./src/store/index";
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
  return(

  <Provider store={store}>
    <MainNavigator />
  </Provider>
  );
}
