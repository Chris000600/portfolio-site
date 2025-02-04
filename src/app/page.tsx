import ProjectGrid from '@/components/ProjectGrid';
import classes from './page.module.css';
import { Suspense } from 'react';
import { getProjects } from '@/lib/projects';

async function Projects() {
  // this component will be the one that fetches the data instead of the whole page
  const response = await getProjects();

  return <ProjectGrid projects={JSON.parse(response)} />;
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
