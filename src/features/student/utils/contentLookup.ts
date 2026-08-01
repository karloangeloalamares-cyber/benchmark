import { studentInternships, studentStories } from '../data/sampleContent';
import type { StudentInternship, StudentStory } from '../types';

type RouteParam = string | string[] | undefined;

export function normalizeContentId(value: RouteParam): string | undefined {
  const rawValue = Array.isArray(value) ? value[0] : value;
  const normalized = rawValue?.trim();

  return normalized || undefined;
}

export function getStoryById(value: RouteParam): StudentStory | undefined {
  const id = normalizeContentId(value);

  return id ? studentStories.find((story) => story.id === id) : undefined;
}

export function getInternshipById(value: RouteParam): StudentInternship | undefined {
  const id = normalizeContentId(value);

  return id ? studentInternships.find((internship) => internship.id === id) : undefined;
}
