import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Books } from './db-access.ts'
import { typeDefs } from '../../graphql/src/schema.ts'
import { Resolvers } from '../../graphql/src/resolvers.ts'

const resolvers: Resolvers = {
    Query: {
      books: async () => await Books.find(),
    },
    Mutation: {
        addBook: (obj, args, context) => {
            const newBook = new Books({title: args.input.title, author: args.input.author})
            newBook.save();
            return newBook;
        }
    }
};



const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
console.log(`🚀  Server ready at: ${url}`);
