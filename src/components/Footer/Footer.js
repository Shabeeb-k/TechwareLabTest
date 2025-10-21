
import './Footer.scss';
import Logo4 from '../../assets/images/Logo (4).png';
import Logo5 from '../../assets/images/Logo (5).png';
import Logo6 from '../../assets/images/Logo (6).png';
import Logo7 from '../../assets/images/Logo (7).png';
import Logo8 from '../../assets/images/Logo (8).png';
import Logo9 from '../../assets/images/Logo (9).png';
import Logo10 from '../../assets/images/Logo (10).png';
import InstagramIcon from '../../assets/images/instagram.png';
import FacebookIcon from '../../assets/images/facebook.png';
import LinkedinIcon from '../../assets/images/linkedin.png';

const Footer = () => {
  const logoMarqueeData = [
    { name: 'Logoipsum', image: Logo4 },
    { name: 'Logoipsum', image: Logo5 },
    { name: 'Logoipsum', image: Logo6 },
    { name: 'Logoipsum', image: Logo7 },
    { name: 'Logoipsum', image: Logo8 },
    { name: 'Logoipsum', image: Logo9 },
    { name: 'Logoipsum', image: Logo10 },
    { name: 'Logoipsum', image: Logo5 } // Logo11 as duplicate of Logo5
  ];



  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Marquee Section */}
        <div className="footer-logo-section">
          <div className="footer-logo-marquee">
            {logoMarqueeData.map((logo, index) => (
              <div key={index} className="footer-logo-item">
                <img src={logo.image} alt={logo.name} className="footer-logo-image" />
                
              </div>
            ))}
          </div>
        </div>
        
        {/* Social Media Footer Section */}
        <div className="social-media-footer">
          <div className="social-icons">
            <img src={InstagramIcon} alt="Instagram" className="social-icon instagram-icon" />
            <img src={FacebookIcon} alt="Facebook" className="social-icon facebook-icon" />
            <img src={LinkedinIcon} alt="LinkedIn" className="social-icon linkedin-icon" />
          </div>
          <div className="footer-text">
            Lorem Ipsum Lorem Ipsum
          </div>
          <div className="footer-copyright">
            © TechwareLab copyrights
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;