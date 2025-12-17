import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Chip from '@mui/material/Chip';
import '../assets/styles/Timeline.scss';

const jobDetails: Record<string, React.ReactNode> = {
  "Nexus Games": (
    <ul>
      <li>Manage 6+ concurrent project schedules, roadmaps, and deliverables using Agile methodologies, ensuring 95% on-time execution and alignment, spanning GTM strategy, internal platforms, and customer-facing systems</li>
      <li>Own end-to-end execution of 5+ cross-functional products from planning through deployment, coordinating data, engineering, and operations teams to deliver refinement of customer support aligned with company objectives</li>
      <li>Build internal AI and automations to improve operational efficiency resulting in a ~35% reduction in manual labor</li>
    </ul>
  ),
  "Untitled Game Development Project": (
    <ul>
      <li>Facilitate the end-to-end development in all stages of the projects' lifecycles, developing features using C# alongside engineering and design teams, executing 8+ feature launches with agile</li>
      <li>Built cross-functional consensus on product priorities utilizing KPIs and Jira to enforce decisions and align team efforts with strategic business goals and optimizing resource allocations</li>
    </ul>
  ),
  "Data Science Capstone Program": (
    <ul>
      <li>Directed cross-functional project timelines and resource planning, ensuring alignment with strategic goals, full compliance with data governance, and delivery of high-impact initiatives</li>
      <li>Developed and delivered data visualizations and actionable insights using R, Python, and SQL, translating analyses into clear recommendations for both technical and non-technical stakeholders</li>
      <li>Produced client-facing reports about potential pricing changes based on predictive modeling and scenario analysis, forecasting revenue increases by 7%, now under pilot implementation</li>
    </ul>
      ),
  "Share Ventures": (
    <ul>
      <li>Designed and executed 3+ structured advertisement campaigns using A/B testing to optimize checkout conversion across the company’s platform, increasing conversion rate by 17%</li>
      <li>Partnered cross-functionally with UX/UI, marketing, and product teams to translate business insights into actionable strategies, consulting on brand objectives by conducting market research</li>
      <li>Implemented market research and experimental methods to evaluate product and feature improvements, adapting marketing efforts based on KPIs and increasing engagement by 47%</li>
    </ul>
      ),
  "Kravis Leadership Institute": (
    <ul>
      <li>Managed and develop 4+ websites under institute domain, building all front-end user experiences</li>
      <li>Facilitated end-to-end development in all stages of the projects’ lifecycles, proposing projects and building cross-functional consensus using KPIs on Google analytics to increase site traffic by 35%</li>
      <li>Organized conferences and events alongside third-party vendors, leading budgeting reports</li>
    </ul>
      ),
  "Samba TV": (
    <ul>
      <li>Drove products from conception to implementation, furthering relationships and rapport with partnered companies and clients in the AD-Tech space, proposed project ideas later developed</li>
      <li>Jointed efforts with the Data and Sales teams, drawing technical data through Salesforce and HubSpot to supply teams with data-backed narratives with Excel for GTM teams and B2B sales</li>
    </ul>
      ),
  "P-AI": (
    <ul>
      <li>Implemented scalable conceptual AI evaluation strategies to develop ML model simulations</li>
      <li>Managed day-to-day documentation with cross-functional teams, leveraging and scraping large data sets using Python and SQL to train into large language models and neural networks</li>
      <li>Led research efforts, communicating reports on industry standards and competitive strategies</li>
    </ul>
      ),
  "CMC Information Technology Services": (
    <ul>
      <li>Maintain end-to-end technical support and internal process documentation, resolving customer issues by working with clients while maintaining operational efficiency and data privacy protocols</li>
      <li>Built and maintained dashboards and visual analytics using R, Excel, and Stata to track user engagement trends and support cross-departmental reporting needs for shareholder decisions</li>
    </ul>  )
};

const timelineItems = [
  {
    title: "Product Manager; Product Marketing Manager",
    subtitle: "Nexus Games",
    date: "Sept 2025 - present",
    skills: ["Product Management", "Product Lifecycle", "Product Development", "GTM Marketing", "Product Marketing", "Asana", "Back-end Development", "AI", "Automation", "API Integration", "Data Analysis", "Operations"]
  },
  {
    title: "Project Manager; Game Mechanics and Vision",
    subtitle: "Untitled Game Development Project",
    date: "July 2024 - present",
    skills: ["Full-stack Development", "C#", "Unity", "Jira", "Agile", "Project Management", "Game Development", "CAD", "Digital Design", "Storyboarding"]
  },
  {
    title: "Project Manager; Data Scientist Consultant",
    subtitle: "Data Science Capstone Program",
    date: "Jan 2025 - May 2025",
    skills: ["Consulting", "Data Governance", "R", "Python", "SQL", "Excel", "Revenue Forecasting", "Data Analysis", "Statistical Modeling", "Pricing Models"]
  },
  {
    title: "Project Manager, Marketing and AI Prompt Engineering",
    subtitle: "Share Ventures",
    date: "Jun 2023 - Aug 2023",
    skills: ["AI Integrations", "UX/UI", "Marketing", "Advertising", "Project Management", "A/B Testing", "Stakeholder Communication", "Design", "Figma"]
  },
  {
    title: "Logistics Management Team and Web Development Team Lead",
    subtitle: "Kravis Leadership Institute",
    date: "Sept 2022 - May 2025",
    skills: ["Full-stack Web Development", "Research Methods", "Experimental Design", "SEO", "Statistical Analysis", "UX/UI", "Adobe Suite", "Event Organization"]
  },
  {
    title: "Product and Growth Marketing Intern",
    subtitle: "Samba TV",
    date: "Jun 2022 - Aug 2022",
    skills: ["Marketing", "Strategy", "Competitive Analysis", "CRM", "B2B Sales", "Product Strategy", "Excel", "Business Development", "Salesforce", "Hubspot"]
  },
  {
    title: "Machine Learning Engineer; Data and Project Specialist",
    subtitle: "P-AI",
    date: "Jun 2022 - Aug 2022",
    skills: ["AI/ML", "Neural Networks", "Reinforcement Learning", "Python", "Java", "Tensorflow", "Pytorch", "API Integration", "Project Management"]
  },
  {
    title: "Lead Technical Assistant",
    subtitle: "CMC Information Technology Services",
    date: "Sept 2021 - May 2025",
    skills: ["Cybersecurity", "Database Management", "Operating Systems", "Client Services", "IT Asset Management"]
  }
];

function Timeline() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (subtitle: string) => {
    setExpandedJob(prev => (prev === subtitle ? null : subtitle));
  };

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {timelineItems.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              className="vertical-timeline-element--work"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>

              <div className="subtitle-row">
                <div className="subtitle-text">
                  <h4 className="vertical-timeline-element-subtitle" style={{ color: 'gray' }}>
                    <em>{item.subtitle}</em>
                  </h4>
                </div>
                <button
                  className={`chevron-button ${expandedJob === item.subtitle ? 'expanded' : ''}`}
                  onClick={() => toggleJob(item.subtitle)}
                  aria-label="Toggle job details"
                >
                  <FontAwesomeIcon icon={faChevronUp} />
                </button>
              </div>

              {expandedJob === item.subtitle && (
                <div className="job-details">
                  {jobDetails[item.subtitle]}
                </div>
              )}

              <div className="flex-chips">
                <span className="chip-title" style={{ color: '#4a4a4a' }}>Skills:</span>
                {item.skills.map((label, idx) => (
                  <Chip key={idx} className="chip" label={label} />
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
