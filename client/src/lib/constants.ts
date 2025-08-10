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
    title: "Infrastructure Engineer",
    company: "Wellstar Health System",
    period: "Jan 2024 - Present",
    description: [
	"Led the end-to-end design and deployment of a robust, HIPAA-compliant, cloud-native infrastructure using AWS S3, Redshift, Glue, EMR, Lambda, and Step Functions, enabling ingestion and processing of over 1TB/day of healthcare data across various modalities and departments.",
    "Deployed and managed Dremio on Amazon EKS (Kubernetes), including executor autoscaling, helm-based provisioning, and role-based access control integration with Okta, reducing query response times by over 40% and providing seamless access to curated data in Snowflake and S3.",
    "Built fault-tolerant, real-time streaming pipelines using Apache Spark Structured Streaming, AWS Kinesis Firehose, and Glue Streaming ETL, with built-in checkpointing, backpressure management, and schema validation to handle critical health event data in near real time.",
    "Implemented Terraform modules and AWS CDK stacks to automate the provisioning of VPCs, IAM roles, subnets, security groups, and Dremio EKS clusters-ensuring repeatable, auditable, and consistent infrastructure deployment across dev, test, and prod environments.",
    "Designed and maintained observability stacks using Prometheus, Grafana, and CloudWatch Metrics and Alarms, building dashboards and anomaly detection scripts in Python and SQL for data volume changes, processing errors, and pipeline latency anomalies.",
    "Collaborated with security and compliance teams to enforce least privilege access via fine-grained IAM policies, configured network access control lists (ACLs), and implemented encryption in transit and at rest, ensuring full HIPAA compliance across all services.",
    "Spearheaded cost optimization efforts across compute and storage infrastructure by right-sizing EMR clusters, leveraging Spot Instances, and optimizing Dremio reflections and dataset curation-leading to a 45% reduction in infrastructure cost and enhanced data freshness SLAs.",
    "Facilitated CI/CD automation using GitHub Actions for infrastructure updates, Dremio reflection refresh jobs, and Kubernetes deployment rollouts, reducing human error and improving rollout times from hours to under 10 minutes."
    ],
    skills: ["Python", "SQL","Python", "SQL", "Apache Spark", "Amazon Redshift", "Real-Time Healthcare Analytics", "ML Pipelines"," Bayesian Optimization", "HIPAA-Compliant Data Engineering", "Scalable ETL Architecture"]
  },
  {
    title: "Platform Engineer",
    company: "CBRE Group",
    period: "Sep 2022 - Dec 2023",
    description: [
      "Spearheaded the development and deployment of a real-time, ML-driven recommendation engine for commercial real estate listings, leveraging user behavior, engagement metrics, and historical leasing data to deliver personalized property suggestions across CBRE’s digital platforms.",
	    "Architected and implemented a robust experimentation framework using Bayesian optimization to continuously refine recommendation logic based on live A/B testing outcomes and user feedback loops.",
	    "Engineered and optimized a highly scalable ETL pipeline using Apache Spark and Amazon Redshift, ingesting and transforming large volumes of structured and semi-structured data from internal systems, IoT devices, and third-party sources to support analytics, pricing, and forecasting models.",
	    "Collaborated cross-functionally with data scientists, software engineers, and business analysts to align data engineering efforts with strategic objectives, ensuring high data quality, performance, and compliance with data governance standards."
    ],
    skills: ["Python", "SQL", "Spark", "Redshift","Real-Time Data Processing", "ML Pipelines", "Experimentation Platforms", "Scalable ETL", "Data Architecture"]
  },
  {
    title: "Real-Time Data Engineer",
    company: "Tesco",
    period: "May 2021 - May 2022",
    description: [
      "Contributed to the development of embedded software solutions using C++ and Python, contributing to a 20% improvement in system processing efficiency.",
      "Gained hands-on experience with Linux, networking, and cybersecurity fundamentals, troubleshooting over 10 critical network issues during development phases.",
      "Worked on database management and query optimization, achieving a 30% reduction in average query response time."
    ],
    skills: ["C++", "Python", "SQL", "Linux"]
  },
  {
    title: "Data Engineer",
    company: "Gifteria",
    period: "Mar 2020 - Dec 2020",
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
    image: "/images/logo.svg"
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
