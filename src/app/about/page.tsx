import { Metadata } from 'next';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

import Breadcrumb from '@/components/common/Breadcrumb';
import ResumeArea from '@/components/about/ResumeArea';
import SkillArea from '@/components/about/SkillArea';

export const metadata: Metadata = {
  title: 'About Christopher',
  description:
    'Programmer and AI analyst based in Jakarta, Indonesia, with a B.S. in Computer Science from The University of Western Australia. I specialize in AI optimization, business intelligence, and workflow automation; helping businesses enhance performance with cutting-edge technology.'
};

export default function index() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="About Me" />
            <ResumeArea />
            <SkillArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
