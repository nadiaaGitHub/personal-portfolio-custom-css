import Link from 'next/link';
import "../style/footer.css";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer className="footer">
             <div className="footer-content">
             <p className="footer-para">&copy; {new Date().getFullYear()} Nadia Idrees. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/" className='link'>Home</Link>
          <Link href="/about" className='link'>About</Link>
          <Link href="/contact" className='link'>Contact</Link>
        </div>
            <ul className="footer-social">
                <li><Link href="https://facebook.com" className='link'><FaFacebook /></Link></li>
                <li><Link href="https://youtube.com" className='link'><FaYoutube /></Link></li>
                <li><Link href="https://twitter.com" className='link'><FaTwitter /></Link></li>
                <li><Link href="https://instagram.com" className='link'><FaInstagram /></Link></li>
                <li><Link href="https://tiktok.com" className='link'><FaTiktok /></Link></li>
                <li><Link href="mailto:nadiaidrees210@gmail.com" className='link'><FaEnvelope /></Link></li>
            </ul>
            </div>
        </footer>
    );
};


