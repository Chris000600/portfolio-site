'use client';

import useSWR from 'swr';
import ProjectCard from './ProjectCard';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProjectGrid() {
  const { data, error } = useSWR('/api/projects', fetcher, {
    refreshInterval: 5000
  });

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <h2>Loading...</h2>
      </div>
    );

  const latestProjects = [...data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <PortfolioGrid projects={latestProjects} />;
}

function PortfolioGrid({ projects }) {
  return (
    <>
      <div
        className="projects-area container"
        id="portfolio"
      >
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid">
            {projects.map((item, i) => (
              <ProjectCard
                project={item}
                index={i}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
