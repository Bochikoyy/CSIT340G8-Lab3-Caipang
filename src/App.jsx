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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units:{' '}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
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

  const parts = [
    {
      name: 'CSIT321',
      exercises: 3
    },
    {
      name: 'CSIT327',
      exercises: 3
    },
    {
      name: 'IT365',
      exercises: 3
    }
  ]

  const fullName = 'Chrisnel Graine Caipang'
  const courseCode = 'CSIT340'
  const section = 'G8'

  return (
    <div>
      <Header course={course} />

      <Content parts={parts} />

      <Total parts={parts} />

      <Footer
        fullName={fullName}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App
