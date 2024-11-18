import React from "react";

const Footer = () => (
  <footer className="footer">
    {/* Explore Section */}
    <div className="column">
      <h3>Explore</h3>
      <ul>
        <li>Home</li>
        <li>Questions</li>
        <li>Articles</li>
        <li>Tutorials</li>
      </ul>
    </div>

    {/* Support Section */}
    <div className="column">
      <h3>Support</h3>
      <ul>
        <li>FAQs</li>
        <li>Help</li>
        <li>Contact Us</li>
      </ul>
    </div>



    {/* Newsletter Signup */}
    <div className="column">
      <h3>Sign Up for Our Daily Insider</h3>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>

    {/* Bottom Bar */}
    <div className="bottom-bar">
      <p>DEV@Deakin 2022</p>
      <p>Privacy Policy | Terms | Code of Conduct</p>
    </div>
  </footer>
);

export default Footer;
