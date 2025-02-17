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

export default async function ContactPageById({ params }) {
  const { subject_id } = await params;

  let subject;

  switch (subject_id) {
    case '1':
      subject = 'Dynamic Web Solutions';
      break;
    case '2':
      subject = '1-on-1 Consulting';
      break;
    case '3':
      subject = 'AI-Powered Optimization';
      break;
    case '4':
      subject = 'Smart Systems Design';
      break;
    default:
      subject = '';
  }

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title={`Let's Work Together`}
              style_3={true}
            />
            <ContactArea subject={subject} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
