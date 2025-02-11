import type { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';

import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeroArea from '@/components/home/HeroArea';
import BrandArea from '@/components/home/BrandArea';
import AboutArea from '@/components/home/AboutArea';
import ServiceArea from '@/components/home/ServiceArea';
import PortfolioArea from '@/components/home/PortfolioArea';
import TestimonoalArea from '@/components/home/TestimonoalArea';
import BlogArea from '@/components/home/BlogArea';
import ContactArea from '@/components/home/ContactArea';

export const metadata: Metadata = {
  title: "Christopher's Portfolio – Digital Transformation Expert",
  description:
    "Welcome to Christopher's portfolio. Discover how I leverage AI and data to digitalize businesses, enhancing efficiency and performance."
};

export default function Home() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <BrandArea />
            <AboutArea />
            <ServiceArea />
            <PortfolioArea />
            <TestimonoalArea />
            {/* <BlogArea /> */}
            <ContactArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
