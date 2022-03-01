import React from "react";
import "./NavBar.css";
import { Icon } from "@iconify/react";

export default function NavBar() {
    return (
        <div className="nav-bar-wrapper">
            <div className="nav-bar__logo">
                <Icon icon="akar-icons:shipping-box-v1" />
                <span>todo</span>
            </div>
            <div className="user-utils">user</div>
        </div>
    );
}
