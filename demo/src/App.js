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
  const [isAllowed, setIsAllowed] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 800) {
      setIsAllowed(false);
    }
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setIsAllowed(false);
      } else {
        setIsAllowed(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
  }, [dispatch]);

  if (!isAllowed) {
    return (
      <div className="App">
        <div className="flex flex-col justify-center items-center h-screen bg-black text-white ">
          <img
            src="https://i.postimg.cc/cJVb34tp/frwhite.png"
            alt="Ferrari Logo"
            className="w-40 mb-6 transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in"
          />
          <h2 className=" text-medium sfm:text-lg font-mono text-center max-w-md">
            ⚠️ This website is only designed for
            <span className="text-red-500"> screens larger than 800px </span>
            (tablet or desktop).
          </h2>
        </div>
      </div>
    );
  }

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
