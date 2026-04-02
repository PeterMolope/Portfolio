export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text-wrapper">
            <p className="footer-text">
              <span className="footer-copyright">© 2025 Developer Portfolio</span>
              <span className="footer-divider">•</span>
              <span className="footer-built">Built with passion and code</span>
            </p>
            <p className="footer-author">
              <span className="footer-by-text">by</span>
              <a href="https://www.linkedin.com/in/mohammad-abu-sakour-kn" target="_blank" rel="noopener noreferrer" className="footer-author-link">
                <i className="fas fa-code"></i>
                <span>Kan3an</span>
              </a>
            </p>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/mohammad-abu-sakour-kn" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="footer-social-link" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="footer-social-link" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
