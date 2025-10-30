export type GithubResponse = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        colors: string[];
        totalContributions: number;
        weeks: {
          contributionDays: {
            color: string;
            date: string;
            contributionCount: number;
          }[];
          firstDay: string;
        }[];
        months: { firstDay: string; name: string; totalWeeks: number }[];
      };
    };
  };
};

export type GithubUser = GithubResponse['user'];

export type ContributionCalendar =
  GithubUser['contributionsCollection']['contributionCalendar'];

export type ContributionMonths = ContributionCalendar['months'];

export type ContributionWeeks = ContributionCalendar['weeks'];

export type ContributionDay = ContributionWeeks[0]['contributionDays'][0];

export type ContributionStreak = {
  longestStreak: number;
  currentStreak: number;
  longestStreakStart: string | null;
  longestStreakEnd: string | null;
  currentStreakStart: string | null;
};
