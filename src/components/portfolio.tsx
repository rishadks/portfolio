"use client";
import { portfolioData } from "@/lib/mockData/portfolioData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PortfolioDetailsPopUp from "./portfolioDetailsPopUp";

const filters = [
  { label: "All Experience", filter: "all" },
  { label: "Unique Properties", filter: "Real Estate" },
  { label: "MA Holdings", filter: "Logistics & Retail" },
  { label: "Global Technologies", filter: "Software" },
];
const Portfolio = () => {
  const [selectedCategory, setselectedCategory] = useState("all");

  const filteredItems = portfolioData.filter(({ category }) => {
    if (selectedCategory === "all") return true;
    return category.includes(selectedCategory);
  });

  return (
    <section id="portfolio" className="projects section-mt">
      <div className="projects-wrapper">
        <div className="container">
          <div className="section-title-wrapper row">
            <div className="col-xxl-5 col-12">
              <div className="section-title wow fadeInUp" data-wow-delay=".3s">
                <h3>Latest Project</h3>
                <span />
              </div>
            </div>
            <div className="col-xxl-7 col-12">
              {/* filter buttons */}
              <nav className="project-filter">
                <ul
                  className="d-flex flex-wrap justify-content-xxl-end wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  {filters.map((f, i) => (
                    <li key={i} onClick={() => setselectedCategory(f.filter)}>
                      <span
                        className={
                          f.filter === selectedCategory ? "active" : ""
                        }
                        data-filter={f.filter}
                      >
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="projects-container">
            {/* <div className="gutter-sizer" /> */}
            {filteredItems.map((project, index) => (
              <div
                key={project.id}
                className={`grid-item  mb-3
                  } ${project.category.join(" ")} wow fadeInUp`}
                data-wow-delay={`${0.6 + index * 0.2}s`}
              >
                <div className="project-item">
                  <div className="popup_content_area">
                    <div className="popup_modal_content">
                      <div className="project-info-wrapper">
                        <div className="project-client-meta d-flex flex-wrap justify-content-between">
                          <div className="client-meta">
                            <p>Clients:</p>
                            <h6>{project.client}</h6>
                          </div>
                          <div className="client-meta">
                            <p>Category:</p>
                            <h6>{project.category}</h6>
                          </div>
                          <div className="client-meta">
                            <p>Timeframe:</p>
                            <h6>{project.timeframe}</h6>
                          </div>
                        </div>
                        <hr className="hr w-100" />
                        <div className="project-details">
                          <h4 className="my-2">{project.title}</h4>
                          <p>
                            {project.description}
                          </p>
                          {project.listItems && (
                            <ul>
                              {project.listItems.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          )}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div
            className="view-all-btn-wrapper wow fadeInUp"
            data-wow-delay="1.6s"
          >
            <Link href="#" className="bttn-round">
              <span className="btn-txt">
                View All <i className="bi bi-arrow-up-right" />
              </span>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
