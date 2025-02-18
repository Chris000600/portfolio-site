import { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';
import SingleProjectArea from '@/components/projects/single-project/SingleProjectArea';
import { getProjectById } from '@/lib/projects';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const response = await getProjectById(id);
  const project = JSON.parse(response);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project does not exist.'
    };
  }

  return {
    title: `Project Details – ${project.title}`,
    description: `In-depth look at ${project.title}, detailing the challenges faced, solutions implemented, and the results achieved.`
  };
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { id } = await params;
  const response = await getProjectById(id);
  const project = JSON.parse(response);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title={project.title} />
            <SingleProjectArea project={project} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
