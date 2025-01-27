import React from "react";
import { Facebook, Github, Google, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted" style={{ fontFamily: "'Oswald', sans-serif" }}>
            {/* Section: Social media */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                {/* Left */}
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* Left */}

                {/* Right */}
                <div>
                    <a href="/" className="me-4 text-reset text-decoration-none">
                        <Facebook />
                    </a>
                    <a href="/" className="me-4 text-reset text-decoration-none">
                        <Twitter />
                    </a>
                    <a href="/" className="me-4 text-reset text-decoration-none">
                        <Google />
                    </a>
                    <a href="/" className="me-4 text-reset text-decoration-none">
                        <Instagram />
                    </a>
                    <a href="/" className="me-4 text-reset text-decoration-none">
                        <Linkedin />
                    </a>
                    <a href="/" className="me-4 text-reset text-decoration-none">
                        <Github />
                    </a>
                </div>
                {/* Right */}
            </section>
            {/* Section: Social media */}

            {/* Section: Links  */}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    {/* Grid row */}
                    <div className="row mt-3">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* Content */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                React Recipe finder and Meal Planner
                            </h6>
                            <p>
                                Discover a variety of recipes to suit every taste and preference. Customize your meal plan and enjoy delicious, healthy meals every day.
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">
                                    React
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">
                                    Bootstrap
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">
                                    Spoonacular API
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">
                                    FE DEV Project
                                </a>
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">
                                    Help
                                </a>
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p>
                                <i className="fas fa-home me-3"></i> New York, NY 10012, US
                            </p>
                            <p>
                                <i className="fas fa-envelope me-3"></i> info@example.com
                            </p>
                            <p>
                                <i className="fas fa-phone me-3"></i> + 01 234 567 88
                            </p>
                            <p>
                                <i className="fas fa-print me-3"></i> + 01 234 567 89
                            </p>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
            </section>
            {/* Section: Links  */}

            {/* Copyright */}
            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © {currentYear} Copyright:{" "}
                <a className="text-reset fw-bold text-decoration-none" href="https://aspasija.com/">
                    Aspasija Cvetkoska
                </a>
            </div>
            {/* Copyright */}
        </footer>
        /* Footer */
    );
};

export default Footer;
