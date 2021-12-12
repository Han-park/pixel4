import React from "react";
import "./Pages.css";

import Header from "../components/Header2";
import MainMobileHeader from '../components/main/MainMobileHeader';
import { autocompleteClasses } from "@mui/material";

export default function NotFoundPage(){
    return(
        <div>


        <div className="MainDesktopHeader">   
           <Header />
        </div>
        <div className="MainMobileHeader">
            <MainMobileHeader />
        </div>
        <img sx={{width: '100%', mt: 6, ml: 'auto'}} src="http://hanparkinfo.cafe24.com/pixel/404image.png"></img>

        </div>
    );
}