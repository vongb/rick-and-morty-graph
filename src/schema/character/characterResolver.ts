import axios from 'axios';
import { CHARACTERS_URL } from '../../helpers/url';
import { fetchCharacter } from './datasource';

export const resolvers = {
  Query: {
    // root level query
    character: async (
      // find docs on this on apollo
      _parent: Record<string, unknown>,
      { id }: { id: string },
      {}: any, // Context, headers, x-requestid, data-sources
    ) => {
      const character = await fetchCharacter(id);

      return character;
    },
    allCharacters: async (_parent: any, _args: any, {}: any) => {
      const { data } = await axios.get(`${CHARACTERS_URL}`);

      return data.results;
    },
  },
};
