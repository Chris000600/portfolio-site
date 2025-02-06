import ScrollToTop from '@/components/common/ScrollToTop';
import ClientSideEffects from '@/components/common/ClientSideEffects';

export default function Wrapper({ children }: any) {
  return (
    <>
      <ClientSideEffects />
      <ScrollToTop />
      {children}
    </>
  );
}
