import axios from 'axios';
import { Character } from '../../generated/graphql';
import { CHARACTERS_URL } from '../../helpers/url';
import { mapToCharacter } from './mappers';

export const fetchCharacter = async (id: string): Promise<Character> => {
  const { data } = await axios.get(`${CHARACTERS_URL}/${id}`);
  return mapToCharacter(data);
};
