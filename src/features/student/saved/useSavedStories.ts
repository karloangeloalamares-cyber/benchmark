import { useContext } from 'react';

import { SavedStoriesContext } from './SavedStoriesProvider';

export function useSavedStories() {
  const context = useContext(SavedStoriesContext);

  if (!context) {
    throw new Error('useSavedStories must be used inside SavedStoriesProvider');
  }

  return context;
}
