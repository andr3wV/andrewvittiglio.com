import classNames from 'classnames';
import Link from 'next/link';
import { FlickeringGrid } from './components/flickering-grid';
import { AtSignIcon } from './components/layouts/icons/at-sign-icon';
import { GithubIcon } from './components/layouts/icons/github-icon';
import { LinkedinIcon } from './components/layouts/icons/linkedin-icon';
import { XIcon } from './components/layouts/icons/x-icon';
import ThemeSwitch from './components/layouts/theme-switch/theme-switch';
import { merryWeather } from './fonts';

export default function Home() {
  return (
    <FlickeringGrid>
      <div className="absolute top-4 right-4 z-10">
        <ThemeSwitch />
      </div>
      <div
        className={classNames(
          'relative min-h-svh flex items-center',
          merryWeather.className,
        )}
      >
        <div className="max-w-5xl flex flex-col space-y-4 px-8 md:px-24 text-shadow-lg lg:ml-14">
          <h1 className="font-serif text-4xl font-bold md:mr-4 md:text-6xl">
            <span className="font-bold">Andrew Vittiglio</span>
          </h1>
          <section className="relative z-10">
            <p className="text-base text-justify font-semibold">
              My goal is to develop scalable and robust software to connect
              people and help people. I&apos;m most experienced in building
              financial infrastructure, but I also deeply interested in
              artificial intelligence, quantitative trading, and automation.
              <br />
              <br />I graduated university in May 2025 with degrees in Computer
              Science and Economics. While in college, I co-founded{' '}
              <Link
                href="https://cr3markets.com"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                CR3 Markets
              </Link>{' '}
              a public marketplace for fractionalized commercial real estate.
              Since then, I&apos;ve helped a number of pre-revenue startups
              design their system architecture, prototype MVPs, and streamline
              deployments. In my free time, I play chess, workout, travel, and
              watch Boston sports! Feel free to reach out if you want to talk
              tech!
            </p>
          </section>
          <section className="relative z-10 flex space-x-4 items-center text-sm">
            <div>
              <p className="font-semibold">Connect with me: </p>
              <div className="flex -ml-2">
                <Link
                  href="https://www.linkedin.com/in/andr3wV/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <LinkedinIcon className="h-9 w-9" />
                </Link>
                <Link
                  href="https://github.com/andr3wV"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <GithubIcon className="h-9 w-9" />
                </Link>
                <Link
                  href="https://x.com/avittig"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <XIcon className="h-9 w-9" />
                </Link>
                <Link
                  href="mailto:andrewv433@gmail.com"
                  aria-label="email"
                  rel="noreferrer"
                >
                  <AtSignIcon className="h-9 w-9" />
                </Link>
              </div>
            </div>
            <div className="h-14 border-l border-gray-300" />
            <div className="flex flex-wrap space-x-3 space-y-1">
              <Link href="/projects" className="font-semibold">
                /projects
              </Link>
              <Link href="/stats" className="font-semibold">
                /stats
              </Link>
              <Link href="/thoughts" className="font-semibold">
                /thoughts
              </Link>
            </div>
          </section>
        </div>
      </div>
    </FlickeringGrid>
  );
}
