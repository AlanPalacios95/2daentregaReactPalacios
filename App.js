import { Provider } from "react-redux";
import TabNavigation from "./src/navigation/TabNavigatior";
import store from "./src/store/index";

export default function App() {
  return(

  <Provider store={store}>
    <TabNavigation />
  </Provider>
  );
}
