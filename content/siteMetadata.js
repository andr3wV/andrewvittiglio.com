const siteMetadata = {
  title: 'Andrew Vittiglio',
  author: 'Andrew Vittiglio',
  headerTitle: 'andrewvittiglio',
  description: 'Software Developer',
  language: 'en-us',
  theme: 'light', // system, dark or light
  siteUrl: 'https://andrewvittiglio.com',
  siteRepo: 'https://github.com/andr3wV/andrewvittiglio.com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'andrewv433@gmail.com',
  github: 'https://github.com/andr3wV',
  twitter: 'https://twitter.com/avittig',
  linkedin: 'https://www.linkedin.com/in/andr3wV/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
