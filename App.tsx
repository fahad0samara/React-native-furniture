import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";

import Navigation from "./navigation";
import {Provider, useDispatch, useSelector} from "react-redux";

import store from "./redux/store";








export default function App() {

  const isLoadingComplete = useCachedResources();


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>

      
        <Provider store={store}>
          <Navigation />
          <StatusBar />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
