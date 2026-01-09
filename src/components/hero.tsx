
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero section-pt">
      <div className="section-wrapper">
        <div className="container position-relative">
          <div className="bg-line" />
          <div className="profile-pic-wrapper">
            <Image
              width={652}
              height={594}
              sizes="100vw"
              className="profile-bg"
              src="/images/hero/profile-pic-bg.png"
              alt="background"
            />
            <Image
              width={501}
              height={556}
              sizes="100vw"
              className="profile-pic wow fadeInLeft"
              data-wow-delay=".9s"
              src="/images/hero/profile-pic.png"
              alt="creativemela"
            />
          </div>
          {/* <div className="contact-rotate-wrapper">
            <Image
              width={128}
              height={128}
              className="contact-me-rotate"
              src="/images/hero/contact-me-txt.svg"
              alt="contact me"
            />
            <Link href="#contact" className="contact-me-arrow">
              <Image
                width={74}
                height={74}
                src="/images/hero/contact-me-arrow.svg"
                alt="arrow"
              />
            </Link>
          </div> */}
          <div
            className="d-flex align-items-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            <h6>Hi there!&nbsp;</h6>
            <Image
              width={20}
              height={20}
              className="hi-icon"
              src="images/hero/hi.svg"
              alt="hi"
            />
            <h6>&nbsp;I'm</h6>
          </div>
          <h1 className="wow fadeInUp" data-wow-delay=".6s">
            Rishad Kottapara Shafi
          </h1>
          <div className="row">
            <div className="col-xl-4 col-lg-4" />
            <div className="col-xl-6 col-lg-8">
              <h6
                className="intro-info d-none d-md-block wow fadeInUp"
                data-wow-delay=".9s"
              >
                Senior IT Desktop Support Engineer | Expert in ITSM, Cloud Infrastructure, Cybersecurity & Endpoint Management | AI & Automation-Driven IT Solutions | Digital Transformation & Enterprise IT Optimization Leader | Process Improvement & Operational Efficiency Specialist | Cross-Functional Team Collaboration & Strategic IT Leadership.
              </h6>
            </div>
            <div className="col-xl-2" />
          </div>
          <div className="d-none d-md-block">
            <div className="row">
              <div className="col-md-4" />
              <div className="col-md-8">
                <div className="d-flex align-items-center flex-wrap flex-xxl-nowrap gap-4 gap-lg-5 gap-xxl-0">
                  <div
                    className="btn-wrapper d-flex align-items-center wow fadeInUp"
                    data-wow-delay="1.2s"
                  >
                    <a href="#contact" className="bttn bttn-primary">
                      Let’s Talk <i className="bi bi-arrow-up-right" />
                    </a>
                    <a href="images/resume.pdf" target="_blank" className="bttn bttn-secondary">
                      Download CV <i className="bi bi-arrow-up-right" />
                    </a>
                  </div>
                  <Image
                    width={133}
                    height={20}
                    className="lg-arrow wow fadeInUp"
                    data-wow-delay="1.6s"
                    src="images/hero/lg-arrow.svg"
                    alt="arrow"
                  />
                  <ul
                    className="social-media d-flex align-items-center wow fadeInLeft"
                    data-wow-delay="1.9s"
                  >
                    <li>
                      <Link href="https://ae.linkedin.com/in/rishad-kottapara-shafi-8b7439b5" target="_blank">
                        <i className="fa-brands fa-linkedin" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://wa.me/+971566779903" target="_blank">
                        <i className="fa-brands fa-whatsapp" />
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:rishadks07@gmail.com" target="_blank">
                        <i className="fa fa-envelope" />
                      </Link>
                    </li>
                    <li>
                    <Link href="tel:+971566779903" target="_blank">
                      <i className="fa fa-phone" />
                    </Link>
                  </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <span className="profession wow fadeInUp" data-wow-delay="1.0s">
            SENIOR <span className="text-black">IT SUPPORT</span>  DESKTOP ENGINEER
          </span>
          <div className="m-content d-flex flex-wrap d-block d-md-none">
            <h6 className="intro-info wow fadeInUp" data-wow-delay="1.2s">
              I believe that collaboration and creativity are the essence of
              progress. And i am dedicated to bringing a fresh perspe to every
              project undertake.
            </h6>
            <button type="button" className="bttn bttn-primary">
              Let’s Talk <i className="bi bi-arrow-up-right" />
            </button>
            <button type="button" className="bttn bttn-secondary">
              Download CV <i className="bi bi-arrow-up-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
