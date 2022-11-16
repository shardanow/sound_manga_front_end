import React from "react";
import MainButtonPanel from "./MainButtonPanel";
import Discussion from "./Discussion";

export default function InnerWrapper() {

    return(
        <div className="innerWrapper">
            <MainButtonPanel/>
            <Discussion/>
        </div>
    )
}