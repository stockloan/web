import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <Vercel className='text-5xl' />
            <h1 className='mt-4'>About</h1>
            <p className='mt-2 text-sm text-gray-800'>
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{' '}
            </p>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='/'>Gitple</UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
