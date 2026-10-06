import type { Metadata } from 'next';
import Link from 'next/link';
import LetterWord from '@/components/letter-word';

export const metadata: Metadata = {
  title: 'mayooooo — resume',
  description: 'Mayuri Resume',
};

export default function ResumePage() {
  return (
    <main className='relative min-h-screen flex flex-col items-center px-6 py-24 sm:py-32 text-white'>
      <LetterWord word='RESUME' size='thanks' />

      <p className='mt-16 text-lg sm:text-2xl text-center max-w-md'>
        the serious stuff is on its way.
      </p>

      <Link
        href='/'
        className='mt-12 text-lg sm:text-2xl underline underline-offset-8 decoration-1 hover:decoration-2'
      >
        ← take me back to the fun
      </Link>
    </main>
  );
}
