import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Signin } from "./containers/signin";
import Privateroute from "./private.route";
import { Homepage } from "./containers/home";
import { Route, Switch } from 'react-router-dom';
import { Signup } from "./containers/signup";
import { isAdminSignin } from "./action";
import { getCategory } from "./action/category";
import { getProduct } from "./action/product.action";

// main 
import { Product } from "./components/layout/products";
import { Category } from "./components/layout/category";
import { Getcategory } from "./components/layout/getcategory";
import { Getproduct } from "./components/layout/getproduct";
import { Updatecategory } from "./components/layout/category/update.category";
import { Updateproduct } from "./components/layout/products/update.product";
import { Profile } from "./containers/profile/index.js";
// App css 
import './App.css'
function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.adminsignIn)


  //componentDidMount or componentDidUpdate
  useEffect(() => {

    dispatch(isAdminSignin())
    dispatch(getCategory())
    dispatch(getProduct())

  }, [auth.authenticate])


  return (
    <div className="App  overflow-hidden " style={{height:"100vh"}}>


      <Switch>

        <Privateroute path="/" exact component={Homepage} />
        <Privateroute path="/catalog/product" exact component={Product} />
        <Privateroute path="/profile/:_id/:firstName/:lastName/:email/:role/" exact component={Profile} />
        <Privateroute path="/catalog/category" exact component={Category} />
        <Privateroute path="/catalog/categorylist" exact component={Getcategory} />
        <Privateroute path="/catalog/productlist" exact component={Getproduct} />
        <Privateroute path="/catalog/category/updatecategory/:_id/:name/" exact component={Updatecategory} />
        <Privateroute path="/catalog/product/updateproduct/:_id/:name/:caseQuantity/:retailPrice/:unitholesalePrice/:description/:category/:bestsaller/:styleanddimensions/" exact component={Updateproduct} />



        <Route path="/admin/signin" exact component={Signin} />
        <Route path="/admin/signup" exact component={Signup} />


      </Switch>
    </div>
  );
}


export default App;
