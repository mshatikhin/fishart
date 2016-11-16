﻿import {Route, IndexRoute} from "react-router";
import Layout from "../components/Layout/Layout";
import Portfolio from "../pages/Portfolio/Portfolio";
import Home from "../pages/Home";
import NotFound from "../components/NotFound/NotFound";
import Contact from "../pages/Contact/Contact";
import Services from "../components/Services";

let store;

export default function routes(storeRef) {
    store = storeRef;

    return (
        <Route path="/" component={ Layout }>
            <IndexRoute component={ Home }/>
            <Route path="home" component={ Home }/>
            <Route path="portfolio" component={ Portfolio }/>
            <Route path="services" component={ Services }/>
            <Route path="contact" component={ Contact }/>
            <Route path="*" component={ NotFound }/>
        </Route>
    )
}
