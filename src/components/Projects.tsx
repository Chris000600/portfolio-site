'use client';

import useSWR from 'swr';
import ProjectGrid from './ProjectGrid';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Projects() {
  // The NEXT_PUBLIC_VERCEL_URL environment variable is automatically set by Vercel in production.
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';

  const { data, error } = useSWR(`${baseUrl}/api/projects`, fetcher, {
    refreshInterval: 5000
  });

  if (error) return <div>Failed to load</div>;

  return <ProjectGrid projects={data ? data : []} />;
}
