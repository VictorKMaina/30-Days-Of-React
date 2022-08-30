import { student } from "./header"
import profile from "./profile/profile"

const numOne = 3
const numTwo = 2
const result = <p>{numOne} + {numTwo} = {numOne + numTwo}</p>

const yearBorn = 1999
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {student.firstName} {student.lastName} is {age} years old.
  </p>
)

const techs = ['HTML', 'CSS', 'JavaScript'].map(tech => <li>{tech}</li>)

const main = (
  <main>
    <div className="main-wrapper">

      <p>
        Prerequisites to getting started with <strong><em>React.js</em></strong>:
      </p>
      <ul>{techs}</ul>
      {result}
      {personAge}
      {profile}
    </div>
  </main>
)

export default main