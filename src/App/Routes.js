// @flow

import React from "react";
import {Route, IndexRedirect} from "react-router";
import Layout from "../components/Layout/Layout";
import Portfolio from "../pages/Portfolio/Portfolio";
import Home from "../pages/Home";
import NotFound from "../components/NotFound/NotFound";
import Contact from "../pages/Contact/Contact";
import Services from "../components/Services";

let store;

export default function routes(storeRef: any) {
    store = storeRef;

    return (
        <Route path="/" component={ Layout }>
            <IndexRedirect to={"home"}/>
            <Route path="home" component={ Home }/>
            <Route path="portfolio" component={ Portfolio }/>
            <Route path="services" component={ Services }/>
            <Route path="contact" component={ Contact }/>
            <Route path="*" component={ NotFound }/>
        </Route>
    )
}
