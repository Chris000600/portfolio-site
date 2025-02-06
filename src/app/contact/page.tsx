import Breadcrumb from '@/components/common/Breadcrumb';
import ContactArea from '@/components/home/ContactArea';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';
import { Metadata } from 'next';

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
              title="Say Hello"
              style_3={true}
            />
            <ContactArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
