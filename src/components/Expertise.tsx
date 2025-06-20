import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
        "SEO",
        "React",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Figma",
    "Media",
    "Adobe",
    "SQL",
    "Salesforce",
    "Hubspot",
    "GTM",
    "Client-facing",
];

const labelsSecond = [
    "Tensorflow",
    "Pytorch",
    "Python",
    "R",
    "SQL",
    "Unity",
    "C#",
    "JavaScript",
    "Excel",
    "SPSS",
    "Regressions",
    "Pandas",
    "Shiny",
    "Hugging Face",
];

const labelsThird = [
    "UX/UI",
    "Strategy",
    "Forecasting",
    "Pricing",
    "Product Design",
    "Trello",
    "Jira",
    "Kanban",
    "Agile",
    "Scrum",
    "Roadmap",
    "Start-Ups",
    "User Research",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Marketing, Advertising & Web Development</h3>
                    <p>I bring products to market through a blend of strategic marketing and technical execution. From A/B testing ad creatives to building landing pages and analytics tools, I focus on growing visibility and conversions. I run full-funnel campaigns across paid social, email, and web, using experimentation and performance data to refine targeting, messaging, and creative. My work bridges creative marketing with the infrastructure needed to scale results.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Data Analytics & AI/ML</h3>
                    <p>I translate complex datasets into solutions. I work end-to-end across data and AI pipelines, starting with analytics and ending with production-ready machine learning tools. I have supported data scraping, wrangling, and dashboarding projects to surface actionable insights. Combining the two, I manage data infrastructure to support training, testing, and deployment of machine learning models.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Product Management</h3>
                    <p>I approach product management with a focus on technicality, user insight, and cross-functional execution. I have led projects from ideation to launch—working with engineers, designers, and analysts to define roadmaps, run tests, and deliver user-centered features. With a background in data and marketing, I translate customer needs into scalable solutions and prioritize based on impact and feasibility.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;