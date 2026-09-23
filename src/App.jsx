const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} - {props.part.exercises} units
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units:{' '}
      {props.part1.exercises +
        props.part2.exercises +
        props.part3.exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      {props.fullName} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340'

  const part1 = {
    name: 'CSIT321',
    exercises: 3
  }

  const part2 = {
    name: 'CSIT327',
    exercises: 3
  }

  const part3 = {
    name: 'IT365',
    exercises: 3
  }

  const fullName = 'Chrisnel Graine Caipang'
  const courseCode = 'CSIT340'
  const section = 'G8'

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Footer
        fullName={fullName}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App