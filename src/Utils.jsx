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


export { Button, ProfilePic }