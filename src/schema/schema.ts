import { gql } from 'apollo-server-koa';

export const typeDefs = gql`
  type Query {
    allCharacters: [Character]
    character(id: String!): Character
  }

  type Character {
    id: Int!
    name: String!
    status: String!
    species: String
    type: String
    gender: String!
    image: String
    url: String
    created: String!
    location: Location
    episode: [Episode!]
  }

  type Location {
    id: Int!
    name: String!
    type: String!
    dimension: String
    residents: [String!]
    url: String
    created: String!
  }

  type Episode {
    id: Int!
    name: String!
    air_date: String!
    episode: String
    characters: [String!]
    url: String
    created: String!
  }
`;
