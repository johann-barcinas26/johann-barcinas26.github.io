import './About.css'

// TODO: swap in your own bio and skill list
const skills = ['Embedded Systems', 'Microcontrollers', 'Python', 'C', 'Computer Engineering']

function About() {
  return (
    <section id="about" className="section">
      <p className="section-label">About</p>
      {/* Group for layout as theres elements next to each other */}
      <div className="about-layout">

        {/*Text element - bio and skills*/}
        <div className="about-text">
          
          <h1>Johann Barcinas</h1>
          <p className="about-bio">
            A curious and creative engineer interested in creating innovative solutions that make a positive impact.
          </p>

          <div className="about-skills">
          {skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
           ))}
          </div>
        </div> {/* End of about-text */}
        
        {/*Image element*/}
        <img className ="about-image" src="/public/profile.png" alt="Johann Barcinas" />

      </div>
    </section>
  )
}

export default About
