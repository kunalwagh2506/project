import React from 'react';
import './Industry.css';
import { NavbarStudent } from './NavbarStudent';

export const Industry = () => {
    return (
        <>
            <NavbarStudent />
            <section className="ind-body">
                <header className="ind-header">
                    <h1>Industry Exposure</h1>
                </header>

                <section className="ind-content">
                    <section className="ind-industry-fields">
                        <h2>Select an Industry to Explore</h2>
                        <p>Choose your field of interest to discover real-world companies, roles, and opportunities.</p>

                        <div className="ind-card-container">

                            <div className="ind-card">
                                <h3>🏗️ Engineering & Manufacturing</h3>
                                <p>Automotive, civil, mechanical, electrical, and robotics industries.</p>
                                <a href="engineering-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>🩺 Healthcare & Medical</h3>
                                <p>Hospitals, pharma, diagnostics, biotech, and public health sectors.</p>
                                <a href="medical-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>💻 Information Technology</h3>
                                <p>Software, AI, cybersecurity, cloud computing, and tech startups.</p>
                                <a href="it-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>🏦 Finance & Banking</h3>
                                <p>Banking, insurance, fintech, investment, and accounting firms.</p>
                                <a href="finance-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>🎨 Design, Media & Animation</h3>
                                <p>Graphic design, animation, film, advertising, and digital content.</p>
                                <a href="design-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>🏨 Hospitality & Tourism</h3>
                                <p>Hotels, resorts, airlines, travel agencies, and event management.</p>
                                <a href="hospitality-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>⚖️ Legal & Government</h3>
                                <p>Law firms, judiciary, public administration, and civil services.</p>
                                <a href="law-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>📚 Education & Research</h3>
                                <p>Schools, universities, edtech companies, and research labs.</p>
                                <a href="education-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>🌾 Agriculture & Environment</h3>
                                <p>Farming tech, food processing, forestry, and environmental science.</p>
                                <a href="agriculture-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>🚀 Aerospace & Defense</h3>
                                <p>Space research, aviation, defense manufacturing, and R&D.</p>
                                <a href="aerospace-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>🛍️ Retail & E-Commerce</h3>
                                <p>Consumer goods, online marketplaces, and supply chain logistics.</p>
                                <a href="retail-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>📱 Telecommunications</h3>
                                <p>Mobile networks, internet providers, and communication tech.</p>
                                <a href="telecom-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>⚙️ Industrial Automation</h3>
                                <p>Smart factories, IoT, PLC systems, and industrial robotics.</p>
                                <a href="automation-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>🎭 Performing Arts & Entertainment</h3>
                                <p>Film, theatre, music, production houses, and talent agencies.</p>
                                <a href="entertainment-industry.html">Explore Industry</a>
                            </div>

                            <div className="ind-card">
                                <h3>🧪 Chemical & Materials</h3>
                                <p>Petrochemicals, polymers, paints, and industrial chemistry.</p>
                                <a href="chemical-industry.html">Explore Industry</a>
                            </div>

                        </div>
                    </section>
                </section>
            </section>
        </>
    );
};
