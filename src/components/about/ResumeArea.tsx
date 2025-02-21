'use client';
import { useState, useEffect } from 'react';

const resumeData = [
  {
    date: '2023 - 2025',
    title: 'AI Analyst & Project Manager',
    company: 'Artisse AI',
    description:
      "Artisse was a startup where I mainly worked on AI optimization, business development, and workflow automation. I curated training datasets to improve model accuracy, introduced new Virtual Try On features, and secured B2B partnerships with Microsoft Teams and Samsung's Galaxy AI. Additionally, I managed legal entity setups across multiple countries and led HR recruitment, interviewing over 200 candidates for key roles."
  },
  {
    date: '2022 - Present',
    title: 'Sr. Data & Business Analyst',
    company: 'Vidio',
    description:
      'At Vidio, I optimized reporting workflows, ad revenue, and social media performance by improving data reliability, leveraging AI to streamline operations, and building accurate predictive models. I also analyzed influencer (KOL) campaigns, providing data-driven insights to help clients maximize their impact.'
  },
  {
    date: '2022',
    title: 'Strategy & Innovation Intern',
    company: 'EMTEK Holding Company',
    description:
      'At EMTEK, I developed SIMORS (Subsidiary Monthly Reporting System) to optimize reporting for its subsidiaries. Additionally, I also gained valuable experience in data reporting and analysis for executives, learning to interpret data from a high-level perspective.'
  },
  {
    date: '2022',
    title: 'Digital Consultation Internship',
    company: 'PhysioKnecht Joondalup via Practera',
    description:
      'During my internship at Practera, I provided digital consulting for PhysioKnecht Joondalup, helping them develop a marketing strategy to modernize their business and stay competitive.'
  },
  {
    date: '2021',
    title: 'Professional Computing',
    company: 'The University of Western Australia',
    description:
      'For my final year project, I collaborated with academic professionals to develop a booking system for managing their busy schedules. The web application integrated with Gmail to identify meeting requests, automatically send booking forms, and seamlessly schedule meetings.'
  },
  {
    date: '2020 - 2022',
    title: 'Bachelor of Science, Computer Science',
    company: 'University of Western Australia',
    description:
      'I earned my B.S. in Computer Science from The University of Western Australia, building a strong foundation in AI, data analysis, cybersecurity, and systems programming. My studies covered algorithms, database management, and computer networks, while hands-on projects strengthened my skills in software development and web architecture. Notably, I led a team that integrated Google’s API into an automated booking system, earning 2nd place out of 250 for execution and innovation.'
  },
  {
    date: '2018 - 2019',
    title:
      'Bachelor of Engineering, Systems Engineering and Engineering Management',
    company: 'The Chinese University of Hong Kong',
    description:
      'I began my B.E. in Systems Engineering and Engineering Management at The Chinese University of Hong Kong (CUHK) in 2018, studying advanced mathematics, data visualization, systems programming, and robotics engineering. Due to the Hong Kong riots, I left in December 2019 and later transferred to The University of Western Australia to complete my degree.'
  },
  {
    date: '2017',
    title: 'Kitchen Assistant Intern',
    company: 'Maystar Restaurant',
    description:
      'Before finishing high school, I interned as a kitchen assistant at Maystar Restaurant, where I gained valuable experience in teamwork, time management, and communication. This role helped me develop a strong work ethic that has benefited me throughout my career.'
  }
];

// Create sublists for even and odd entries based on index
const evenResumeData = resumeData.filter((_, i) => i % 2 === 0);
const oddResumeData = resumeData.filter((_, i) => i % 2 !== 0);

export default function ResumeArea() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 767);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div
        className="resume-area"
        id="resume"
      >
        <div className="container">
          <div className="row">
            {isMobile ? (
              <div className="col-12">
                <div className="resume-wrapper wow fadeInUp delay-0-2s">
                  {resumeData.map((data, i) => (
                    <div
                      key={i}
                      className="resume-box"
                    >
                      <span className="resume-date">{data.date}</span>
                      <h2>{data.title}</h2>
                      <span>@ {data.company}</span>
                      <p>{data.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="col-xl-6 col-md-6">
                  <div className="resume-wrapper wow fadeInUp delay-0-2s">
                    {evenResumeData.map((data, i) => (
                      <div
                        key={i}
                        className="resume-box"
                      >
                        <span className="resume-date">{data.date}</span>
                        <h2>{data.title}</h2>
                        <span>@ {data.company}</span>
                        <p>{data.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="resume-wrapper wow fadeInUp delay-0-4s">
                    {oddResumeData.map((data, i) => (
                      <div
                        key={i}
                        className="resume-box"
                      >
                        <span className="resume-date">{data.date}</span>
                        <h2>{data.title}</h2>
                        <span>@ {data.company}</span>
                        <p>{data.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
