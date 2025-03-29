import { DefaultWrapper } from '@/components/DefaultWrapper/DefaultWrapper';
import { Events } from '@/types/types';
import axios from 'axios';

export default async function Home() {
  const { data } = await axios.get<Events>('https://www.jsonkeeper.com/b/7T9N');
  return <DefaultWrapper data={data} />;
}
