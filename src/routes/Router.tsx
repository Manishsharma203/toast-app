import Layout from "layout";
import Bevarages from "pages/Bevarages";
import Cart from "pages/Cart";
import Desserts from "pages/Desserts";
import Food from "pages/Food";
import Menu from "pages/Menu";
import Special from "pages/Special";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={""} element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/special" element={<Special />}></Route>
        <Route path="/main" element={<Menu />}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/bevarages" element={<Bevarages />}></Route>
        <Route path="/desserts" element={<Desserts />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    </>
  )
);
