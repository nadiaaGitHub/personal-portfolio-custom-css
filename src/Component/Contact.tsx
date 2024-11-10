import "../style/contact.css";
export default function contactUs() {
    return(
       <div className="main-container-contact">
        <div className="contactFormContainer">
            <form className="contactForm">
                <h2><b>Contact Us</b></h2>
                <div className="formGroup">
                    <input type="text" placeholder="Full Name" required />
                </div>
                <div className="formGroup">
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="formGroup">
                    <textarea placeholder="Type your Message..." required></textarea>
                </div>
                <button className="send-btn" type="submit">Send</button>
                
               
            </form>
        </div>
        </div>
       
    )
};