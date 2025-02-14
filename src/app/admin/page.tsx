import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { Suspense } from 'react';
import Projects from '@/components/projects/dep/Projects';
import classes from '../page.module.css';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '@/components/common/Breadcrumb';
import ProjectsAdmin from '@/components/admin/ProjectsAdmin';
import { getProjects } from '@/lib/projects';

export default async function AdminPage() {
  // Get session server-side
  const session = await getServerSession(authOptions);

  const results = await getProjects();
  const projects = JSON.parse(results);

  if (!session) {
    // pretty much obsolete since middleware have rerouted
    return (
      <div>
        <h1>Access Denied</h1>
        <p>You must be logged in to view this page.</p>
      </div>
    );
  }

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title={`Admin: ${session.user?.name.split(' ')[0]}`}
              email={session.user?.email}
            />

            <div className="resume-area">
              <div className="container">
                <ProjectsAdmin projects={projects} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </Wrapper>
  );
}
