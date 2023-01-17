import Project from "./Project"
import "./Projects.css"

export default function Projects() {
    return (
        <div className="main-projects">
            <h4 className="your-projects-title">Your Projects</h4>
            <Project projectTitle="Super Cool Project" projectText="Quisque tempus lacus non pharetra iaculis. Donec efficitur dapibus tortor a pellentesque. Nulla dapibus posuere massa eget mattis. Sed eget vestibulum justo." />
            <Project projectTitle="Less Cool Project" projectText="Morbi facilisis magna at dolor rutrum, eget viverra risus ultricies. Duis mauris lorem, eleifend vel malesuada sed, tincidunt non ante." />
            <Project projectTitle="Impossible App" projectText="In ipsum mauris, viverra sit amet sapien a, consequat ornare sem. Vivamus eu risus quis quam congue pulvinar. Sed ornare aliquet velit sed sodales." />
            <Project projectTitle="Easy Peasy App" projectText="Quisque sollicitudin imperdiet ante nec vestibulum. Curabitur eget sem at leo dignissim scelerisque sed ut nulla. Sed rhoncus quis purus vel tincidunt. Donec metus quam, tincidunt vel nisi eu, accumsan viverra enim." />
            <Project projectTitle="Ad Blocker" projectText="In luctus enim ac nulla pretium gravida. Nullam eget malesuada enim, a mattis massa. Sed aliquam aliquam justo. Donec libero massa, egestas vitae eros eget, sagittis molestie mi." />
            <Project projectTitle="Icons By freepik.com" projectText="Maecenas id dui metus. Sed leo massa, lobortis quis dictum ut, porttitor elementum velit." />

        </div>
    )
}