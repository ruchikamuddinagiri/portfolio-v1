import React, { useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import ScrollToTopButton from "./ScrollToTopButton";

import mobileDevelopmentImage from "../assets/mobile_development.gif";
import research from "../assets/research.gif";
import lti from "../assets/lti.avif";
import intern from "../assets/intern.gif";
import gssoc from "../assets/gssoc.gif";
import swoc from "../assets/swoc.avif";
import gsocextended from "../assets/gsocextended.gif";
import gra from "../assets/gra.png";

type TimelineItem = {
  date: string;
  title: string;
  image: string;
  url?: string;
  subtitle?: string;        // fallback if no highlights provided
  highlights?: string[];    // multiple bullet points
};

const WorkExperience: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const timelineItems: TimelineItem[] = [
    {
      date: "June 2024 - Present",
      title: "Software Engineer @ KLC Group LLC",
      image: mobileDevelopmentImage,
      url: "https://www.klc-group.com/",
      highlights: [
        "Led full-stack Android app (Java/Kotlin) for encrypted storage auth, ensuring data-at-rest security and compliance.",
        "Integrated anomaly detection (Autoencoder, Isolation Forest) for real-time threats; cut risk 35%.",
        "Built real-time anomaly dashboard (React/Next.js, Node, Postgres on AWS) streaming 10k+ events/day; reduced RCA time 40%.",
        "Developed license provisioning portal with JWT/RBAC; automated approvals/audits and cut provisioning time 50%.",
        "Shipped GPT-4 + RAG semantic log search and AI assistant, accelerating and improving troubleshooting.",
        "Owned E2E delivery (design→AWS/GCP); set up CI/CD, led reviews, mentored, and drove Agile to boost productivity."
      ],
    },
    {
      date: "August 2023 - May 2024",
      title: "Graduate Research Assistant (DRIVE Lab) @ Clemson University",
      image: gra,
      url: "https://drive.clemson.edu/",
      highlights: [
        "Built a React/Next.js dashboard with smooth animations(D3.js, ThreeJS) and transitions to visualize wildlife migration data, improving research analysis speed by 40%",
        "Developed backend services in Node.js and Python, optimizing PostgreSQL queries and APIs to reduce data retrieval latency by 25%",
        "Created reusable UI components and documented patterns to standardize workflows and improve collaboration across research teams"
      ],
    },
    {
      date: "August 2022 - May 2023",
      title: "Graduate Research Assistant (Box Turtle Project) @ Clemson",
      image: research,
      url: "https://www.clemson.edu/",
      highlights: [
        "Built a consumer-facing React Native mobile app with WCAG 2.2 AA-compliant accessibility, 500+ users and securing $250K in funding",
        "Developed a web app using React.js, Node.js, MongoDB, and Express.js, with JWT authentication and REST APIs to secure data",
        "Collaborated with offshore teams to deliver responsive designs and automate CI/CD pipelines"
      ],
    },
    {
      date: "May 2023 - August 2023",
      title: "Software Engineering Intern @ Pangea Cyber",
      image: intern,
      url: "https://pangea.cloud",
      highlights: [
        "Designed secure, scalable cloud infrastructure on AWS and GCP using Terraform, Docker, and Kubernetes, supporting global services processing millions of API requests",
        "Automated microservice deployments with GitLab CI/CD, reducing environment setup time by 60%",
        "Built a GitLab CI-integrated audit tool in Go to analyze Terraform plan logs decreasing errors by 30%"
      ],
    },
    {
      date: "August 2020 - July 2022",
      title: "Software Engineer @ LTIMindtree",
      image: lti,
      url: "https://www.ltimindtree.com/",
      highlights: [
        "Built policy and claims management platforms using ReactJS, Node.js, Spring Boot, and PostgreSQL, improving operational efficiency by 25% and ensuring compliance for sensitive financial data",
        "Developed secure REST APIs and implemented JWT/RBAC authentication, reducing manual processes and improving transaction",
        "Delivered real-time financial analytics dashboards by integrating IBM Cognos with modern APIs",
        "Collaborated within a 15-member Agile team, participating in architecture decisions, sprint planning, peer code reviews",
        "Wrote unit and integration tests with Jest and JUnit, increasing code coverage to 80%"
      ],
    },
    {
      date: "March 2021 - June 2021",
      title: "Mentor @ GirlScript Summer of Code",
      image: gssoc,
      url: "https://gssoc.girlscript.tech/",
      highlights: [
        "Mentored students building a diversity-centric web app",
        "Led feature development and code reviews"
      ],
    },
    {
      date: "December 2020 - February 2020",
      title: "Open Source Developer @ Script Winter of Code",
      image: swoc,
      url: "https://winterofcode.com/",
      highlights: [
        "Frontend development of a SCRUM tool for project management"
      ],
    },
    {
      date: "August 2020 - November 2020",
      title: "Open Source Developer @ GirlScript Summer of Code (Extended)",
      image: gsocextended,
      url: "https://gssoc.girlscript.tech/",
      highlights: [
        "Built a full-stack inclusivity platform for diverse communities"
      ],
    },
  ];

  return (
    <div className="pointer-events-auto w-screen min-h-screen text-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">

        {/* Gradient Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-10 bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent"
          style={{ WebkitTextStroke: "1px rgba(0,0,0,0.35)" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg max-w-3xl text-center mb-8 text-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          I have ~3 years of experience building web & mobile applications, ETL pipelines,
          and AI-powered solutions. Here’s my journey.
        </motion.p>

        {/* Timeline */}
        <div className="w-full max-w-5xl mb-12">
          <VerticalTimeline lineColor="#f9a8d4"> {/* tailwind pink-300 */}
            {timelineItems.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                date={item.date}
                dateClassName="text-pink-800 font-semibold"
                iconStyle={{
                  background: "linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)",
                  boxShadow: "0 0 0 4px rgba(255,255,255,0.9), 0 10px 20px rgba(236,72,153,0.25)",
                }}
                // Use our own card UI; make the library container transparent
                contentStyle={{
                  background: "transparent",
                  color: "inherit",
                  border: "none",
                  boxShadow: "none",
                  padding: 0,
                  overflow: "visible",
                }}
                contentArrowStyle={{ borderRight: "7px solid transparent" }}
                className="pointer-events-auto"
              >
                <a
                  href={item.url}
                    // If you want the entire card clickable, keep <a> wrapping the card.
                    // Remove if you prefer a dedicated "Visit" link/button only.
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-2xl"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="
                      group relative rounded-2xl p-[1.5px]
                      bg-gradient-to-tr from-pink-500/70 via-rose-400/70 to-orange-400/70
                      shadow-sm hover:shadow-lg
                    "
                  >
                    {/* Inner glass card */}
                    <div className="rounded-2xl bg-white/90 backdrop-blur-sm p-5">
                      {/* Header row */}
                      <div className="flex items-start gap-4">
                        {/* Avatar with ring */}
                        <div className="relative shrink-0">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 blur-sm opacity-60" />
                          <img
                            src={item.image}
                            alt={item.title}
                            className="relative w-16 h-16 object-cover rounded-full ring-4 ring-white"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                            {item.title}
                          </h3>

                          {/* Date badge */}
                          <div className="mt-1 inline-flex items-center rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-700 ring-1 ring-pink-200">
                            {item.date}
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="my-4 h-px w-full bg-gradient-to-r from-pink-200 via-rose-200 to-orange-200" />

                      {/* Body: highlights list or subtitle */}
                      {Array.isArray(item.highlights) ? (
                        <ul className="text-slate-700 text-sm md:text-base list-disc list-inside space-y-1.5 text-left">
                          {item.highlights.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        item.subtitle && (
                          <p className="text-slate-700 text-sm md:text-base">{item.subtitle}</p>
                        )
                      )}

                      {/* CTA row (optional) */}
                      {item.url && (
                        <div className="mt-4">
                          <span className="inline-flex items-center gap-2 text-pink-700 hover:text-orange-600 font-medium">
                            Visit
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4"
                            >
                              <path d="M13.5 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75V9.75a.75.75 0 0 1-1.5 0V6.31l-7.22 7.22a.75.75 0 1 1-1.06-1.06L17.69 5.25h-3.44a.75.75 0 0 1-.75-.75z" />
                              <path d="M5.25 6a.75.75 0 0 1 .75.75v10.5c0 .414.336.75.75.75h10.5a.75.75 0 0 1 .75.75v0a.75.75 0 0 1-.75.75H6.75A2.25 2.25 0 0 1 4.5 17.25V6.75A.75.75 0 0 1 5.25 6z" />
                            </svg>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Soft hover glow around card */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition"
                      style={{
                        background:
                          "radial-gradient(400px circle at 30% -10%, rgba(255,255,255,0.35), transparent 40%)",
                      }}
                    />
                  </motion.div>
                </a>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default WorkExperience;
