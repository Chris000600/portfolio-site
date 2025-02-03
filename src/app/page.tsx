import ProjectGrid from '@/components/ProjectGrid';
import classes from './page.module.css';
import { Suspense } from 'react';

async function Projects() {
  // this component will be the one that fetches the data instead of the whole page
  const response = await fetch('/api/projects');
  const data = await response.json();
  const projects = data.success ? data.data : [];

  return <ProjectGrid projects={projects} />;
}

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
        <Projects />
      </Suspense>
    </div>
  );
}
