import './App.css'

const Header = ({ course }) => {
  return (
    <header className="site-header">
      <div className="hero">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> THE COURSE INDEX</div>
          <h1>{course.name}<span className="hero-period">.</span></h1>
          <p className="hero-subtitle">A study in <em>progress.</em></p>
          <p className="hero-description">
            Three focused disciplines. One considered path forward.
            A closer look at the work behind the next chapter.
          </p>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-glow" />
          <div className="art-ring art-ring-outer" />
          <div className="art-ring art-ring-middle" />
          <div className="art-ring art-ring-inner" />
          <div className="art-orbit art-orbit-one"><span /></div>
          <div className="art-orbit art-orbit-two"><span /></div>
          <div className="art-core">
            <span className="art-core-label">THE COLLECTION</span>
            <span className="art-core-number">03</span>
            <span className="art-core-detail">DISCIPLINES</span>
          </div>
          <span className="art-coordinate art-coordinate-top">00° 01′ N</span>
        </div>
      </div>
    </header>
  )
}

const handleCardPointerMove = (event) => {
  if (event.pointerType === 'touch') return

  const card = event.currentTarget
  const bounds = card.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width
  const y = (event.clientY - bounds.top) / bounds.height

  card.style.setProperty('--pointer-x', `${x * 100}%`)
  card.style.setProperty('--pointer-y', `${y * 100}%`)
  card.style.setProperty('--rotate-x', `${(0.5 - y) * 7}deg`)
  card.style.setProperty('--rotate-y', `${(x - 0.5) * 7}deg`)
}

const handleCardPointerLeave = (event) => {
  const card = event.currentTarget
  card.style.setProperty('--rotate-x', '0deg')
  card.style.setProperty('--rotate-y', '0deg')
}

const Part = ({ part, index }) => {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article
      className="part-card"
      style={{ '--card-index': index }}
      onPointerMove={handleCardPointerMove}
      onPointerLeave={handleCardPointerLeave}
    >
      <div className="part-card-glow" aria-hidden="true" />
      <div className="part-card-top">
        <span>DISCIPLINE / {number}</span>
        <span className="part-card-star" aria-hidden="true">✳</span>
      </div>
      <div className="part-card-body">
        <span className="part-number" aria-hidden="true">{number}</span>
        <h3>{part.name}</h3>
      </div>
      <div className="part-card-bottom">
        <span>{String(part.exercises).padStart(2, '0')} UNITS</span>
        <span className="part-card-arrow" aria-hidden="true">↗</span>
      </div>
    </article>
  )
}

const Content = ({ parts }) => {
  return (
    <section className="curriculum" id="curriculum" aria-labelledby="curriculum-title">
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> THE CURRICULUM</div>
          <h2 id="curriculum-title">The work, <em>in focus.</em></h2>
        </div>
        <p>A concise view of the three disciplines that shape this course.</p>
      </div>
      <div className="part-grid">
        {parts.map((part, index) => <Part key={part.name} part={part} index={index} />)}
      </div>
    </section>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <section className="total-panel" aria-label="Total course units">
      <div className="total-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> THE BIG PICTURE</div>
        <h2>Every detail<br /><em>adds up.</em></h2>
        <p>One complete view of the work across all three disciplines.</p>
      </div>
      <div className="total-figure">
        <span className="total-number">{String(total).padStart(2, '0')}</span>
        <span className="total-caption">TOTAL UNITS <span aria-hidden="true">↗</span></span>
      </div>
    </section>
  )
}

const Footer = ({ fullName, courseCode, section }) => {
  return (
    <footer className="site-footer">
      <span className="footer-identity">{fullName} - {courseCode} - {section}</span>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340',
    parts: [
      { name: 'CSIT321', exercises: 3 },
      { name: 'CSIT327', exercises: 3 },
      { name: 'IT365', exercises: 3 }
    ]
  }

  const fullName = 'Chrisnel Graine Caipang'
  const courseCode = 'CSIT340'
  const section = 'G8'

  return (
    <div className="page-shell">
      <div className="site-frame">
        <Header course={course} />
        <main>
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </main>
        <Footer fullName={fullName} courseCode={courseCode} section={section} />
      </div>
    </div>
  )
}

export default App
