export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    images: string[];
    technologies: string[];
    role: string;
    timeline: string;
    url?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "YJSJ",
        category: "Full Stack",
        description: "Job search genius is a AI powered platform for job searchers. It allows you to create ATS resumes, track jobs, generate cover letters, and generate offer negotiation points, all with the power of AI at the back. It is a fully white label solution. It has microservices based architecture. In the admin side of this platform. The admin can add staff members, assign permissions, add users and view user data. Since its fully white labeled, the customer view the website on admins domain and receive emails from the admins domain as well. Similarly, the staff also has full access of user functionality, if it has the right permissions. The super-admin can add companies, activate and deactivate companies and view key performance indicators in the form of charts.",
        role: "In the project, I served as the lead developer responsible for designing and implementing the entire administrative functionality of the Job Search Genius platform. Leveraging my expertise in microservices-based architecture, I crafted features enabling administrators to seamlessly manage staff members, allocate permissions, add users, and access user data. Additionally, I ensured the platform's full white-label capabilities, allowing customers to interact with the website and receive emails under the administrator's domain. My role extended to providing staff members with comprehensive access to user functionalities based on their assigned permissions. As a key contributor, I played a pivotal role in enhancing the overall functionality and user experience of the admin app, contributing significantly to the success of the project.",
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
        role: "I created materialized views to show data to the user in near-realtime. To achieve that I used agendaJs to create ETL pipelines to extract, transform and load the data. In addition to that I used aggregation pipelines to calculate statistics data and send it to the user. I also used the pipelines to create reports in excel format. The dashboard had different kind of data, total appointments, total calls, total chats, convergence rate, ER referrals etc. I also setup read replicas for MySql database that was hosted on RDS service of AWS.",
        images: [
            "/images/guardianvets/gv1.png",
            "/images/guardianvets/gv2.png"
        ],
        technologies: ["React", "Javascript", "Typescript", "Bootstrap", "HTML", "CSS", "React-redux", "ES6", "ExpressJs", "MongoDb", "AWS"],
        timeline: "2022",
        url: "https://analytics-v3.guardianvets.com/sign-in"
    },
    {
        id: "3",
        title: "ZAP",
        category: "Full Stack",
        description: "This an e-commerce dashboard. The prime focus in this project was on code optimization and reduction of load times along with development of new features. The project was developed using Javascript, but owing to the complexity of the code, we decided to develop new features with Typescript. Apart from typescript it also uses SP-APIs and google cloud services.",
        role: "I was responsible for the reconciliation of data through sales reports, ad reports and traffic reports. I was also responsible for optimization of endpoints which decreased the load time by the factor of 10x. I developed the feature of viewing graphs for parent and child products. I used highchartsJs for this purpose. The user can select the KPIs that it wants to view. The user can also view the graph using different timeframes e.g weekly, monthly, yearly etc. I also introduced 3 different y-axis for KPIs that use different unit for measurement.",
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
        role: "The app was developed using React-Native, Javascript, NodeJs. We used Stripe as the payment method. We have integrated Shipstation to handle home deliveries. I was responsible for the complete development of pickup module as well as integration of stripe and shipstation. We also add the feature of downloading the tax reports on the admin panel.",
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
        role: "I was responsible for performing the complex tasks as well as checking and merging others tasks that were relatively simple. I had 3 junior developers working with me. I was also responsible for writing agenda jobs to fetch the data from Amazon using SP-API and transform it in the intended format. 1)Used React, Javascript, Material Ui for frontend development. 2)Used redux-toolkit for application state management. 3)Used NodeJs and ExpressJs for backend development. 4)Used AgendaJjs to schedule jobs. 5)Used amazon Selling Partner APIs (SP-API) for retrieving historical and individual product data. 6)Configured Jobs for synchronizing the product, order and cost data.",
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
        role: "I was responsible for performing the complex tasks as well as checking and merging others tasks that were relatively simple. I had 3 junior developers working with me. I was also responsible for writing agenda jobs to fetch the data from Amazon using SP-API and transform it in the intended format. 1)Used React, Javascript, Material Ui for frontend development. 2)Used redux-toolkit for application state management. 3)Used NodeJs and ExpressJs for backend development. 4)Used AgendaJjs to schedule jobs. 5)Used amazon Selling Partner APIs (SP-API) for retrieving historical and individual product data. 6)Configured Jobs for synchronizing the product, order and cost data.",
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
        role: "I was responsible for developing multiple screens i.e donations page, Home Page, Login page, Signup page, discover-events page etc on the client side and I was also responsible for stripe integration on the client side.",
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
        role: "Paypal and Payfort were integrated as payment methods. All the CRM panels were also developed using the same technologies. I was the lead developer in all of these modules.",
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
