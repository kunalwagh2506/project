import React from 'react'

export const HomeStudent = () => {
    return (
        <>  <section class="Body"></section>
            <header>
                <h1>Welcome to the Student Portal</h1>
            </header>
            <section>
                <section class="career-paths">
                    <h2>Choose Your Path</h2>
                    <div class="card-container">
                        <div class="card">
                            <h3>After 10th</h3>
                            <p>Explore diploma courses, vocational training, or continue with higher secondary education.</p>
                            <a href="https://en.wikipedia.org/wiki/Education_in_India#Secondary_education" target="_blank">Learn More</a>
                        </div>
                        <div class="card">
                            <h3>After 12th</h3>
                            <p>Choose from streams like engineering, medicine, arts, commerce, or professional courses.</p>
                            <a href="https://en.wikipedia.org/wiki/Higher_education_in_India" target="_blank">Learn More</a>
                        </div>
                        <div class="card">
                            <h3>After Graduation</h3>
                            <p>Pursue post-graduate studies, competitive exams, or enter the workforce.</p>
                            <a href="https://en.wikipedia.org/wiki/Postgraduate_education" target="_blank">Learn More</a>
                        </div>
                    </div>
                </section>
                <h2>Explore Learning Resources</h2>
                <p>Discover lectures, fields of education, industry experience, and personalize your profile.</p>
            </section>
        </>
    )
}
