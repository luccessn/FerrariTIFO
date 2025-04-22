import "./App.css";
import { useEffect, useState } from "react";
import { useAppContext } from "./Context/AppContextProvider";
import {
  HideItemActions,
  UnHideItemActions,
} from "./Context/AppActionsCreators";
import { FirstSlide } from "./Components/FirstSlide/FirstSlide";
import { SecondSlide } from "./Components/SecondSlide/SecondSlide";
function App() {
  const { state, dispatch } = useAppContext();
  useEffect(() => {
    const showTimer = setTimeout(() => {
      dispatch(HideItemActions());
    }, 2000);
    const showTimer2 = setTimeout(() => {
      dispatch(UnHideItemActions());
    }, 2100);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(showTimer2);
    };
  }, []);

  return (
    <div className="App">
      {state.visibleIn && (
        <div>
          <FirstSlide />
        </div>
      )}
      <div>
        <SecondSlide />
      </div>
    </div>
  );
}

export default App;
