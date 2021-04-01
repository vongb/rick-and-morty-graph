import { ApolloServer } from 'apollo-server-koa';
import { typeDefs } from './schema/schema';
import { resolvers } from './resolvers/characterResolver';

export default new ApolloServer({ typeDefs, resolvers });
