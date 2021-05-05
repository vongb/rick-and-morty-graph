import { ApolloServer } from 'apollo-server-koa';
import { typeDefs } from './schema/schema';
import { resolvers } from './schema/character/characterResolver';

export default new ApolloServer({ typeDefs, resolvers });
