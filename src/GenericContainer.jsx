import "./GenericContainer.css"

export default function GenericContainer(props) {
    return (
        <div className="generic-container">
            {props.children}
        </div>
    )
}