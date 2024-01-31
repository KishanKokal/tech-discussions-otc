import React from 'react'

export const Footer = () => {
    return (
        <div className="footer flex flex-col justify-center bg-white text-black items-center space-y-2 p-2 " >
            <div className="social-icons space-x-6 space-y-2">
                <a href="https://www.facebook.com/" className="fa-brands fa-facebook text-2xl"></a>
                <a href="https://www.instagram.com/" className="fa-brands fa-instagram text-2xl"></a>
                <a href="https://www.twitter.com/" className="fa-brands fa-twitter text-2xl"></a>
                <a href="https://www.linkedin.com/" className="fa-brands fa-linkedin text-2xl"></a>
                <a href="https://www.youtube.com    /" className="fa-brands fa-youtube text-2xl"></a>
            </div>

            <div className="footer-nav text-center flex space-x-3">
                <div>Home</div>
                <div>News</div>
                <div>Contact Us</div>
                <div>Our Team</div>
            </div>

            <div className="copyright">
                &copy; 2023 OTC Catchup
            </div>
        </div>
    )
};

