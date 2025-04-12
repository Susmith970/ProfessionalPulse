import { Experience, Project, Skill, ToolCategory, Certification } from "@/types";
import { FaBuilding, FaChartLine, FaDatabase } from "react-icons/fa";

// Technical Skills
export const technicalSkills: Skill[] = [
  { name: "Python", percentage: 95 },
  { name: "SQL", percentage: 90 },
  { name: "Apache Spark", percentage: 85 },
  { name: "Machine Learning", percentage: 80 },
  { name: "C++", percentage: 75 }
];

// Tools Categories
export const toolCategories: ToolCategory[] = [
  {
    name: "Data Processing",
    tools: ["Apache Spark", "Apache Kafka", "Apache Airflow", "AWS Glue"]
  },
  {
    name: "Databases",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Amazon Redshift"]
  },
  {
    name: "Cloud Platforms",
    tools: ["AWS", "Google Cloud", "Azure", "Databricks"]
  },
  {
    name: "Visualization",
    tools: ["Tableau", "Power BI", "D3.js", "Plotly"]
  }
];

// Certifications
export const certifications: Certification[] = [
  {
    title: "AWS Certified Data Analytics - Specialty",
    issuer: "Amazon Web Services",
    date: "March 2023",
    icon: "bx-certification",
    color: "primary"
  },
  {
    title: "Microsoft Certified: Azure Data Engineer Associate",
    issuer: "Microsoft",
    date: "September 2022",
    icon: "bx-certification",
    color: "secondary"
  },
  {
    title: "Databricks Certified Associate Developer",
    issuer: "Databricks",
    date: "January 2023",
    icon: "bx-certification",
    color: "accent"
  }
];

// Experience
export const experiences: Experience[] = [
  {
    title: "Data Engineer",
    company: "Wellstar Health System",
    period: "Jan 2024 - Present",
    description: [
      "Built and deployed a real-time machine learning-powered recommendation engine, integrating customer browsing history, past purchases, and engagement data to personalize retail product suggestions.",
      "Developed an end-to-end experimentation framework, applying Bayesian optimization techniques to dynamically adjust recommendation strategies based on real-time user interactions.",
      "Designed a scalable ETL pipeline in Spark and Redshift, aggregating multi-source data streams."
    ],
    skills: ["Python", "SQL", "Spark", "Redshift"]
  },
  {
    title: "Data Analyst",
    company: "Tesco",
    period: "Aug 2020 - Aug 2022",
    description: [
      "Contributed to the development of embedded software solutions using C++ and Python, contributing to a 20% improvement in system processing efficiency.",
      "Gained hands-on experience with Linux, networking, and cybersecurity fundamentals, troubleshooting over 10 critical network issues during development phases.",
      "Worked on database management and query optimization, achieving a 30% reduction in average query response time."
    ],
    skills: ["C++", "Python", "SQL", "Linux"]
  },
  {
    title: "Analyst Intern",
    company: "Gifteria",
    period: "Jan 2019 - Oct 2019",
    description: [
      "Conducted data extraction, transformation, and analysis to generate actionable business insights, improving decision-making efficiency.",
      "Designed Power BI dashboards, enhancing data visualization and providing stakeholders with actionable insights.",
      "Enhanced SQL queries for data retrieval and reporting, boosted query efficiency by 30% and improving performance."
    ],
    skills: ["SQL", "Power BI", "Data Analysis"]
  }
];

// Projects
export const projects: Project[] = [
  {
    title: "OmniStream",
    description: "An advanced data engineering solution designed to seamlessly integrate, process, and monitor data from multiple sources in real-time. The platform implements sophisticated data quality controls, anomaly detection algorithms, and end-to-end observability to ensure reliable data pipelines for critical business operations.",
    tags: ["Python", "Streamlit", "Spark", "MLflow", "Kafka"],
    links: {
      github: "https://github.com/Susmith970/OmniStream-Multi-source-Data-Processing-Pipeline.git",
      live: "https://omnistream.streamlit.app"
    },
    icon: "📊"
  },
  {
    title: "NeoHeaven",
    description: "A real estate price estimation platform that provides users with accurate property valuations and comprehensive analytics of local neighborhoods. Utilizes machine learning models trained on historical sales data and geographic information.",
    tags: ["Python", "TensorFlow", "GeoPandas", "Flask", "PostgreSQL"],
    links: {
      github: "https://github.com/username/neoheaven",
      live: "https://neoheaven.example.com"
    },
    icon: "FaBuilding"
  },
  {
    title: "Retail Analytics Dashboard",
    description: "An interactive dashboard for retail analytics that visualizes sales trends, customer behavior, and inventory management metrics. Provides actionable insights through intuitive visualizations and predictive analytics.",
    tags: ["Tableau", "Python", "SQL", "R"],
    links: {
      github: "https://github.com/username/retail-analytics",
      live: "https://retail-dashboard.example.com"
    },
    icon: "FaChartLine"
  },
  {
    title: "Cloud-Native ETL Pipeline",
    description: "A scalable, cloud-native ETL pipeline for processing large volumes of data from diverse sources. Features automated data quality checks, error handling, and monitoring dashboards for operational excellence.",
    tags: ["Apache Airflow", "AWS", "Spark", "Docker"],
    links: {
      github: "https://github.com/username/cloud-etl",
      live: "https://etl-demo.example.com"
    },
    icon: "FaDatabase"
  }
];
