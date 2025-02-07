import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import SignOutButton from '@/components/projects/SignOutButton';
import { Suspense } from 'react';
import Projects from '@/components/projects/Projects';
import classes from '../page.module.css';

export default async function AdminPage() {
  // Get session server-side
  const session = await getServerSession(authOptions);

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
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome, {session.user?.name}!</p>
      <p>Your email: {session.user?.email}</p>

      <SignOutButton />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Projects />
        </Suspense>
      </div>
    </div>
  );
}
