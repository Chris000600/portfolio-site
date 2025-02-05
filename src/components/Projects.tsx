'use client';

import useSWR from 'swr';
import ProjectGrid from './ProjectGrid';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Projects() {
  const { data, error } = useSWR('/api/projects', fetcher, {
    refreshInterval: 5000
  });

  if (error) return <div>Failed to load</div>;

  return <ProjectGrid projects={data ? data : []} />;
}
