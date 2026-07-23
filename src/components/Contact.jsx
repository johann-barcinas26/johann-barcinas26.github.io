import './Contact.css'

// TODO: replace with your real GitHub/LinkedIn URLs
const socials = [
  { label: 'GitHub', href: 'https://github.com/johann-barcinas26' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/johann-barcinas/' },
]

function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section-label">Contact</p>
      <h2>Let's talk</h2>
      <p className="contact-email">
        <a href="mailto:johann.barcinas@outlook.com">johann.barcinas@outlook.com</a>
      </p>
      <div className="contact-socials">
        {socials.map((social) => (
          <a key={social.label} href={social.href}>
            {social.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
