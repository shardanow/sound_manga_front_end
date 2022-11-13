import React from "react";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import MangaTileContentContainer from "../Components/MainContainers/ContentContainer/MangaTileContentContainer.jsx";

function MangaTilePage(props) {

    return(
        <div className="mangaTilePage">
            <Header/>
            <MangaTileContentContainer />
            <Footer/>
        </div>
    )
}

export default MangaTilePage;