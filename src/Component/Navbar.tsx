import Link from "next/link";
import "../style/header.css";

export default function Navbar() {
    return (
        <div>
            <header className="header">
                <div>
                    <h1 className="logo"><a href="/">Nadia Idrees!</a></h1>
                </div>
                <nav className="header-right">
                    <ul className="header-link">
                        <li><Link href="/" className="nav-link">Home</Link></li>
                        <li><Link href="/about" className="nav-link">About Us</Link></li>
                        <li><Link href="/contact" className="nav-link">Contact Us</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
};




