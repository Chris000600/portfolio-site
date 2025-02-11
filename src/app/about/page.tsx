import { Metadata } from 'next';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';

import Breadcrumb from '@/components/common/Breadcrumb';
import ResumeArea from '@/components/about/ResumeArea';
import SkillArea from '@/components/about/SkillArea';

export const metadata: Metadata = {
  title: 'About Christopher – AI Analyst & Programmer in Jakarta',
  description:
    "Learn about Christopher's journey in AI optimization and business intelligence, and how he helps businesses run smarter with cutting-edge technology."
};

export default function AboutPage() {
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
