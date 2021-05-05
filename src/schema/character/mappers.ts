import { Character } from '../../generated/graphql';

export const mapToCharacter = (data: any): Character => {
  const id = data.id ?? -1;
  const name = data.name ?? 'No Name Returned';
  const status = data.status ?? 'No Status Returned';
  const species = data.species ?? 'Unknown';
  const type = data.type ?? 'Type Unknown';
  const gender = data.gender ?? 'Gender unknown';
  const image = data.image ?? '';
  const url = data.url ?? '';
  const created = data.created ?? 'Created time unknown';
  const location = data.location ?? 'Location unknwon';
  const episode = data.episode ?? [];

  return {
    id,
    name,
    status,
    species,
    type,
    gender,
    image,
    url,
    created,
    location,
    episode,
  };
};
