import "./Utils.css"

function Button(props) {
    return (
        <button className="custom-button">{props.name}</button>
    )
}

function ProfilePic(props) {
    return (
        <div className={props.className}>
            <img className={`profile-pic-${props.size}`} src={props.url} alt="Profile pic" />
        </div>

    )
}

function AnnouncementArticle(props) {
    return (
        <div className="announcement-article">
            <p><strong>{props.title}</strong></p>
            <p>{props.text}</p>
        </div>
    )
}

function Divider() {
    return (
        <div className="divider"></div>
    )
}


export { Button, ProfilePic, AnnouncementArticle, Divider }