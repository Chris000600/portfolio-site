'use client';
import { useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import VideoPopup from '@/modals/VideoPopup';

import PostboxArea from './PostboxArea';
import Breadcrumb from '../common/Breadcrumb';

export default function Blog() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title="Blogs"
              style_4={true}
            />
            <PostboxArea setIsVideoOpen={setIsVideoOpen} />
          </main>
          <FooterOne />
        </div>
      </div>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'qmGYnJgCW1o'}
      />
    </>
  );
}
