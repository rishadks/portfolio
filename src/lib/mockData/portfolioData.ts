export type Portfolio = {
    id: number;
    category: string[];
    title: string;
    client?: string;
    timeframe?: string;
    description?: string;
    listItems?: string[];
};

export const portfolioData: Portfolio[] = [

    {
        id: 1,
        category: ["Real Estate"],
        title: "Senior IT Desktop Support Engineer",
        client : "Unique Properties",
        timeframe: "December 4 ,2022",
        description: ".Unique Properties is a leading Dubai real estate agency and an award-winning broker that specializes in off-plan projects. Buy, Sell or Rent Dubai Property..",      
        listItems: [
            "Provide Level 2 & Level 3 desktop support for 400+ end users across 4 independent companies",
            "Act as primary escalation point for complex hardware, software, and network issues",
             "Manage and support Windows desktops, laptops, printers, scanners, and mobile devices",
             "Administer Active Directory: user accounts, group policies, password resets, and access control",
             "Support Microsoft 365 services including Outlook, Teams, OneDrive, SharePoint, and Exchange",
             "Why should I work with an agency over a freelancer",
            "How much do you charge for branding",
            "Troubleshoot network issues (LAN/WAN, Wi-Fi, VPN, DNS, DHCP, TCP/IP)",
            "Perform system installations, upgrades, and patch management",
             "Manage endpoint security: antivirus, encryption, MFA, and compliance policies",
              "Handle user onboarding and offboarding across all 4 companies",
              "Maintain IT asset inventory and lifecycle management",
             "Support remote users using RDP, VPN, and remote support tools",
             "Coordinate with vendors and third-party service providers for hardware, software, and ISP issues",
              "Ensure backup, data recovery, and business continuity procedures are followed",
            "Create and maintain technical documentation, SOPs, and user guides",
            "Enforce IT policies, security standards, and best practices across companies",
            "Monitor system performance and incident trends to reduce recurring issues",
            "Provide training and technical guidance to junior support staff",
        ]
    },
    {
        id: 2,
        category: ["Logistics & Retail"],
        title: "IT Desktop Support Engineer",
        client : "Lulu Group International ",
        timeframe: "May ,2016",
        description: "Lulu Retail is the largest full-line retailer across the GCC, leading by selling space, sales and number of stores. ",      
        listItems: [
            "Retail Business focused Technical Support Specialist with experience. Highly adept in systems analysis diagnostics and troubleshooting and conflict resolution. ",
            "Installation and maintenance of POS Machines. • Installation & configuring computer hardware, operating systems, applications, and PDT Devices",
            "Managing AD User accounts, Group policies, DHCP, and dealing with password issues.",
            "Managing & maintaining IT Infrastructure, Troubleshoot System applications, Wired and Wireless network issues through remote desktop",
            "Front End support for Self Checkout POS.",
            "MS Office packages & Product support. ",
            "Configuring and installing peripheral devices such as printers, Scanners, Thin clients, webcams, IP cameras, and VC devices.",
            "Inventory Management using SAP & Analyzer. • END User support for SAP.",
            "Provide assistance and support to colleagues in ITrelated matters.",
            "Logged call data in the Ticket Management System to ensure timely resolution. Also, making reports of  daily open and closed tickets.",
            "Help Desk Support · Hardware · Avaya IP Telephony · Microsoft Office · Inventory Management SAP ERP · Point of Sale (POS) Systems",
            "Expertise in SAP MM/SAP ERP and running various business operation to support the business",
            "Running regular checks on network and data security & Identifying and acting on opportunities to improve and update software and systems.",
            "Developing and implementing IT policy and best practice guides for the organization & • Conducting regular system audits",
            "Running and sharing regular operation system reports with senior staffs ",
            "Providing direction for IT team members to support retail operation",
            "Identify problematic areas and implement strategic solution in time.",
            "Guiding the IT staffs by providing information",
            
        ]
    },
    {
        id: 3,
        category: ["Software"],
        title: "Junior Software Programmer",
        client : "Global Technologies",
        timeframe: "December 2014-April 2015",
        description: "Work under the guidance of senior developers to write clean and efficient code, fix bugs, perform basic testing, and support ongoing projects. The role requires a strong willingness to learn new technologies, follow coding standards, and collaborate effectively with team members to deliver reliable software solutions.",
        listItems: [
            "Assist in developing, testing, and maintaining software applications.",
            "Write clean, scalable, and efficient code following company standards",
            "Debug and troubleshoot software issues",
            "Participate in code reviews and team discussions",
            "Maintain proper documentation of development processes",
            "Update and manage databases when required.",
            "Learn and adapt to new technologies as needed.",
            "Support senior developers in project implementation and enhancements",
        ],
    },
   
];