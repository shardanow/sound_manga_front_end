import React from "react";
import FooterMenuIcon from "./FooterMenuIcon";


export default function Footer() {
    return(
        <div className="footer">
            <FooterMenuIcon src="/images/footer/search.svg"/>
            <FooterMenuIcon src="/images/footer/favorites.svg"/>
            <FooterMenuIcon src="/images/footer/allManga.svg"/>
            <FooterMenuIcon src="/images/footer/notifications.svg"/>
            <FooterMenuIcon src="/images/footer/releaseCallendar.svg"/>
        </div>
    )
}