import type { ReactNode } from 'react';
import { createContext, useCallback, useMemo, useState } from 'react';

export interface SavedStoriesContextValue {
  savedStoryIds: string[];
  isSaved: (storyId: string) => boolean;
  saveStory: (storyId: string) => void;
  removeStory: (storyId: string) => void;
  toggleStory: (storyId: string) => void;
  clearSavedStories: () => void;
}

export const SavedStoriesContext = createContext<SavedStoriesContextValue | undefined>(undefined);

type SavedStoriesProviderProps = {
  children: ReactNode;
};

export function SavedStoriesProvider({ children }: SavedStoriesProviderProps) {
  const [savedStoryIds, setSavedStoryIds] = useState<string[]>([]);

  const isSaved = useCallback(
    (storyId: string) => savedStoryIds.includes(storyId),
    [savedStoryIds],
  );

  const saveStory = useCallback((storyId: string) => {
    setSavedStoryIds((currentIds) =>
      currentIds.includes(storyId) ? currentIds : [...currentIds, storyId],
    );
  }, []);

  const removeStory = useCallback((storyId: string) => {
    setSavedStoryIds((currentIds) => currentIds.filter((savedId) => savedId !== storyId));
  }, []);

  const toggleStory = useCallback((storyId: string) => {
    setSavedStoryIds((currentIds) =>
      currentIds.includes(storyId)
        ? currentIds.filter((savedId) => savedId !== storyId)
        : [...currentIds, storyId],
    );
  }, []);

  const clearSavedStories = useCallback(() => {
    setSavedStoryIds([]);
  }, []);

  const value = useMemo(
    () => ({
      savedStoryIds,
      isSaved,
      saveStory,
      removeStory,
      toggleStory,
      clearSavedStories,
    }),
    [clearSavedStories, isSaved, removeStory, saveStory, savedStoryIds, toggleStory],
  );

  return <SavedStoriesContext.Provider value={value}>{children}</SavedStoriesContext.Provider>;
}
