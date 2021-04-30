import axios from 'axios';
// import { Character } from '../types/types';

export const resolvers = {
  Query: {
    // root level query
    character: async (
      // qweqw
      // find docs on this on apollo
      _parent: Record<string, unknown>,
      { id }: { id: string },
      {}: any, // Context, headers, x-requestid, data-sources
    ) => {
      // future
      // dataSource.rickAndMortyAPI.getCharacter(args.id);

      // axios, fetch, node-fetch
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`,
      );
      // eslint-disable-next-line no-console
      console.log(data);

      return data;
    },
  },
};
