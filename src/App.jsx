const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} - {props.exercises} units
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part
        name={props.part1}
        exercises={props.exercises1}
      />

      <Part
        name={props.part2}
        exercises={props.exercises2}
      />

      <Part
        name={props.part3}
        exercises={props.exercises3}
      />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units: {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}

const App = () => {
  const course = 'CSIT340'

  const part1 = 'CSIT321'
  const exercises1 = 3

  const part2 = 'CSIT327'
  const exercises2 = 3

  const part3 = 'IT365'
  const exercises3 = 3

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

export default App