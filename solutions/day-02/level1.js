const rootElement = document.querySelector(".root")

const welcome = 'Welcome to 30 Days of React'
const title = 'Getting Started with React'
const subtitle = "JavaScript Library"
const student = {
    firstName: 'Victor',
    lastName: 'Maina'
}
const date = "Aug 29, 2022"


const header = (
    <header>
        <div className="header-wrapper">
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>Student: {student.firstName} {student.lastName}</p>
            <small>Date: {date}</small>
        </div>
    </header>
)

const numOne = 3
const numTwo = 2

const result = (
    <p>
        {numOne} + {numTwo} = {numOne + numTwo}
    </p>
)

const yearBorn = 1999
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
    <p>
        {' '}
        {student.firstName} {student.lastName} is {age} years old.
    </p>
)


const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map(tech => <li key={tech}>{tech}</li>)

const main = (
    <main>
        <div className="main-wrapper">
            <p>Prerequisite to get started <strong>React.js</strong>:</p>
            <ul>{ techsFormatted }</ul>
            {result}
            {personAge}
        </div>
    </main>
)

const footer = (
    <footer>
        <div className="footer-wrapper">

            <p>Copyright 2020</p>
        </div>
    </footer>
)

const app = (
    <div className='app'>
        {header}
        {main}
        {footer}
    </div>
)

ReactDOM.render(app, rootElement)