import type { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '@/components/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import BlogDetailsArea from '@/components/blog-details/BlogDetailsArea';

// TODO
export const metadata: Metadata = {
  title: '',
  description: ''
};

// type Props = {
//   params: { projectId: string };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const project = await getProjectById(params.projectId);

//   if (!project) {
//     return {
//       title: 'Project Not Found',
//       description: 'The requested project does not exist.'
//     };
//   }

//   return {
//     title: `Project Details – ${project.name}`,
//     description: `In-depth look at ${project.name}, detailing the challenges faced, solutions implemented, and the results achieved.`
//   };
// }

// export default function ProjectPage({ params }: Props) {

export default function BlogDetailsPage() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Create a Landing Page That Performs Great" />
            <BlogDetailsArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
