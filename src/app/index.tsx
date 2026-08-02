import type { Href } from 'expo-router';
import { Redirect } from 'expo-router';

export default function IndexRoute() {
  return <Redirect href={'/student/site' as Href} />;
}
