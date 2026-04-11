import { footerSocialLinks } from '../../Constant/Data'

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text-wrapper">
            <p className="footer-text">
              <span className="footer-copyright">© {new Date().getFullYear()} Peter Molope Portfolio</span>
              <span className="footer-divider">•</span>
              <span className="footer-built">Built with passion and code</span>
            </p>
            <p className="footer-author">
              <span className="footer-by-text">by</span>
              <a href="https://github.com/PeterMolope" target="_blank" rel="noopener noreferrer" className="footer-author-link">
                <i className="fas fa-code"></i>
                <span>Peter Molope</span>
              </a>
            </p>
          </div>
          <div className="footer-social">
            {footerSocialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
