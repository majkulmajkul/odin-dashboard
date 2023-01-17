import "./UserCard.css"
import { ProfilePic } from "./Utils"

export default function UserCard(props) {
    return (
        <div className="user-card">
            <ProfilePic size="m" url={props.url} />
            <div className="user-card-names">
                <p className="user-card-handle"><strong>{props.handle}</strong></p>
                <p className="user-card-name">{props.name}</p>
            </div>
        </div>

    )
}