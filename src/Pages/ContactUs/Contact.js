import React from "react";
import "./contact.css";

export default function ContactUs() {
  return (
    <section className="contacts">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          The Army is one of the three services comprising the RDF. It evolved
          The Reserve Force refers to a part-time military service of the
          Rwanda.
        </p>
      </div>
      <div className="containers">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <span class="material-icons-sharp">home</span>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                Post Box 23 <br />
                Kigali,Rwanda
              </p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <span class="material-icons-sharp">mark_email_read</span>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>kabadany99@yahoo.fr</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <span class="material-icons-sharp">tty</span>
            </div>
            <div className="text">
              <h3>Call</h3>
              <p>+250788730199</p>
            </div>
          </div>
        </div>
        <div className="contactForm"> 
          <form>
            <h2>Send Message</h2>

            <div className="inputBox">
              <input type="text" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" />
              <span>Email</span>
            </div>

            <div className="inputBox">
              <textarea></textarea>
              <span>Type your Message</span>
            </div>

            <div className="inputBox">
              <input type="Submit" value="send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
