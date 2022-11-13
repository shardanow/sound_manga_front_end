import React from "react";
import InnerWrapper from "../../MangaTileComponents/InnerWrapper";
import MangaTileMainImg from "../../MangaTileComponents/MangaTileMainImg";

export default function MangaTileContentContainer() {

   
    return(
        <div className="contentContainer">
            <MangaTileMainImg src="/images/MangaTile/mainImg.png"/>
            <InnerWrapper/>
        </div>
    )
}