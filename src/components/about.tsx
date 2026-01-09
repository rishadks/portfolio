import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="about section-pt">
      <div className="container wow fadeInUp" data-wow-delay=".3s">
        <div className="section-title">
          <h3>About Me</h3>
          <span />
        </div>
        <h5 className="about-info wow fadeInUp" data-wow-delay=".4s">
          I am a Senior IT Desktop Support Engineer with over 10 years of experience supporting and optimizing enterprise IT environments. My expertise spans desktop and endpoint support, cloud infrastructure, ITSM, and cybersecurity, delivering secure, scalable, and high-performing solutions that align technology with business goals.

          I specialize in modernizing IT support operations through automation, AI, and machine learning–driven systems, achieving measurable results such as 40% faster ticket resolution and a 98% customer satisfaction rating. Skilled in incident and problem management, root cause analysis, ITIL-aligned processes, and continuous service improvement, I ensure IT services remain reliable and resilient.

          I collaborate effectively with cross-functional teams, including security, infrastructure, and business stakeholders, to deliver digital transformation initiatives. Passionate about cloud technologies, cybersecurity best practices, and emerging AI solutions, I bridge technical execution with strategic leadership, connecting IT teams to organizational goals.{" "}
          <span className="txt-orange">Envato</span> market. I have worked with
          large companies &amp; challenges throughout my career.
        </h5>
        <div className="row">
          <div className="col-md-6 d-inline-flex flex-column justify-content-between">
            <div className="year-exp wow fadeInLeft" data-wow-delay=".5s">
              <div className="year-exp-txt text-center text-md-start">
                <span>10+</span>
                <h4 className="text-center text-md-start">
                  Years
                  <br />
                  Experience
                </h4>
              </div>
            </div>
            {/* <Link href="#" className="bttn-round">
              <span className="btn-txt">
                About Me <i className="bi bi-arrow-up-right" />
              </span>
            </Link> */}
          </div>
          <div className="col-md-6">
            <div >
              <ul className="list-disc">
                <li>
                  <h6 className=" wow fadeInUp" data-wow-delay=".4s">
                    Operating Systems: Windows 10/11, Windows Server, macOS, Linux (basic)Endpoint Management: Intune, SCCM, JAMFTicketing Systems: ServiceNow, Jira, ZendeskSecurity: MFA, BitLocker, endpoint protection, access controlRemote Support: TeamViewer, AnyDesk, RDPTSM Frameworks: ITIL Incident, Problem, and Change Management
                    Windows 10, Windows 11, Windows Server 2016/2019/2022
                    macOS, Linux (Ubuntu, RHEL)
                    Active Directory (AD), Group Policy (GPO)
                    Azure Active Directory (Azure AD / Entra ID), Hybrid Identity
                    Microsoft 365 Administration (Exchange Online, Teams, SharePoint, OneDrive)
                    TCP/IP, DNS, DHCP, VPN, LAN/WAN Networking
                    Wi-Fi Configuration, Firewall Troubleshooting
                    Endpoint Management: Microsoft Intune, Endpoint Manage
                    SCCM / MECM, JAMF
                    Device Deployment, Patch Management, Software Distribution
                    Hardware & Desktop Support (Laptops, Desktops, Servers)
                    Printer & Peripheral Support
                    Virtualization: VMware vSphere, ESXi, Hyper-V
                    Backup & Recovery: Veeam, Azure Backup, Acronis
                    Cybersecurity Fundamentals, Endpoint Security, MFA
                    Encryption: BitLocker, FileVault
                    PowerShell Scripting, Automation
                    IT Service Management (ITIL)
                    Ticketing Systems: ServiceNow, Jira, Freshservice, Zendesk
                    Incident Management, Problem Management, Change Management
                    Tier 2 / Tier 3 Technical Support
                    Root Cause Analysis, Troubleshooting, Vendor Coordination
                    Technical Skills & Systems (ATS Optimized)
                    Network administration including Multiple Networks and VLANs
                    Enterprise Firewall Management (AhnLab Firewall)
                    SSL Certificate Management and SSL VPN Administration
                    Cybersecurity for Endpoints and Servers
                    Endpoint Protection: Bitdefender GravityZone Antivirus
                    Email Security: Perception Point Email Security
                    Microsoft Exchange Server Management (500+ users)
                    Microsoft 365 Administration
                    Active Directory User Management & Group Policy (GPO)
                    VM-Enabled Server Management (Windows Server, Virtual Machines)
                    Enterprise Wi-Fi Network Management
                    NAS Storage Management and Backup Solutions
                    IT Support Infrastructure Management
                    Helpdesk & Ticketing Systems (GLPI, Fusion Inventory, Zendesk)
                    IT Inventory and Asset Management
                    License Management and Renewals for IT services
                    Infrastructure & Systems Management
                    Office AV System Management
                    Office Printer and Peripheral Management
                    PBX & IP Telephony Systems (Avaya IP Telephony)
                    Office CCTV System Management
                    Biometric & Access Control Systems
                    Property Monitoring System – User Management
                    NAS & File Server Administration
                    Firewall, VPN, and Network Security Monitoring
                    Business Applications & Platforms
                    SAP ERP Support
                    Point of Sale (POS) Systems
                    Salesforce User Onboarding & New Joiner Account Setup
                    Monday.com Task and Workflow Management
                    Digital Business Card Solutions
                    Email Signature Management (Exclaimer)
                    Specialized Devices & Hardware
                    Weighing Scales Support (Avery Berkel, Mettler Toledo)
                    Handheld Terminals (Symbol, Motorola)
                    Office AV & Communication Devices
                    Security & Access Systems
                    AhnLab TrusGuard VPN
                    Email, Network, and Endpoint Security Management
                    User Access Control and Compliance Support
                  </h6>
                </li>
                <li><h6 className=" wow fadeInUp" data-wow-delay=".4s">Hardware: Laptops, desktops, printers, peripherals, imaging & deployment</h6></li>
                <li><h6 className=" wow fadeInUp" data-wow-delay=".4s">Networking: TCP/IP, DNS, DHCP, VPN, Wi-Fi troubleshooting</h6></li>
                <li><h6 className=" wow fadeInUp" data-wow-delay=".4s">Microsoft Technologies: Microsoft 365, Azure AD, Active Directory, Exchange</h6></li>
                <li><h6 className=" wow fadeInUp" data-wow-delay=".4s"></h6></li>
                <li><h6 className=" wow fadeInUp" data-wow-delay=".4s"></h6></li>
                <li><h6 className=" wow fadeInUp" data-wow-delay=".4s"></h6></li>
                <li><h6 className=" wow fadeInUp" data-wow-delay=".4s"></h6></li>
                <li><h6 className=" wow fadeInUp" data-wow-delay=".4s"></h6></li>
                <li><h6 className=" wow fadeInUp" data-wow-delay=".4s"></h6></li>
                <li><h6 className=" wow fadeInUp" data-wow-delay=".4s"></h6></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
