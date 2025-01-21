import ProjectForm from './components/ProjectForm';
import ProjectGrid from './components/ProjectGrid';

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <ProjectForm />
      <ProjectGrid />
    </div>
  );
}
