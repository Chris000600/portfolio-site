'use client';

import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PortfolioArea() {
  const { data, error } = useSWR('/api/projects', fetcher, {
    refreshInterval: 5000
  });

  if (error)
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <h2>Failed to load projects</h2>
      </div>
    );
  if (!data)
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <h2>Loading...</h2>
      </div>
    );

  const latestProjects = [...data]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return <PortfolioGrid projects={latestProjects} />;
}

function PortfolioGrid({ projects }) {
  return (
    <>
      <div
        className="projects-area container"
        id="portfolio"
      >
        <div className="custom-icon">
          <img
            src="assets/images/custom/work-scribble.svg"
            alt="custom"
          />
        </div>
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`col-md-6 portfolio-item category-1`}
              >
                <Link
                  href={`/projects/${project._id.toString()}`}
                  style={{ cursor: 'pointer' }}
                  className="work-popup"
                >
                  <div className="portfolio-box">
                    <img
                      src={project.thumbnail}
                      alt=""
                      style={{
                        height: '40vh',
                        objectFit: 'cover'
                      }}
                    />
                    <span className="portfolio-category">
                      {
                        project.technology
                          .split(',')
                          .map((tech) => tech.trim())[0]
                      }
                    </span>
                    <div className="portfolio-caption">
                      <h1>{project.title}</h1>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div
          className="text-center"
          style={{
            marginTop: '30px'
          }}
        >
          <Link
            legacyBehavior
            href="/projects"
          >
            <a className="see-more-link">See More</a>
          </Link>
        </div>
        <style jsx>{`
          .see-more-link {
            color: white;
            font-size: 40px;
            line-height: 70px;
            text-transform: uppercase;
            font-family: Oswald;
          }
          .see-more-link:hover {
            color: #ddd;
            text-decoration: underline;
          }
        `}</style>
      </div>
    </>
  );
}
