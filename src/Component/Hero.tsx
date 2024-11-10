import "../style/hero.css";
import Image from "next/image";


export default function hero() {
    return (
        <div className="hero-container">
                    {/* left */}
            <div className="hero-left-box">
                <div>
                    <Image src={"/images/profile.png"}
                        width={200}
                        height={200}
                        className="hero-image"
                        alt="Profile"
                        />
                </div>
                        {/* right */}
                <div className="hero-right-box">
                    <h1 className="hero-title"><b>Hii..! I&apos;m Nadia Idrees.😊</b></h1>
                    <p className="hero-para">Hello! I&apos;m Nadia Idrees, a passionate and dedicated professional with a strong background in web development. I thrive on creating innovative solutions that make a real impact and am constantly exploring new ways to bring ideas to life.Let&apos;s work together to turn your vision into reality!</p>
                    <a href="/contact" target="-blank">
                    <button className="hero-button" >Let&apos;s Build Together!</button>
                    </a>
                </div>
            </div>
        </div>

    )
};