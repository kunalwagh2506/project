<<<<<<< HEAD
import React from 'react';
import './Lecture.css';
import { NavbarStudent } from './NavbarStudent';
=======
import React from 'react'
import './Lecture.css';
>>>>>>> a500392 (Updated code)

export const Lecture = () => {
    return (
        <>
<<<<<<< HEAD
            <NavbarStudent />
            <section className="lectureBody">
                <header className="lectureHeader">
                    <h1>✨Lectures✨</h1>
=======
            <section class="lecture-body">
                <header>
                    <h1>✨Lectures After 10th✨</h1>
>>>>>>> a500392 (Updated code)
                </header>
                <section>
                    {/* After 10th */}
                    <section className="lectureStreams" id="after-10th">
                        <h2>Explore Career Paths After 10th</h2>
                        <div className="lectureCardContainer">
                            <div className="lectureCard">
                                <h3>🔬 Science (PCM)</h3>
                                <p>Physics, Chemistry, and Math — ideal for engineering, architecture, and research careers.</p>
                                <a href="https://en.wikipedia.org/wiki/Science_stream" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🧬 Science (PCB)</h3>
                                <p>Biology with Physics and Chemistry — leads to medical, dental, and life sciences fields.</p>
                                <a href="https://en.wikipedia.org/wiki/Medical_education_in_India" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>💼 Commerce</h3>
                                <p>Business, finance, and economics — great for careers in accounting, banking, and management.</p>
                                <a href="https://en.wikipedia.org/wiki/Commerce" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>📚 Arts / Humanities</h3>
                                <p>Subjects like History, Political Science, and Literature — ideal for civil services and education.</p>
                                <a href="https://en.wikipedia.org/wiki/Humanities" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🛠️ Diploma in Engineering</h3>
                                <p>3-year technical program in Mechanical, Civil, or Electrical Engineering.</p>
                                <a href="https://en.wikipedia.org/wiki/Diploma_in_Engineering" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🔧 ITI Courses</h3>
                                <p>Vocational training in trades like electrician, fitter, and welder — focused on hands-on skills.</p>
                                <a href="https://en.wikipedia.org/wiki/Industrial_training_institute" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🏗️ Polytechnic</h3>
                                <p>Practical engineering education and diplomas in applied sciences and technology.</p>
                                <a href="https://en.wikipedia.org/wiki/Polytechnic" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🎨 Design & Animation</h3>
                                <p>Creative field involving graphic design, animation, and multimedia production.</p>
                                <a href="https://en.wikipedia.org/wiki/Animation" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🏨 Hotel Management</h3>
                                <p>Hospitality, food service, and hotel operations — offers global career opportunities.</p>
                                <a href="https://en.wikipedia.org/wiki/Hotel_management" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>👗 Fashion Designing</h3>
                                <p>Designing clothing, textiles, and accessories — combines creativity with market trends.</p>
                                <a href="https://en.wikipedia.org/wiki/Fashion_design" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                        </div>
                    </section>

                    {/* After 12th */}
                    <section className="lectureStreams" id="after-12th">
                        <h2>Explore Career Paths After 12th</h2>
                        <div className="lectureCardContainer">
                            <div className="lectureCard">
                                <h3>🛠️ Engineering (B.Tech)</h3>
                                <p>Undergraduate program in fields like Computer, Mechanical, and Civil Engineering.</p>
                                <a href="https://en.wikipedia.org/wiki/Bachelor_of_Technology" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🩺 Medical (MBBS/BDS)</h3>
                                <p>Professional degrees in medicine and dentistry for careers in healthcare.</p>
                                <a href="https://en.wikipedia.org/wiki/Bachelor_of_Medicine,_Bachelor_of_Surgery" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>💼 Commerce (B.Com)</h3>
                                <p>Focuses on accounting, finance, taxation, and business law.</p>
                                <a href="https://en.wikipedia.org/wiki/Bachelor_of_Commerce" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>📚 Arts / Humanities (BA)</h3>
                                <p>Study History, Political Science, Psychology, Literature, and more.</p>
                                <a href="https://en.wikipedia.org/wiki/Bachelor_of_Arts" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>⚖️ Law (BA LLB)</h3>
                                <p>Integrated law program combining arts and legal education.</p>
                                <a href="https://en.wikipedia.org/wiki/Bachelor_of_Laws" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🎨 Design (B.Des)</h3>
                                <p>Creative field covering product design, fashion, UI/UX, and visual communication.</p>
                                <a href="https://en.wikipedia.org/wiki/Bachelor_of_Design" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🏨 Hotel Management</h3>
                                <p>Hospitality, food service, and hotel operations training.</p>
                                <a href="https://en.wikipedia.org/wiki/Hotel_management" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>📰 Mass Communication</h3>
                                <p>Study of journalism, media production, advertising, and public relations.</p>
                                <a href="https://en.wikipedia.org/wiki/Mass_communication" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🎞️ Animation & VFX</h3>
                                <p>Learn 2D/3D animation, visual effects, and motion graphics.</p>
                                <a href="https://en.wikipedia.org/wiki/Visual_effects" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>📝 Competitive Exams</h3>
                                <p>Prepare for NEET, JEE, NDA, and other government entrance tests.</p>
                                <a href="https://en.wikipedia.org/wiki/List_of_central_civil_services_examinations_in_India" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                        </div>
                    </section>

                    {/* After Graduation */}
                    <section className="lectureStreams" id="after-graduation">
                        <h2>Explore Career Paths After Graduation</h2>
                        <div className="lectureCardContainer">
                            <div className="lectureCard">
                                <h3>🎓 Postgraduate (MA / M.Sc / M.Com)</h3>
                                <p>Advanced academic degrees in arts, science, and commerce for specialization and research.</p>
                                <a href="https://en.wikipedia.org/wiki/Postgraduate_education" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>📊 MBA</h3>
                                <p>Master of Business Administration in marketing, finance, HR, and entrepreneurship.</p>
                                <a href="https://en.wikipedia.org/wiki/Master_of_Business_Administration" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>💻 MCA</h3>
                                <p>Master of Computer Applications for careers in software development and IT management.</p>
                                <a href="https://en.wikipedia.org/wiki/Master_of_Computer_Applications" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🏛️ UPSC / Civil Services</h3>
                                <p>India’s top administrative exams for roles like IAS, IPS, and IFS.</p>
                                <a href="https://en.wikipedia.org/wiki/Civil_Services_Examination_(India)" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🏦 Banking Exams</h3>
                                <p>Includes IBPS, SBI PO, and RBI exams for careers in public sector banks.</p>
                                <a href="https://en.wikipedia.org/wiki/Institute_of_Banking_Personnel_Selection" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>📐 GATE</h3>
                                <p>Graduate Aptitude Test in Engineering for M.Tech admissions and PSU jobs.</p>
                                <a href="https://en.wikipedia.org/wiki/Graduate_Aptitude_Test_in_Engineering" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>📚 NET / SET</h3>
                                <p>Eligibility tests for lectureship and research fellowships in Indian universities.</p>
                                <a href="https://en.wikipedia.org/wiki/National_Eligibility_Test" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🌍 Foreign Studies (GRE / IELTS / TOEFL)</h3>
                                <p>Entrance exams for studying abroad in the US, UK, Canada, and other countries.</p>
                                <a href="https://en.wikipedia.org/wiki/Graduate_Record_Examinations" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>📱 Digital Marketing</h3>
                                <p>Learn SEO, content marketing, social media, and online branding strategies.</p>
                                <a href="https://en.wikipedia.org/wiki/Digital_marketing" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                            <div className="lectureCard">
                                <h3>🚀 Entrepreneurship</h3>
                                <p>Start your own business with knowledge in innovation, funding, and scaling.</p>
                                <a href="https://en.wikipedia.org/wiki/Entrepreneurship" target="_blank">Watch Lectures on YouTube</a>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </>
    );
};
