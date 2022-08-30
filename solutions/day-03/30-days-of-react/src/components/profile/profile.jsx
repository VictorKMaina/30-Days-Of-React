import profileImage from "./profileImage"
import details, { user } from "./details"
import skills from "./skills"

const styles = {
    padding: '2rem',
    // maxWidth: "85%",
    borderRadius: "15px",
    margin: "2rem auto",
    boxShadow: "2px 3px 15px rgba(0, 0, 0, 0.1)"
}

const profile = (
    <div style={styles} className="profile-card">
        {profileImage}
        {details}
        {skills}

        <div style={{
            color: 'grey',
            fontSize: '0.8rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px'
        }}>
            <iconify-icon icon="bx:time-five" width="16"></iconify-icon>
            Joined on {user.dateJoined}
        </div>
    </div>
)

export default profile