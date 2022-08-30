const welcome = 'Welcome to 30 Days of React'
const title = 'Getting started with React'
const subtitle = 'JavaScript Library'
export const student = {
  firstName: "Victor",
  lastName: "Maina"
}
const date = 'Aug 30, 2022'

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

export default header