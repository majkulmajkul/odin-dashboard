import "./Sidebar.css"
import { RiLayoutMasonryFill, RiProfileFill, RiMessage3Fill, RiTaskFill, RiSettingsFill } from "react-icons/ri"
import { MdHistory, MdOutlinePrivacyTip } from "react-icons/md"
import { AiFillHome } from "react-icons/ai"
import { CgCommunity } from "react-icons/cg"
import { BiSupport } from "react-icons/bi"










// MdOutlinePrivacyTip - Privacy

export default function Sidebar() {
    return (
        <div className="main-sidebar">
            <div className="logo-and-title">
                <RiLayoutMasonryFill size={"2rem"} /><h1>Dashboard</h1>

            </div>
            <div className="sidebar-menu">
                <AiFillHome size="1.5rem" />
                <h3>Home</h3>
                <RiProfileFill size="1.5rem" />
                <h3>Profile</h3>
                <RiMessage3Fill size="1.5rem" />
                <h3>Messages</h3>
                <MdHistory size="1.5rem" />
                <h3>History</h3>
                <RiTaskFill size="1.5rem" />
                <h3>Tasks</h3>
                <CgCommunity size="1.5rem" />
                <h3 className="communitiy-h3">Community</h3>
            </div>
            <div className="sidebar-menu-settings-etc">
                <RiSettingsFill size="1.5rem" />
                <h3>Settings</h3>
                <BiSupport size="1.5rem" />
                <h3>Support</h3>
                <MdOutlinePrivacyTip size="1.5rem" />
                <h3>Privacy</h3>
            </div>



        </div>
    )
}