import React from 'react';
import './footer.scss';


function Footer() {
    return (
        <div className="footer-component  mt-5 bg-primary text-white">
            <div className="p-5 container">
                <div className="p-5">
                    <div className="title mb-4">
                        <h3 className="subtitle">Contact us</h3>
                    </div>

                    <div className="content-wrapper">
                        <div className="d-flex justify-content-between mt-3">
                            <div>
                                <h2 className="heading">Have a project in mind?</h2>
                                <h2 className="heading">Let's make it happen</h2>
                            </div>
                            <div className="w-300px text">
                                22 Street Name, Suburb, 8000,<br/>Cape Town, South Africa<br/>+27 21 431 0001<br/>enquirie@website.co.za
                            </div>
                        </div>

                        <div className="links d-flex justify-content-between mt-5">
                            <div>
                                <ul>
                                    <li><a href="/link">Terms of service</a></li>
                                    <li><a href="/link">Privacy Policy</a></li>
                                    <li><a href="/link">Impressum</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="/link">Facebook</a></li>
                                    <li><a href="/link">Instagram</a></li>
                                    <li><a href="/link">Twitter</a></li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li><a href="/link">Github</a></li>
                                    <li><a href="/link">LinkedIn</a></li>
                                    <li><a href="/link">Teams</a></li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li><a href="/link">Youtube</a></li>
                                    <li><a href="/link">Behance</a></li>
                                    <li><a href="/link">Dribble</a></li>
                                </ul>
                            </div>

                            <div className="w-300px">
                                <ul>
                                    <li className="mb-2"><a href="/link">Explore open jobs</a></li>
                                    <br/>
                                    <li><a href="/link">©2000—2023 Company Name</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
