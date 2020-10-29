import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="footer__country">
                <div className="container">
                    <span>Spain</span>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="footer__info">
                        <ul className="info__menu">
                            <li><a href="https://www.google.com/">Advertising</a></li>
                            <li><a href="https://www.google.com/">Business</a></li>
                            <li><a href="https://www.google.com/">About</a></li>
                            <li><a href="https://www.google.com/">How Search Work</a></li>
                        </ul>
                        <ul className="info__menu">
                            <li><a href="https://www.google.com/">Privacy</a></li>
                            <li><a href="https://www.google.com/">Terms</a></li>
                            <li><a href="https://www.google.com/">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
