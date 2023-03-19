import React from "react";
import { Routes, Route } from "react-router-dom";
import Map from "./components/Map";
import Search from "./components/Search";
import Home from "./components/Home";
import MainPage from "./components/MainPage";
import ProductSearch from "./components/ProductSearch";
import New from "./components/New";
import MyOrderHistory from "./components/MyOrderHistory";
import Alarm from "./components/Alarm";
import FavoriteStores from "./components/FavoriteStores";
import Settings from "./components/Settings";
import Userprofile from "./components/Userprofile";
import SampleBase from "./components/SampleBase";
const App = () => {
  return <div>
    <Routes>
      <Route path="/" component={Home} element={<Home />} />
      <Route path="/Map" component={Map} element={<Map />} />
      <Route path="/Search" component={Search} element={<Search />} />
      <Route path="/MainPage" component={MainPage} element={<MainPage />} />
      <Route path="/ProductSearch" component={ProductSearch} element={<ProductSearch />} />
      <Route path="/New" component={New} element={<New />} />
      <Route path="/MyOrderHistory" component={MyOrderHistory} element={<MyOrderHistory />} />
      <Route path="/Alarm" component={Alarm} element={<Alarm />} />
      <Route path="/FavoriteStores" component={FavoriteStores} element={<FavoriteStores />} />
      <Route path="/Settings" component={Settings} element={<Settings />} />
      <Route path="/Userprofile" component={Userprofile} element={<Userprofile />} />
      <Route path="/SampleBase" component={SampleBase} element={<SampleBase />} />
    </Routes>
  </div>;
}

export default App;
