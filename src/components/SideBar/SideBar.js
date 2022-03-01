import React from "react";
import "./SideBar.css";
import { Icon } from "@iconify/react";

export default function SideBar() {
    return (
        <div className="side-bar-wrapper">
            <div className="user-name">
                <Icon icon="lucide:sidebar-close" />
                <span>Do Long Minh</span>
            </div>
            <div className="functions">
                <div className="function__list">
                    <div className="item active">
                        <Icon icon="ant-design:unordered-list-outlined" />
                        <span>Todo List</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
