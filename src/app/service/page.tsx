import Breadcrumb from '@/components/common/Breadcrumb';
import ServiceArea from '@/components/home/ServiceArea';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';
import { Metadata } from 'next';
import React from 'react';

// TODO
export const metadata: Metadata = {
  title: "Christopher's Services",
  description: 'TODO'
};

export default function index() {
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
