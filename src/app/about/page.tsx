import { Metadata } from 'next';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

import Breadcrumb from '@/components/common/Breadcrumb';
import ResumeArea from '@/components/about/ResumeArea';
import SkillArea from '@/components/about/SkillArea';

// TODO
export const metadata: Metadata = {
  title: 'About Christopher - Modern Portfolio made with Next JS',
  description: 'TODO'
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
