export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  href?: string;
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are places`,
    title: `I've Worked`,
    image: {
      src: '/static/images/aphex-apps.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'And some of the',
    title: `Technology I've Used `,
    image: {
      src: '/static/images/tech-collage.png',
      width: 1300,
      height: 1500,
    },
  },
  {
    description: `Feel free to check out`,
    title: 'My Resume',
    image: {
      src: '/static/images/resume.png',
      width: 1300,
      height: 1500,
    },
    href: 'https://drive.google.com/file/d/1KzwrLxIH8tzbU4kB_IvQhZT3h1z5scM5/view?usp=sharing',
  },
  {
    description: `I'm looking for work & projects!`,
    title: 'Reach Out!',
    image: {
      src: '/static/images/publication-app.webp',
      width: 600,
      height: 717,
    },
  },
];
