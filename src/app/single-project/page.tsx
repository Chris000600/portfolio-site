import { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';
import SingleProjectArea from '@/components/single-project/SingleProjectArea';

// TODO
export const metadata: Metadata = {
  title: '',
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
              title="Branch with Flowers"
              style_3={true}
            />
            <SingleProjectArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
