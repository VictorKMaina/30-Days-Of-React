import { user } from "./details"

const singleSkill = (skill) => (
    <div style={{
        padding: '5px',
        backgroundColor: '#2ACFCF',
        borderRadius: '5px',
        color: 'white'
    }} key={skill}>{skill}</div>
)

const skills = (
    <div>
        <h4 style={{
            fontSize: "1.1rem",
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '1rem',
        }} > Skills</h4>

        <div style={{
            display: "flex",
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '2rem'
        }}>
            {user.skills.map(skill => {
                return singleSkill(skill)
            })}
        </div>
    </div>
)

export default skills