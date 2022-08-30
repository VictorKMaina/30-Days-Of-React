export const user = {
    firstName: 'Jane',
    lastName: "Doe",
    title: 'Senior Frontend Engineer',
    skills: ['HTML', 'CSS', 'Sass', 'React', 'TypeScript', 'UX/UI', 'Django', 'NodeJS', 'Python'],
    dateJoined: 'Aug 31, 2022'
}

const details = (
    <div style={{ margin: '2rem 0' }}>
        <h3 style={{
            fontSize: "1.1rem",
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
        }}>
            {user.firstName} {user.lastName}
            <iconify-icon style={{ color: '#2ACFCF' }} icon="fa-solid:check-circle" width='16'></iconify-icon>
        </h3>
        <p style={{ marginBottom: "1rem" }}>{user.title}</p>
    </div>
)

export default details