import type { Href } from 'expo-router';
import { Redirect } from 'expo-router';

export default function StudentIndexRoute() {
  return <Redirect href={'/student/site' as Href} />;
}
