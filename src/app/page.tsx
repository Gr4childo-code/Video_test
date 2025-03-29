import { DefaultWrapper } from '@/components/DefaultWrapper/DefaultWrapper';
import { IEvents } from '@/types/types';
import axios from 'axios';

export default async function Home() {
  const { data } = await axios.get<IEvents>('https://www.jsonkeeper.com/b/7T9N');
  return <DefaultWrapper data={data} />;
}
