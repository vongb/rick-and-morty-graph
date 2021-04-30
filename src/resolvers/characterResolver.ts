import axios from 'axios';
import { CHARACTERS_URL } from '../helpers/url';

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

      const { data } = await axios.get(`${CHARACTERS_URL}/${id}`);
      // eslint-disable-next-line no-console
      console.log(data);

      return data;
    },
    allCharacters: async (_parent: any, _args: any, {}: any) => {
      const { data } = await axios.get(`${CHARACTERS_URL}`);

      return data.results;
    },
  },
};
