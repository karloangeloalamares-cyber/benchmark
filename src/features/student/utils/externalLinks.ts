import * as Linking from 'expo-linking';

export type SafeExternalLink = {
  isAvailable: boolean;
  url?: string;
};

export function getSafeExternalLink(url?: string): SafeExternalLink {
  if (!url) {
    return { isAvailable: false };
  }

  try {
    const parsedUrl = new URL(url);
    const isSafeProtocol = parsedUrl.protocol === 'https:' || parsedUrl.protocol === 'http:';

    return isSafeProtocol ? { isAvailable: true, url: parsedUrl.href } : { isAvailable: false };
  } catch {
    return { isAvailable: false };
  }
}

export async function openSafeExternalLink(url?: string): Promise<boolean> {
  const safeLink = getSafeExternalLink(url);

  if (!safeLink.url) {
    return false;
  }

  try {
    await Linking.openURL(safeLink.url);
    return true;
  } catch {
    return false;
  }
}
