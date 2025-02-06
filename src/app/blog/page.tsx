import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import Blog from '@/components/blog';

// TODO
export const metadata: Metadata = {
  title: '',
  description: ''
};

export default function index() {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
}
