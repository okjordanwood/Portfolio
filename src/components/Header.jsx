export default function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <a href="#top" className="logo-link">
          <img
            src="/custom-logo.svg"
            alt="Jordan Wood Logo"
            className="logo-img-large"
          />
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a
            href="/Jordan-Wood-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
