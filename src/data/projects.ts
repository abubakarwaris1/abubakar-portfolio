export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    images: string[];
    technologies: string[];
    role: string;
    features: string[];
    timeline: string;
    url?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "YJSJ",
        category: "Full Stack",
        description: "Job search genius is a AI powered platform for job searchers. It allows you to create ATS resumes, track jobs, generate cover letters, and generate offer negotiation points, all with the power of AI at the back. It is a fully white label solution. It has microservices based architecture. In the admin side of this platform. The admin can add staff members, assign permissions, add users and view user data. Since its fully white labeled, the customer view the website on admins domain and receive emails from the admins domain as well. Similarly, the staff also has full access of user functionality, if it has the right permissions. The super-admin can add companies, activate and deactivate companies and view key performance indicators in the form of charts.",
        role: "Founding Engineer & Team Lead",
        features: [
            "Served as the founding engineer and team lead, designing a 9-microservice architecture serving 150,000+ users across 50+ U.S. universities.",
            "Exposed the platform through secure, well-documented APIs for third-party integrations, enabling seamless ecosystem connectivity.",
            "Leveraged expertise in microservices-based architecture to craft features for seamless staff and user management.",
            "Ensured full white-label capabilities, allowing customers to interact with the website under the administrator's domain.",
            "Implemented comprehensive access control for staff members based on assigned permissions.",
            "Played a pivotal role in enhancing the overall functionality and user experience of the admin app."
        ],
        images: [
            "/images/yjsj/image1.png",
            "/images/yjsj/image2.png",
            "/images/yjsj/image3.png",
            "/images/yjsj/image4.png",
            "/images/yjsj/image5.png",
            "/images/yjsj/image6.png",
            "/images/yjsj/image7.png",
            "/images/yjsj/image8.png"
        ],
        technologies: ["Vite", "Javascript", "Typescript", "HTML", "CSS", "Chakra-Ui", "AntD", "Figma", "Redux-Toolkit", "ES6", "ExpressJs", "MongoDb", "React-Query", "React-Forms"],
        timeline: "2023",
        url: "https://app.jobsearchgenius.ai/login"
    },
    {
        id: "2",
        title: "GuardianVets",
        category: "Full Stack",
        description: "Guardianvets is an after hour pet care platform where you can get emergency services on call, book an appointment or chat with our customer service rep or call directly for emergency situations. The project had the database that was 719GB in size. Handling the data was a problem in itself.",
        role: "Team Lead",
        features: [
            "Built and optimized large-scale data systems spanning PostgreSQL and MongoDB, processing and synchronizing hundreds of gigabytes of production data.",
            "Implemented ETL pipelines and materialized views that significantly improved query performance, reporting reliability, and operational visibility.",
            "Created materialized views to show data to the user in near-realtime.",
            "Used agendaJs to create ETL pipelines to extract, transform, and load data.",
            "Utilized aggregation pipelines to calculate statistics data and send it to the user.",
            "Implemented functionality to create reports in Excel format.",
            "Developed a dashboard displaying total appointments, calls, chats, convergence rate, and ER referrals.",
            "Setup read replicas for MySql database hosted on AWS RDS."
        ],
        images: [
            "/images/guardianvets/gv1.png",
            "/images/guardianvets/gv2.png"
        ],
        technologies: ["React", "Javascript", "Typescript", "Bootstrap", "HTML", "CSS", "React-redux", "ES6", "ExpressJs", "MongoDb", "PostgreSQL", "AWS"],
        timeline: "2022",
        url: "https://analytics-v3.guardianvets.com/sign-in"
    },
    {
        id: "3",
        title: "ZAP",
        category: "Full Stack",
        description: "This an e-commerce dashboard. The prime focus in this project was on code optimization and reduction of load times along with development of new features. The project was developed using Javascript, but owing to the complexity of the code, we decided to develop new features with Typescript. Apart from typescript it also uses SP-APIs and google cloud services.",
        role: "Team Lead",
        features: [
            "Responsible for the reconciliation of data through sales reports, ad reports, and traffic reports.",
            "Optimized endpoints, decreasing load time by a factor of 10x.",
            "Developed the feature of viewing graphs for parent and child products using highchartsJs.",
            "Implemented user-selectable KPIs and customizable graph timeframes (weekly, monthly, yearly).",
            "Introduced 3 different y-axes for KPIs using different measurement units."
        ],
        images: [
            "/images/zap/zap1.png",
            "/images/zap/zap2.png",
            "/images/zap/zap3.png",
            "/images/zap/zap4.png"
        ],
        technologies: ["React", "Javascript", "Typescript", "AntD", "Bootstrap", "HTML", "CSS", "React-redux", "ES6", "ExpressJs", "MongoDb", "Google Cloud Services"],
        timeline: "2022",
        url: "https://giftabliss.com/"
    },
    {
        id: "4",
        title: "Blue Warehouse Discounts",
        category: "Mobile",
        description: "This is a mobile app that is developed in React-Native. The app is e-commerce app where user can reserve and buy items at discounted rates. Previously a user could only reserve the item and user had to go to their warehouse to buy the product. Now we have add the functionality of in-app payments and home delivery. Another feature that was added in the app was pickup module for warehouse workers. The worker will scan the barcode using a hand held device which is connected to the mobile by bluetooth. The purpose of this feature was to reduce the number of errors made while reading the bin-locations.",
        role: "Senior Software Engineer",
        features: [
            "Developed the app using React-Native, Javascript, and NodeJs.",
            "Integrated Stripe for payment processing.",
            "Integrated Shipstation to handle home deliveries.",
            "Responsible for the complete development of the pickup module.",
            "Added the feature of downloading tax reports on the admin panel."
        ],
        images: [
            "/images/BWD/BWD1.jpg",
            "/images/BWD/BWD2.jpg",
            "/images/BWD/BWD3.jpg",
            "/images/BWD/BWD4.jpg",
            "/images/BWD/BWD5.jpg"
        ],
        technologies: ["React-Native", "Redux-toolkit", "Javascript", "ES6", "ExpressJs", "MongoDB", "Amazon Web Services"],
        timeline: "2022",
        url: "https://play.google.com/store/apps/details?id=com.bwdmobile&hl=en&gl=US"
    },
    {
        id: "5",
        title: "Inlection Brands",
        category: "Full Stack",
        description: "A custom dashboard for Amazon marketplaces. It allows you to connect to your store and sync sale and purchase data with your dashboard. It allows to view all the data yearly and monthly. The dashboard automatically sync data for every month as the month progresses. It does that through Agenda Jobs.",
        role: "Senior Software Engineer",
        features: [
            "Responsible for performing complex tasks and reviewing/merging others' tasks.",
            "Led a team of 3 junior developers.",
            "Wrote agenda jobs to fetch data from Amazon using SP-API and transform it.",
            "Used React, Javascript, and Material Ui for frontend development.",
            "Used redux-toolkit for application state management.",
            "Used NodeJs and ExpressJs for backend development.",
            "Configured Jobs for synchronizing product, order, and cost data."
        ],
        images: [
            "/images/Inflection/Inflection-brands-1.png",
            "/images/Inflection/Inflection-brands-2.png",
            "/images/Inflection/Inflection-brands-3.png"
        ],
        technologies: ["React", "Redux-toolkit", "Javascript", "ES6", "ExpressJs", "MongoDB", "AgendaJs", "SP-API", "Amazon Web Services"],
        timeline: "2021",
        url: "https://app.inflectionbrands.com/"
    },
    {
        id: "6",
        title: "Pricerbot.ai",
        category: "Full Stack",
        description: "A custom dashboard for Amazon marketplaces. It allows you to connect to your store and sync sale and purchase data with your dashboard. It allows to view all the data yearly and monthly. The dashboard automatically sync data for every month as the month progresses. It does that through Agenda Jobs.",
        role: "Senior Software Engineer",
        features: [
            "Responsible for performing complex tasks and reviewing/merging others' tasks.",
            "Led a team of 3 junior developers.",
            "Wrote agenda jobs to fetch data from Amazon using SP-API and transform it.",
            "Used React, Javascript, and Material Ui for frontend development.",
            "Used redux-toolkit for application state management.",
            "Used NodeJs and ExpressJs for backend development.",
            "Configured Jobs for synchronizing product, order, and cost data."
        ],
        images: [
            "/images/Pricerbot/Pricerbot-1.png",
            "/images/Pricerbot/Pricerbot-2.png",
            "/images/Pricerbot/Pricerbot-3.png",
            "/images/Pricerbot/Pricerbot-4.png"
        ],
        technologies: ["React", "Redux-toolkit", "Javascript", "ES6", "ExpressJs", "MongoDB", "AgendaJs", "SP-API", "Amazon Web Services"],
        timeline: "2021",
        url: "https://app.inflectionbrands.com/"
    },
    {
        id: "7",
        title: "My African Events",
        category: "Full Stack",
        description: "My African Events is a social connectivity and events platform for African American community. Anyone can register as an event organizer and host events. The tickets to the events can be paid or free. The organizer can also accept donations. The user can view all the events and buy tickets for those events and pay through an integrated payment system which was achieved through stripe. The project was developed using React, Redux, Javascript, Bootstrap, CSS, ExpressJs, PostgreSQL and AWS",
        role: "Software Engineer",
        features: [
            "Responsible for developing multiple screens including donations page, Home Page, Login page, Signup page, and discover-events page.",
            "Responsible for stripe integration on the client side."
        ],
        images: [
            "/images/mae/mae1.png",
            "/images/mae/mae2.png",
            "/images/mae/mae3.png",
            "/images/mae/mae4.png"
        ],
        technologies: ["React", "Bootstrap", "HTML", "SCSS", "React-redux", "Javascript", "ES6", "ExpressJs", "PostgresSQL", "Amazon Web Services", "Stripe"],
        timeline: "2020",
        url: "https://myafricanevents.com/"
    },
    {
        id: "8",
        title: "Giftabliss",
        category: "Full Stack",
        description: "Technical skills in use are Node.js, React, CSS, Redux, AWS, Material UI, JavaScript, HTML, Bootstrap, Cards & Payments, and E-Commerce. GIFTABLISS was a custom eCommerce solution developed using CSS, AWS, Node.js, etc. There were 4 parts to this project. The desktop site, CRM panel, shipper panel, and the Mobile site that was specifically designed for mobile users. The contents of the customer site were entirely configurable from the CRM panel. Completely developed the shipper panel which had features like e-signatures, Email Notifications, etc. and most of the modules of the CRM panel. Also integrated the payment methods (Paypal and Payfort). I was also responsible for developing the Apis for all these panels for data provision. Apart from that also integrated the Email Notification System.",
        role: "Software Engineer",
        features: [
            "Integrated Paypal and Payfort as payment methods.",
            "Developed CRM panels using React, Material UI, and other technologies.",
            "Served as the lead developer for payment and CRM modules."
        ],
        images: [
            "/images/giftabliss/gab1.png",
            "/images/giftabliss/gab2.png",
            "/images/giftabliss/gab3.png",
            "/images/giftabliss/gab4.png",
            "/images/giftabliss/gab5.png",
            "/images/giftabliss/gab6.png"
        ],
        technologies: ["React", "Meterial UI", "Bootstrap", "HTML", "CSS", "React-redux", "Javascript", "ES6", "ExpressJs", "Sequelize", "Amazon Web Services"],
        timeline: "2020",
        url: "https://giftabliss.com/"
    }
];
