import createState from 'react-copy-write'
import { getHosts } from '../api/connector';

const initialState = { dataLoaded: false, hosts: [] };

export const {
  Provider,
  Consumer,
  createSelector,
  mutate
} = createState(initialState);

export const loadData = async () => {
    const hosts = await getHosts();
    mutate((state) => ({...state, hosts, dataLoaded:true}))
}