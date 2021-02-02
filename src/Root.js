import React from "react";
import Home from "./js/components/screens/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Page404 from "./js/components/screens/Page404";
import ProductDetail from "./js/components/screens/ProductDetail";
class Root extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/product/:id' component={ProductDetail}/>
                    <Route component={Page404}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Root;
