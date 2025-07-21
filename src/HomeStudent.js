import React from 'react'
import './HomeStudent.css'
import { NavbarStudent } from './NavbarStudent'

export const HomeStudent = () => {
    return (
        <>
            <NavbarStudent/>
            <section className="hs-body">
                <header className="hs-header">
                    <h1>Welcome to the Student Portal</h1>
                </header>
                <section className="hs-main-content">
                    <section className="hs-career-paths">
                        <h2>Choose Your Path</h2>
                        <div className="hs-card-container">
                            <div className="hs-card">
                                <h3>After 10th</h3>
                                <p>Explore diploma courses, vocational training, or continue with higher secondary education.</p>
                                <a href="https://en.wikipedia.org/wiki/Education_in_India#Secondary_education" target="_blank" rel="noreferrer">Learn More</a>
                            </div>
                            <div className="hs-card">
                                <h3>After 12th</h3>
                                <p>Choose from streams like engineering, medicine, arts, commerce, or professional courses.</p>
                                <a href="https://en.wikipedia.org/wiki/Higher_education_in_India" target="_blank" rel="noreferrer">Learn More</a>
                            </div>
                            <div className="hs-card">
                                <h3>After Graduation</h3>
                                <p>Pursue post-graduate studies, competitive exams, or enter the workforce.</p>
                                <a href="https://en.wikipedia.org/wiki/Postgraduate_education" target="_blank" rel="noreferrer">Learn More</a>
                            </div>
                        </div>
                    </section>
                    <h2 className="hs-subheading">Explore Learning Resources</h2>
                    <p className="hs-description">Discover lectures, fields of education, industry experience, and personalize your profile.</p>
                </section>
            </section>
        </>
    )
}
