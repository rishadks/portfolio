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
        client : "MA Holdings",
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
        id: 3,
        category: ["Software"],
        title: "Junior Software Programmer",
        client : "Global Technologies",
        timeframe: "August 05, 2025",
        description: "Maecenas sed tortor molestie, sagittis nibh sit amet, dapibus felis. Vivamus sed neque iaculis, ultrices nulla eu, venenatis dui. Praesent luctus urna eu dapibus pulvinar. Curabitur sed magna accumsan neque fermentum laoreet. Ut nunc.",      
        listItems: [
            "Will you provide website layout about design",
            "Branding With Business Agency",
            "Why should I work with an agency over a freelancer",
            "How much do you charge for branding",
        ],
    },
   
];