import Breadcrumb from '@/components/common/Breadcrumb';
import PortfolioArea from '@/components/home/PortfolioArea';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';
import { Metadata } from 'next';
import React from 'react';

// TODO
export const metadata: Metadata = {
  title: "Christopher's Projects",
  description: ''
};

export default function index() {
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
            <PortfolioArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
