import "../style/service.css";
import { TbBrandVscode } from "react-icons/tb";
import { PiFigmaLogoFill } from "react-icons/pi";
import { SiCanva } from "react-icons/si";
import { SiShopify } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

export default function service() {
    return (
        <div className="main-container">
            <div className="sub-container">
                {/* top */}
                <div className="top-container">
                    <h2 className="head-text">
                        <span>Our </span>
                        <span className="yellow">Specialties</span>
                    </h2>
                    <p className="ser-para">From concept to completion, we deliver excellence across every project. Trust our expertise to bring your vision to life.</p>
                </div>
                {/* bottom */}
                <div className="card-container">

                    <a href="https://github.com/nadiaaGitHub" target="_blank">
                        <div className="card">
                            <TbBrandVscode className="ser-icon" />
                            <h3 className="card-head"> Web development </h3>
                            <span>E-Commerce, Personal portfolio</span>
                        </div>
                    </a>

                    <a href="https://github.com/nadiaaGitHub" target="_blank">
                        <div className="card">
                            <PiFigmaLogoFill className="ser-icon" />
                            <h3 className="card-head">UI/UX with Figma</h3>
                            <span>Figma Prototyping Services</span>
                        </div>
                    </a>

                    <a href="https://github.com/nadiaaGitHub" target="_blank">
                        <div className="card">
                            <SiCanva className="ser-icon" />
                            <h3 className="card-head">Canva Designs</h3>
                            <span>Your Brand, Canva Crafted</span>
                        </div>
                    </a>

                    <a href="https://github.com/nadiaaGitHub" target="_blank">
                        <div className="card">
                            <SiShopify className="ser-icon" />
                            <h3 className="card-head">Shopify Services</h3>
                            <span>Shopify Optimization Studio</span>
                        </div>
                    </a>

                    <a href="https://github.com/nadiaaGitHub" target="_blank">
                        <div className="card">
                            <FaWordpress className="ser-icon" />
                            <h3 className="card-head">WordPress Services</h3>
                            <span>Complete WordPress Services</span>
                        </div>
                    </a>

                    <a href="https://github.com/nadiaaGitHub" target="_blank">
                        <div className="card">
                            <FaLaptopCode className="ser-icon" />
                            <h3 className="card-head">UI/UX Design</h3>
                            <span>Custom UI/UX Services</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
};