export const resolvers = {
  Query: {
    character: () => mockCharacter,
  },
};

const mockLocation = {
  id: 1,
  name: 'Egypt',
  type: 'what',
  dimension: '2d',
  residents: ['rick', 'morty'],
  url: 'String',
  created: '2000BC',
};

const mockEpisode = {
  id: 4,
  name: 'episodde 12425',
  air_date: 'next week',
  episode: 'e_204',
  characters: ['rick'],
  url: 'episode_12425',
  created: 'today',
};

const mockCharacter = {
  id: 2,
  name: 'rick',
  status: 'dead',
  species: 'human',
  type: 'what',
  gender: 'dude',
  image: 'String',
  url: 'rick',
  created: 'yesterday',
  location: mockLocation,
  episode: [mockEpisode!],
};
