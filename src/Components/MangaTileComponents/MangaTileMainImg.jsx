import React from "react";

export default function MangaTileMainImg(props) {

    return(
        <div className="mainImg">
            <div className="mainImg_wrapper">
                <img src={props.src} alt="" className="mainImg_wrapper_img" />
                <div className="year-rating"></div>
                <div className="restr-vol"></div>
                <div className="statuses"></div>
            </div>
        </div>
    )
}