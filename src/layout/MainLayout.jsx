import { useContext } from 'react';
import { useRouter } from 'next/router';
import Header from '@common/Header';
import Menu from '@common/Menu';
import Footer from '@common/Footer';
import MenuContext from '@context/MenuContext';
import { AnimatePresence } from 'framer-motion';
import pageMotionProps from '@utils/pageTransitionVars';
import { LazyMotion, domAnimation, m } from 'framer-motion';



export default function MainLayout({ children }) {
  const { toggle } = useContext(MenuContext);
  const router = useRouter();
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        <LazyMotion features={domAnimation} >
          <Header />
          { toggle && <Menu toggle={toggle} />}
          <m.main {...pageMotionProps} key={router.asPath}>{children}</m.main>
          <Footer />
        </LazyMotion>
      </AnimatePresence>
    </>
  );
}
