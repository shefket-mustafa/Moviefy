import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
    import { Link } from 'react-router';
    import './footer.css';

    export default function Footer() {
    return (
        <>
        <div className='footer-container'>
            <div className='quick-links'><strong>Quick Links</strong>
                <Link to={'/'}>Home</Link>
                <Link to={'/movies'}>Movies</Link>
                <Link to={'/contact'}>Contact us</Link>
            </div>

            <div className='Reach us'><strong>Reach us</strong>
                <p><strong style={{color: 'black'}}>Email</strong>: shefket.must@gmail.com</p>
                <p><strong style={{color: 'black'}}>Adress</strong>: Burgas</p>
            </div>

            <div className='social'><strong>Social</strong>
            <a href='https://www.instagram.com/shefket_sum/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faInstagram} /> 
          </a>
          <a href='https://www.linkedin.com/in/shefket-mustafa-81356a360' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} /> 
          </a>
          <a href='https://github.com/shefket-mustafa' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} /> 
          </a>
            </div>
        </div>
        <div className='bot-text'>All rights reserved 2025</div>
        </>
        
        );
    }