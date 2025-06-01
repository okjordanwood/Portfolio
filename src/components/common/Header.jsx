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
          <a href="#education">Education</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a
            href="/Jordan_Wood_Resume-Full-Stack.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
