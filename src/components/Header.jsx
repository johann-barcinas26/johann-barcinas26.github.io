import './Header.css'

function Header() {
  return (
    <header className="header">
      <span className="header-name">Johann Barcinas</span>
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
