import "./Header.css";
import { IoSearch, IoNotificationsOutline } from "react-icons/io5";
import { Button, ProfilePic } from "./Utils";

export default function Header() {
    return (
        <div className="main-header">
            <div className="header-line-one">
                <div className="search-icon">
                    <IoSearch />
                </div>
                <div className="search-bar">
                    <input type="text" />
                </div>
                <div className="notifications-icon">
                    <IoNotificationsOutline />
                </div>
                <ProfilePic
                    className="profile-pic-small"
                    size="s"
                    url="https://thumbs.dreamstime.com/b/illustration-man-cartoon-head-profile-pattern-pop-art-comic-style-side-view-pop-art-92019162.jpg"
                />
                <h3 className="full-name">Morgan Oakley</h3>
            </div>
            <div className="header-line-two">
                <ProfilePic
                    size="m"
                    url="https://thumbs.dreamstime.com/b/illustration-man-cartoon-head-profile-pattern-pop-art-comic-style-side-view-pop-art-92019162.jpg"
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
