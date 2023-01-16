import "./UserCard.css"
import { ProfilePic } from "./Utils"

export default function UserCard(props) {
    return (
        <div className="user-card">
            <ProfilePic size="m" url={props.url} />
            <div className="user-card-names">
                <p><strong>{props.handle}</strong></p>
                <p>{props.name}</p>
            </div>
        </div>

    )
}