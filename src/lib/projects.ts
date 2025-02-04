import { NextResponse } from 'next/server';

export async function getProjects() {
  const response = await fetch('/api/projects');
  const data = await response.json();

  return data;
}

export async function createProject(projectData: any) {
  const response = await fetch('/api/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(projectData)
  });

  const result = await response.json();

  return result;
}
