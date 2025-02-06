import type { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '@/components/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import BlogDetailsArea from '@/components/blog-details/BlogDetailsArea';

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
            <Breadcrumb title="Create a Landing Page That Performs Great" />
            <BlogDetailsArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
