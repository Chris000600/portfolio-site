import Breadcrumb from '@/components/common/Breadcrumb';
import ProjectGrid from '@/components/projects/ProjectGrid';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Christopher's Projects",
  description:
    'Browse through a selection of projects which Christopher has done in the past'
};

export default function ProjectsPage() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title="Projects"
              style_2={true}
            />
            <ProjectGrid />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
