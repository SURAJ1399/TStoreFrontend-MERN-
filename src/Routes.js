import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import AdminRoutes from "./auth/helper/AdminRoutes";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashBoard";


import AdminDashboard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import ManageCategories from "./admin/ManageCategory";
import ManageProduct from "./admin/ManageProducts";

import UpdateProduct  from "./admin/UpdateProduct";

function Routes() {
     return (
          <BrowserRouter>

               <Switch>

                    <Route path="/" exact component={Home} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/signin" exact component={Signin} />
                    <Route path="/user/dashboard" exact component={UserDashboard} />
                  
                  
                    <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
                
                    <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard}/>
                    <AdminRoutes path="/admin/create/category" exact component={AddCategory}/>
                    <AdminRoutes path="/admin/create/product" exact component={AddProduct}/>
                    <AdminRoutes path="/admin/categories" exact component={ManageCategories}/>
                    <AdminRoutes path="/admin/categories" exact component={ManageCategories}/>
                    <AdminRoutes path="/admin/categories" exact component={ManageCategories}/>
                    <AdminRoutes path="/admin/products" exact component={ManageProduct}/>
                    <AdminRoutes path="/admin/product/update/:productId" exact component={UpdateProduct}/>
                 
                                
                </Switch>
                
          </BrowserRouter>
     );
}

export default Routes;
