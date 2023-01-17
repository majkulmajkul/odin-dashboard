import "./Announcements.css"
import GenericContainer from "./GenericContainer"
import { AnnouncementArticle, Divider } from "./Utils"

export default function Announcements() {
    return (
        <div className="main-announcements">
            <h4>Announcements</h4>
            <GenericContainer>
                <AnnouncementArticle title="Site Maintenance" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Divider />
                <AnnouncementArticle title="Community Share Day" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Divider />
                <AnnouncementArticle title="Updated Privacy Policy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

            </GenericContainer>

        </div>
    )
}