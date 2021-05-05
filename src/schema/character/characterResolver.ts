import axios from 'axios';
import { CHARACTERS_URL } from '../../helpers/url';

export interface Character {
  id: number;
  name: string;
  status: string;
  species?: string;
  type?: string;
  gender: string;
  image?: string;
  url?: string;
  created: string;
  location: Location;
  episode: Array<Episode>;
}

export const resolvers = {
  Query: {
    // root level query
    character: async (
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
