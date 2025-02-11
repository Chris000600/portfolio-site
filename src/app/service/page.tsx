import Breadcrumb from '@/components/common/Breadcrumb';
import ServiceArea from '@/components/home/ServiceArea';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Christopher's Services – Web Solutions, Consulting, AI Optimization",
  description:
    'Explore services including dynamic web solutions, personalized consulting, AI-powered optimization, and smart systems design to elevate your business.'
};

export default function ServicePage() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Services" />
            <ServiceArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
