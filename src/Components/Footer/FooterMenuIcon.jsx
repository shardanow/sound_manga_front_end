import React from "react";

export default function FooterMenuIcon(props){
    return(
        <div>
            <a href="#">
                <img src={props.src} alt="" />
            </a>
        </div>
    )
}