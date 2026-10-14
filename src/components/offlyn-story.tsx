// The offlyn.love story, dressed as offlyn.love itself: white page, Raleway,
// the brand pink/blue/green, the dot-grid "friend graph" hero, the floating
// match card with its hard pink shadow, and the pink "How it works" band.
// It covers the site's starry sky on purpose. Text lives in
// content/offlyn-story.ts.

import Image from 'next/image';
import Link from 'next/link';
import { Raleway } from 'next/font/google';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import {
  decisions,
  facts,
  flow,
  gtm,
  insight,
  metrics,
  myWork,
  next,
  principles,
  problem,
  research,
  summary,
  timeline,
} from '@/content/offlyn-story';

const raleway = Raleway({ subsets: ['latin'] });

// offlyn.love's design tokens (its app/globals.css).
const PINK = '#ff6b9f';
const BLUE = '#4d9eea';
const GREEN = '#37c45d';

const gutter = 'px-5 md:px-10 lg:px-20';

const Kicker = ({ children }: { children: React.ReactNode }) => (
  <p className='font-semibold text-[#ff6b9f] text-sm md:text-base'>{children}</p>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className='text-2xl md:text-4xl lg:text-5xl font-medium leading-tight'>{children}</h2>
);

export default function OfflynStory({ nextStory }: { nextStory: { slug: string; name: string } }) {
  return (
    <main className={`${raleway.className} relative min-h-screen bg-white text-[#252525] overflow-x-hidden`}>
      {/* Header: offlyn's own, with the way back instead of "Log in" */}
      <header className={`${gutter} py-2 md:py-5 flex items-center gap-3 sticky top-0 bg-white z-20 border-b border-gray-200`}>
        <a href='https://offlyn.love' target='_blank' rel='noopener noreferrer' className='flex items-center gap-3'>
          <Image src='/offlyn/logo.svg' width={55} height={44} alt='offlyn.love logo' className='h-7 w-10 md:h-11 md:w-14' />
          <span className='text-lg md:text-2xl font-semibold'>
            offlyn<span className='text-gray-400'>.love</span>
          </span>
        </a>
        <nav className='ml-auto flex items-center gap-2 md:gap-3'>
          <Link href='/resume' className='hidden sm:inline text-sm md:text-base text-gray-500 hover:text-gray-900 transition-colors'>
            resume
          </Link>
          <Link
            href='/'
            className='inline-flex items-center gap-1.5 font-semibold text-sm md:text-base px-4 py-2 rounded-lg border border-[#ff6b9f] text-[#ff6b9f] hover:bg-[#ff6b9f] hover:text-white transition-colors'
          >
            <ArrowLeft weight='bold' aria-hidden /> mayuri
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className={`relative ${gutter} py-16 lg:py-24 flex flex-col items-center overflow-hidden`}>
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0'
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,107,159,0.22) 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 25%, black 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 25%, black 75%)',
          }}
        />
        <p className='relative text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold'>Product story</p>
        <h1 className='relative text-center text-3xl md:text-5xl lg:text-7xl mt-4'>
          <span className='text-gray-400'>Fall in love with</span>
          <br />
          friends of friends
        </h1>
        <p className='relative text-[#ff6b9f] font-semibold text-center mt-3 lg:mt-5 lg:text-2xl'>how we built offlyn.love</p>
        <p className='relative mt-6 max-w-2xl text-center text-sm md:text-lg text-gray-600 leading-relaxed'>{summary}</p>

        <dl className='relative mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl'>
          {facts.map((f) => (
            <div key={f.label} className='rounded-2xl border border-gray-200 bg-white px-4 py-3 text-center'>
              <dt className='text-xs uppercase tracking-wider text-gray-400'>{f.label}</dt>
              <dd className='mt-1 text-sm md:text-base font-semibold'>{f.value}</dd>
            </div>
          ))}
        </dl>

        {/* The match card from offlyn's hero, hard pink shadow and all */}
        <div className='relative motion-safe:animate-[offlyn-float_3.5s_ease-in-out_infinite] bg-[#ff6b9f]/10 p-4 md:p-5 mt-32 lg:mt-48 rounded-3xl w-full max-w-md lg:max-w-2xl shadow-[10px_10px_0_0_rgba(255,107,159,0.35)]'>
          <div className='p-8 lg:p-10 bg-[#ff6b9f] rounded-xl flex items-center flex-col'>
            <Image
              src='/offlyn/match-only.webp'
              alt='offlyn app: a match card showing two profiles'
              width={410}
              height={315}
              className='w-56 lg:w-[410px] h-auto -mt-36 lg:-mt-56 mb-5 lg:mb-10'
            />
            <p className='text-center text-white font-bold text-3xl lg:text-5xl'>It&apos;s a Match!</p>
            <div className='flex items-center gap-3 mt-3'>
              <Image
                src='/offlyn/common-friend.webp'
                alt=''
                width={48}
                height={48}
                className='h-9 w-9 lg:h-12 lg:w-12 rounded-full border-4 border-white'
              />
              <p className='text-white font-semibold text-sm lg:text-xl'>You both know Komal</p>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className={`${gutter} py-14 lg:py-24 bg-gradient-to-br from-white to-[#ff6b9f]/5`}>
        <Kicker>The problem</Kicker>
        <div className='mt-3 grid lg:grid-cols-2 gap-8 lg:gap-16'>
          <div className='space-y-4'>
            <H2>{problem.heading}</H2>
            {problem.body.map((p) => (
              <p key={p} className='text-sm md:text-base text-gray-600 leading-relaxed'>
                {p}
              </p>
            ))}
          </div>
          <div>
            <ul className='grid grid-cols-2 gap-3 md:gap-4'>
              {problem.stats.map((s) => (
                <li key={s.value} className='rounded-2xl bg-white border border-gray-200 p-4 md:p-6'>
                  <p className='text-3xl md:text-5xl font-bold text-[#ff6b9f]'>{s.value}</p>
                  <p className='mt-2 text-xs md:text-sm text-gray-600'>{s.label}</p>
                </li>
              ))}
            </ul>
            <p className='mt-3 text-xs text-gray-400'>Source: {problem.source}</p>
          </div>
        </div>
      </section>

      {/* The insight: offlyn's "Belief" section */}
      <section className={`${gutter} pt-14 lg:pt-24 flex flex-col-reverse lg:flex-row gap-8 bg-[#4d9eea]/5 overflow-hidden`}>
        <div className='flex-1 space-y-4 pb-10 lg:pb-24'>
          <Kicker>The insight</Kicker>
          <H2>{insight.heading}</H2>
          {insight.body.map((p) => (
            <p key={p} className='text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl'>
              {p}
            </p>
          ))}
          <p className='text-[#ff6b9f] font-semibold max-w-2xl'>{insight.bet}</p>
        </div>
        <Image
          src='/offlyn/graph.webp'
          alt='Diagram: you reach a potential match through a mutual friend'
          width={534}
          height={432}
          className='object-contain self-end w-56 lg:w-[480px] h-auto lg:-mb-6'
        />
      </section>

      {/* What I did + principles: the pink "How it works" band */}
      <section className='p-3.5 md:p-5 lg:p-10 bg-[#ff6b9f]'>
        <div className='p-5 md:p-10 bg-white rounded-2xl'>
          <div className='md:text-center'>
            <h2 className='text-2xl md:text-5xl'>My part</h2>
            <p className='text-[#ff6b9f] font-semibold text-sm md:text-base'>co-founder, product &amp; strategy</p>
          </div>
          <ul className='mt-6 md:mt-10 flex flex-wrap md:justify-center gap-2 md:gap-3'>
            {myWork.map((w, i) => (
              <li
                key={w}
                className='rounded-full px-4 py-2 text-sm md:text-base font-semibold text-white'
                style={{ backgroundColor: [PINK, BLUE, GREEN][i % 3] }}
              >
                {w}
              </li>
            ))}
          </ul>
          <h3 className='mt-12 md:text-center text-xl md:text-3xl'>The rules that made the decisions for us</h3>
          <ol className='mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0'>
            {principles.map((p, i) => (
              <li key={p.title} className='rounded-2xl border border-gray-200 p-5'>
                <span
                  className='grid place-items-center size-10 rounded-full text-white font-bold'
                  style={{ backgroundColor: [BLUE, PINK, GREEN, PINK][i] }}
                >
                  0{i + 1}
                </span>
                <p className='mt-3 font-semibold md:text-lg'>{p.title}</p>
                <p className='mt-1 text-sm text-gray-600 leading-relaxed'>{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Key decisions */}
      <section className={`${gutter} py-14 lg:py-24`}>
        <Kicker>Key product decisions</Kicker>
        <H2>Each one traded something away on purpose</H2>
        <ul className='mt-8 grid md:grid-cols-2 gap-5 md:gap-6'>
          {decisions.map((d) => (
            <li key={d.title} className='rounded-2xl border border-gray-200 p-5 md:p-7 shadow-[6px_6px_0_0_rgba(255,107,159,0.25)]'>
              <p className='font-semibold md:text-lg leading-snug'>{d.title}</p>
              <p className='mt-3 text-sm text-gray-600 leading-relaxed'>
                <span className='font-semibold text-[#4d9eea]'>Why · </span>
                {d.why}
              </p>
              <p className='mt-2 text-sm text-gray-600 leading-relaxed'>
                <span className='font-semibold text-[#ff6b9f]'>Trade-off · </span>
                {d.tradeoff}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* The core flow */}
      <section className={`${gutter} py-14 lg:py-24 bg-[#4d9eea]/5`}>
        <Kicker>The core flow</Kicker>
        <H2>From download to “oh, we know the same person”</H2>
        <ol className='mt-8 grid md:grid-cols-5 gap-4 list-none p-0'>
          {flow.map((s, i) => (
            <li key={s.title} className='rounded-2xl bg-white border border-gray-200 p-5'>
              <span
                className='grid place-items-center size-10 rounded-full text-white font-bold'
                style={{ backgroundColor: i === flow.length - 1 ? GREEN : i === 3 ? PINK : BLUE }}
              >
                {i + 1}
              </span>
              <p className='mt-3 font-semibold'>{s.title}</p>
              <p className='mt-1 text-sm text-gray-600 leading-relaxed'>{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Go-to-market + metrics */}
      <section className={`${gutter} py-14 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16`}>
        <div>
          <Kicker>Go-to-market</Kicker>
          <H2>The growth loop is the product</H2>
          <ol className='mt-8 space-y-5 list-none p-0'>
            {gtm.map((g, i) => (
              <li key={g.title} className='flex gap-4'>
                <span className='shrink-0 grid place-items-center size-9 rounded-full bg-[#ff6b9f]/10 text-[#ff6b9f] font-bold'>{i + 1}</span>
                <div>
                  <p className='font-semibold'>{g.title}</p>
                  <p className='mt-1 text-sm text-gray-600 leading-relaxed'>{g.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <Kicker>Measuring success</Kicker>
          <H2>Most standard metrics are traps</H2>
          <div className='mt-8 rounded-2xl bg-[#ff6b9f] p-6 text-white shadow-[10px_10px_0_0_rgba(255,107,159,0.35)]'>
            <p className='text-xs uppercase tracking-wider opacity-80'>North star</p>
            <p className='mt-1 text-xl md:text-2xl font-bold'>{metrics.northStar}</p>
            <p className='mt-2 text-sm opacity-90 leading-relaxed'>{metrics.why}</p>
          </div>
          <ul className='mt-6 grid sm:grid-cols-2 gap-3'>
            {metrics.others.map((m) => (
              <li key={m.title} className='rounded-2xl border border-gray-200 p-4'>
                <p className='font-semibold text-sm'>{m.title}</p>
                <p className='mt-1 text-xs md:text-sm text-gray-600 leading-relaxed'>{m.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it went */}
      <section className={`${gutter} py-14 lg:py-24 bg-gradient-to-br from-white to-[#ff6b9f]/5`}>
        <Kicker>How it went</Kicker>
        <H2>From a one-line thesis to the app stores</H2>
        <ol className='mt-8 relative border-l-2 border-[#ff6b9f]/30 ml-2 space-y-8 list-none p-0'>
          {timeline.map((t) => (
            <li key={t.when} className='pl-6 relative'>
              <span aria-hidden className='absolute -left-[9px] top-1 size-4 rounded-full bg-[#ff6b9f] ring-4 ring-white' />
              <p className='text-sm font-semibold text-[#ff6b9f]'>{t.when}</p>
              <p className='mt-1 text-sm md:text-base text-gray-700 max-w-2xl'>{t.what}</p>
            </li>
          ))}
        </ol>
        <div className='mt-12 grid lg:grid-cols-2 gap-5'>
          <div className='rounded-2xl border border-gray-200 bg-white p-6'>
            <p className='font-semibold md:text-lg'>What users taught me</p>
            <p className='mt-2 text-sm text-gray-600 leading-relaxed'>{research}</p>
          </div>
          <div className='rounded-2xl border border-gray-200 bg-white p-6'>
            <p className='font-semibold md:text-lg'>Where it goes next</p>
            <ul className='mt-2 space-y-1.5 text-sm text-gray-600 leading-relaxed list-disc pl-5 marker:text-[#ff6b9f]'>
              {next.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing: offlyn's "Go offlyn" section */}
      <section className={`${gutter} py-14 lg:py-24 flex flex-col lg:flex-row gap-10`}>
        <div className='flex-1 space-y-3'>
          <h2 className='text-2xl lg:text-6xl font-medium'>Go offlyn</h2>
          <p className='text-[#ff6b9f] font-semibold'>seriously, love</p>
          <p className='text-gray-600 leading-relaxed max-w-xl'>
            We&apos;re not here to steal your time, we&apos;re here to make it matter.
          </p>
        </div>
        <div className='flex-1 lg:max-w-md rounded-2xl border border-gray-200 bg-white p-6 md:p-10 flex flex-col items-center gap-4 text-center'>
          <p className='text-2xl font-bold'>See it for yourself</p>
          <a
            href='https://offlyn.love'
            target='_blank'
            rel='noopener noreferrer'
            className='w-full max-w-xs inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#ff6b9f] text-white font-semibold text-lg hover:bg-[#ff6b9f]/90 transition-colors shadow-[0_4px_16px_rgba(255,107,159,0.35)]'
          >
            offlyn.love <ArrowUpRight weight='bold' aria-hidden />
          </a>
          <Link href={`/work/${nextStory.slug}`} className='inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors'>
            next story: {nextStory.name} <ArrowRight weight='bold' aria-hidden />
          </Link>
        </div>
      </section>

      <footer className={`${gutter} py-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500`}>
        <p>
          Built in an apartment in <span className='font-medium text-[#ff6b9f]'>Bengaluru</span>
        </p>
        <nav className='flex gap-5'>
          <Link href='/resume' className='hover:text-gray-900 transition-colors'>
            resume
          </Link>
          <Link href='/' className='hover:text-gray-900 transition-colors'>
            home
          </Link>
        </nav>
      </footer>
    </main>
  );
}
