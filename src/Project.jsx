import "./Project.css"
import { AiFillEye, AiOutlineStar, AiOutlineFork } from "react-icons/ai"

export default function Project(props) {

    const { projectTitle, projectText } = props

    return (

        <div className="project-card">
            <h5>{projectTitle}</h5>
            <p>{projectText}</p>
            <div>
                <AiFillEye />
                <AiOutlineStar />
                <AiOutlineFork />
            </div>
        </div>

    )
}