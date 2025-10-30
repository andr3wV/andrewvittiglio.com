'use server';

// This is a server component action to get the github contributions

import { cache } from 'react';
import { graphql } from '@octokit/graphql';
import type { GithubResponse, ContributionCalendar } from './types';

const getGraphqlWithAuth = cache(() => {
  const github_token = process.env.GITHUB_TOKEN || '';

  if (!github_token) {
    throw new Error('GITHUB_TOKEN is required');
  }

  const graphqlWithAuth = graphql.defaults({
    headers: { authorization: `bearer ${github_token}` },
  });

  return graphqlWithAuth;
});

const query = `
  query ($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          colors
          totalContributions
          weeks {
            contributionDays {
              color
              date
              contributionCount
            }
            firstDay
          }
          months {
            firstDay
            name
            totalWeeks
          }
        }
      }
    }
  }
`;

export const getContributions = cache(
  async (username: string, year: number): Promise<ContributionCalendar> => {
    const today = new Date();
    const currentYear = today.getFullYear();

    let from: string;
    let to: string = today.toISOString();

    if (year === currentYear) {
      const pastYear = new Date();
      pastYear.setFullYear(today.getFullYear() - 1);
      from = pastYear.toISOString();
    } else {
      from = new Date(year, 0, 1).toISOString();
      to = new Date(year, 11, 31, 23, 59, 59).toISOString();
    }

    const graphqlWithAuth = getGraphqlWithAuth();
    const response = await graphqlWithAuth<GithubResponse>({
      query,
      username,
      from,
      to,
    });

    return response.user.contributionsCollection.contributionCalendar;
  },
);
