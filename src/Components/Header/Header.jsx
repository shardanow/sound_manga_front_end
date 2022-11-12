import React from "react";  
import { BackIcon } from "./BackIcon.tsx";
import { HeaderTitleName } from "./HeaderTitleName";
import { HeaderUserIcon } from "./HeaderUserIcon";




export default function Header(props) {

    

    return (
        <div className="header">
        <BackIcon/>
        <HeaderTitleName/>
        <HeaderUserIcon/>
        </div>
    )
}



