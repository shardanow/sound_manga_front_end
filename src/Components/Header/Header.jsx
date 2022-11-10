import React from "react";
import { Value } from "sass";
import { BackIcon } from "./BackIcon.tsx";
import { HeaderTitleName } from "./HeaderTitleName";




export default function Header(props) {

    

    return (
        <div className="header">
        <BackIcon/>
        <HeaderTitleName/>
        {/* <img src="12"></img> */}
        </div>
    )
}



