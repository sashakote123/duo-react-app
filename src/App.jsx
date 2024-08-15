import React, { useCallback, useRef, useState, useContext, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";




import { updateTranslates } from "./store/translateSlice"
import { updateState } from "./store/wordSlice";
import FindPareGame from "./components/games/findPare/FindPareGame";
import MainHeader from "./components/mainPage/MainHeader";
import MainPageNavigation from "./components/mainPage/MainPageNavigation";
import MainPageMenu from "./components/mainPage/MainPageMenu";
import MainMenuContent from "./components/mainPage/MainMenuContent";
import Vocabulary from "./components/mainPage/Vocabulary";

import { themesList } from "./lists/themesList";
import { Route, Routes } from "react-router";
import GifSearch from "./components/common/GifSearch";
import WordFromPicture from "./components/games/wordFromPicture/WordFromPicture";




function App() {

  const theme = useSelector(state => state.theme.theme)

  return (

    <>
      <MainHeader />
      <MainMenuContent />

      {theme && (
        <Vocabulary theme={theme.theme} description={theme.description} array={theme.array} />
      )}

    </>

  )

}

export default App