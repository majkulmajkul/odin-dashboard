import "./Project.css"
import { AiFillEye, AiOutlineStar, AiOutlineFork } from "react-icons/ai"

export default function Project(props) {

    const { projectTitle, projectText } = props

    return (

        <div className="project-card">
            <h5>{projectTitle}</h5>
            <p>{projectText}</p>
            <div className="project-card-icons">
                <AiFillEye size="1.2rem" />
                <AiOutlineStar size="1.2rem" />
                <AiOutlineFork size="1.2rem" />
            </div>
        </div>

    )
}