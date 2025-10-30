import type {
  ContributionWeeks,
  ContributionDay,
  ContributionStreak,
} from './types';

export const GITHUB_USERNAME = 'andr3wV';

export const getBestDay = (weeks: ContributionWeeks) => {
  let bestDay: { day: string; count: number } = { day: '', count: 0 };

  weeks.forEach((week) => {
    week.contributionDays.forEach((day) => {
      if (day.contributionCount > bestDay.count) {
        bestDay = { day: day.date, count: day.contributionCount };
      }
    });
  });

  return bestDay;
};

export const getThisWeeksContributions = (weeks: ContributionWeeks) => {
  return (
    weeks[weeks.length - 1]?.contributionDays
      ?.map((item) => item.contributionCount)
      ?.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0,
      ) || 0
  );
};

export const getDaysFromContribution = (weeks: ContributionWeeks) => {
  return weeks.flatMap((week) => week.contributionDays).length;
};

export function getContributionStreak(
  contributionDays: ContributionDay[],
): ContributionStreak {
  let longestStreak = 0;
  let currentStreak = 0;
  let tempStreak = 0;
  let longestStreakStart: string | null = null;
  let longestStreakEnd: string | null = null;
  let currentStreakStart: string | null = null;

  let previousDate: Date | null = null;

  for (const { date, contributionCount } of contributionDays) {
    const currentDate = new Date(date);

    if (contributionCount > 0) {
      if (
        previousDate &&
        currentDate.getTime() - previousDate.getTime() === 86400000
      ) {
        tempStreak++;
      } else {
        tempStreak = 1;
        currentStreakStart = date;
      }

      if (tempStreak > longestStreak) {
        longestStreak = tempStreak;
        longestStreakStart = currentStreakStart;
        longestStreakEnd = date;
      }

      currentStreak = tempStreak;
    } else {
      tempStreak = 0;
      currentStreak = 0;
      currentStreakStart = null;
    }

    previousDate = currentDate;
  }

  return {
    longestStreak,
    currentStreak,
    longestStreakStart,
    longestStreakEnd,
    currentStreakStart,
  };
}
