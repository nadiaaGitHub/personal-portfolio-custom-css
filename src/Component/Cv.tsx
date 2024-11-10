import Image from "next/image";
import "../style/cv.css";

export default function about() {
  return (
    <div className="cv-container">
      {/* left */}
      <div className="cv-left-box">
        {/* right */}
        <div className="cv-right-box">
          <h1 className="cv-title"><b>Hii..! I&apos;m Nadia Idrees.</b></h1>
          <p className="cv-para">Hello!😊😊 My name is Nadia Idrees, and I am a Web Developer with a passion for  creating efficient and responsive websites.</p>
          <a href="/pdf/Nadia-Idrees-Resume.pdf" target="_blank" >
          <button className="cv-button" >View Resume</button>
          </a>
        </div>
        <div>
          <a href="/pdf/Nadia-Idrees-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Image src={"/images/cv.png"}
              width={200}
              height={200}
              className="cv-image"
              alt="Profile"
            />
          </a>
        </div>
      </div>
    </div>
  )
};