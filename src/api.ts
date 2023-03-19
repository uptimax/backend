import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {gql} from 'graphql-tag';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    type Query{
        hello: String!
    }
`;

const resolvers = {
    Query:{
        hello: ()=> 'hello world',
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
 

  const startServer = async()=>{
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
    }
  startServer();