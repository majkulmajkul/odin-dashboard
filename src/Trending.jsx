import "./Trending.css"
import UserCard from "./UserCard"
import catImage from "./assets/avatars/cat.png"
import deerImage from "./assets/avatars/deer.png"
import monkeyImage from "./assets/avatars/monkey.png"
import henImage from "./assets/avatars/hen.png"

export default function Trending() {
    return (
        <div className="main-trending">
            <h4>Trending</h4>
            <div className="trending-container">
                <UserCard url={catImage} handle={"@Cat"} name={"Leonardo DaVinci"} />
                <UserCard url={deerImage} handle={"@Deer"} name={"Rolf Regen"} />
                <UserCard url={monkeyImage} handle={"@Monkey"} name={"Hans Dull"} />
                <UserCard url={henImage} handle={"@Hen"} name={"Anders Andersson"} />
            </div>

        </div>
    )
}