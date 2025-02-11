import Breadcrumb from '@/components/common/Breadcrumb';
import ContactArea from '@/components/home/ContactArea';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Wrapper from '@/layouts/Wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Christopher – Let's Collaborate",
  description:
    'Get in touch with Christopher for inquiries about services, collaborations, or any questions you may have.'
};

export default function ContactPage() {
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
