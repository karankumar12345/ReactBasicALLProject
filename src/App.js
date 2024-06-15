import "./App.css";
import Navbar from "./Food-Recipe-APP/Header/Navbar";
import Intro from "./Food-Recipe-APP/Intro";
import Details from "./Food-Recipe-APP/Page/Details/Details";
import Favourite from "./Food-Recipe-APP/Page/Favourite";

import Accordian from "./components/Accordian/Accordian";
import GitFinder from "./components/GitHubs/GitFinder";
import Header from "./components/Header";
import ImageSlider from "./components/Image-Slider/ImageSlider";

import Index from "./components/Light-Dark/Index";
import LoadMore from "./components/Load-More-Button/LordMoreButton";
import ModelPopup from "./components/ModelPOpup/ModelPopup";
import Qrcode from "./components/Qr-Code/Qrcode";
import TICTACTOE from "./components/ReactTicTacToe/TICTACTOE";
import Scroll from "./components/Scroll/Scroll";
// import Search from './components/SearchAuto/Search';

import StarRating from "./components/Star-Rating/StarRating";
// import TIC from './components/TICTACTOE/TIC';
import Tabs from "./components/Tabs/Tabs";
import TreeView from "./components/TreeView/TreeView";
import menus from "./components/TreeView/data";

import Testing from "./components/UseFetch-custom-hook/Testing";
import FeatureFlagsGlobalState from "./components/feature-flag/Context";
import FeatureFlags from "./components/feature-flag/Index";
import Random from "./components/random-color/Random";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/imageslide"
          element={<ImageSlider url={"https://picsum.photos/v2/list"} />}
        />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/random" element={<Random />} />
        <Route path="/starrating" element={<StarRating />} />
        <Route path="/lordmore" element={<LoadMore />} />
        <Route path="/treeview" element={<TreeView menus={menus} />} />
        <Route path="/qrcode" element={<Qrcode />} />
        <Route path="/lightdark" element={<Index />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/modelpopup" element={<ModelPopup />} />
        <Route path="/tictactoe" element={<TICTACTOE />} />
        <Route path="/githubaccount" element={<GitFinder />} />
        {/* <Route path='/SearchAutoComplete' element={<Search/>}/> */}

        <Route
          path="/featureFlags"
          element={
            <FeatureFlagsGlobalState>
              <FeatureFlags />
            </FeatureFlagsGlobalState>
          }
        />
        <Route path="/customhook" element={<Testing />} />
        <Route path="/FoodRecipe" element={<Intro />} />

        <Route path="/FoodRecipe/recipe-item/:id" element={<Details />} />
        <Route path="/FoodRecipe/favorites" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
