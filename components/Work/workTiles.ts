export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  grid?: string[];
  resume?: string;
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are places`,
    title: `I've Worked`,
    image: {
      src: '/static/images/work2.jpg',
      width: 600,
      height: 770,
    },
    grid: [
      '/static/images/work1.png',
      '/static/images/work2.png',
      '/static/images/work3.png',
      '/static/images/work4.png',
      '/static/images/work5.jpeg',
      '/static/images/work6.jpeg',
      '/static/images/work7.jpg',
    ],
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
    resume: 'www.google.com',
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
