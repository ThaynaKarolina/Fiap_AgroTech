import React from "react";
import { Route, Routes as Switch, BrowserRouter } from 'react-router-dom';
import Home from "./Home";
import Step01 from "./SignUp/Step01";
import Step02 from "./SignUp/Step02";
import Step03 from "./SignUp/Step03";
import Step04 from "./SignUp/Step04";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Routes = () => {
    return (
            <Switch>
                <Route path='/' element={<Home />} />
                <Route path='/Step01' element={<Step01 />} />
                <Route path='/Step02' element={<Step02 />} />
                <Route path='/Step03' element={<Step03 />} />
                <Route path='/Step04' element={<Step04 />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Dashboard' element={<Dashboard />} />
            </Switch>
    )
}

export default Routes;