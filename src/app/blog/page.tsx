import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '@/components/common/Breadcrumb';
import PostboxArea from '@/components/blog/PostboxArea';
import FooterOne from '@/layouts/footers/FooterOne';

export const metadata: Metadata = {
  title: "Tech & AI Insights – Christopher's Blog",
  description:
    "Stay updated with Christopher's analyses on the latest advancements in technology and artificial intelligence, covering breakthroughs, trends, and their implications."
};

export default function BlogPage() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title="Blogs"
              style_4={true}
            />
            <PostboxArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
