const me = {
    fullName: 'Victor Maina',
    country: 'Kenya',
    title: 'Web Developer',
    gender: 'Male',
    email: 'victormaina@example.com',
    phoneNumber: '+254 700 123456'
}

const mainStyles = {
    fontSize: '1.3rem',
    color: '#1a1a1a'
}

const learnedTech = ['Vue', 'Django', 'Python', 'TypeScript']

const jsxMain = (
    <main style={mainStyles}>
        <h1>{me.fullName}</h1>
        <p>{me.country}</p>
        <p>{me.title}</p>
        <p>{me.gender}</p>
        <p>{me.email}</p>
        <p>{me.phoneNumber}</p>
        <ul>
            {
                learnedTech.map(tech => <li>{tech}</li>)
            }
        </ul>
    </main>
)

const footerStyles = {
    backgroundColor: '#e5e5e5',
    fontSize: '0.8rem'
}

const jsxFooter = (
    <footer>
        Copyright 2022
    </footer>
)

const app = (
    <>
        {jsxMain}
        {jsxFooter}
    </>
)

const rootElement = document.querySelector('.root')
ReactDOM.render(app, rootElement)
