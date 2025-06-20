import React from "react";
import mock01 from '../assets/images/webmock6.png';
import mock02 from '../assets/images/webmock4.png';
import mock03 from '../assets/images/webmock7.png';
import mock04 from '../assets/images/webmock3.png';
import mock05 from '../assets/images/webmock5.png';
import mock06 from '../assets/images/webmock2.png';
import mock07 from '../assets/images/webmock1.png';
import mock08 from '../assets/images/Untitled presentation.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects and Case Studies</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/DienAlex/nda-projects" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/DienAlex/nda-projects" target="_blank" rel="noreferrer"><h2>Interactive Dashboard</h2></a>
                <p>Developed digital dashboard interface featuring real-time data. The charts display metrics like demand, activity, and load patterns using R, Shiny.io, Java, and SQL.</p>
            </div>
            <div className="project">
                <a href="https://scholarship.claremont.edu/cmc_theses/3795/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://scholarship.claremont.edu/cmc_theses/3795/" target="_blank" rel="noreferrer"><h2>Economic and Moral Decisions in Video Games</h2></a>
                <p>Conducted an experimental study on empathy and economic choices in video games, using interactive fiction to simulate decision-making environments.</p>
            </div>
            <div className="project">
                <a href="https://www.cmc.edu/kli" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.cmc.edu/kli" target="_blank" rel="noreferrer"><h2>Kravis Leadership Institute</h2></a>
                <p>Developed and led all digital communications for the Kravis Leadership Institute, including promotion of the 30th Kravis-de Roulet Leadership Conference.</p>
            </div>
            <div className="project">
                <a href="https://www.p-ai.org/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.p-ai.org/" target="_blank" rel="noreferrer"><h2>P-AI: AI Pokemon Battler</h2></a>
                <p>Built a suite of visual analytics using regression discontinuity design to assess the effects of a price change on demand and revenue trends.</p>
            </div>
            <div className="project">
                <a href="https://github.com/DienAlex/nda-projects" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/DienAlex/nda-projects" target="_blank" rel="noreferrer"><h2>Data Consulting Project</h2></a>
                <p>Built a suite of visual analytics using regression discontinuity design to assess the effects of a price change on weekly demand and revenue trends.  </p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1fZPQFhVXt9idEiSfjJFWY1zFtLbCD2Gi/view?usp=sharing" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1fZPQFhVXt9idEiSfjJFWY1zFtLbCD2Gi/view?usp=sharing" target="_blank" rel="noreferrer"><h2>AI Interactions and Reactions</h2></a>
                <p>Designed and led a quantitative psychology study investigating how AI knowledge levels influence trust and perceived fairness in automated decision-makers. The project included statistical analysis (ANOVA, profile plots) and resulted in clear, actionable insights around public perceptions of AI reliability.</p>
            </div>
            <div className="project">
                <a href="https://github.com/DienAlex/nda-projects" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/DienAlex/nda-projects" target="_blank" rel="noreferrer"><h2>Regression on Teacher Salaries</h2></a>
                <p>Analyzed demographic predictors of transportation expenditure using ordered probit regression. Presented marginal effects and descriptive statistics in publication-ready tables to demonstrate correlations between age, income, and vehicle preferences.</p>
            </div>
            <div className="project">
                <a href="https://github.com/DienAlex/nda-projects" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/DienAlex/nda-projects" target="_blank" rel="noreferrer"><h2>Multiple Regression on EVs</h2></a>
                <p>Led a multivariable regression project examining the impact of housing prices, GDP, tax rates, and demographics on county-level teacher salaries. </p>
            </div>
        </div>
    </div>
    );
}

export default Project;