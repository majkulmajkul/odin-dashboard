import "./Header.css";
import { IoSearch, IoNotificationsOutline } from "react-icons/io5";
import { Button, ProfilePic } from "./Utils";

import dogImage from './assets/avatars/dog.png'

export default function Header() {



    return (
        <div className="main-header">
            <div className="header-line-one">
                <div className="search-icon">
                    <IoSearch size="1.2rem" />
                </div>
                <div className="search-bar">
                    <input type="text" />
                </div>
                <div className="notifications-icon">
                    <IoNotificationsOutline size="1.2rem" />
                </div>
                <ProfilePic
                    className="profile-pic-small"
                    size="s"
                    url={dogImage}
                />
                <h3 className="full-name">Morgan Oakley</h3>
            </div>
            <div className="header-line-two">
                <ProfilePic
                    size="m"
                    url={dogImage}
                />
                <div>
                    <p>Hi there,</p>
                    <h3>Morgan Oakley (@morgan)</h3>
                </div>
                <Button name="New" />
                <Button name="Upload" />
                <Button name="Share" />
            </div>
        </div>
    );
}
