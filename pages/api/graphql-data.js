import { ApolloServer, gql } from "apollo-server-micro";
const DogAPI = require("./datasources/dog");

const typeDefs = gql`
  type Image {
    urls: [String]
  }

  type Dog {
    breed: ID
    images: Image
    subBreeds: [String]
  }

  type Breed {
    name: String
    area: [String]
  }

  type ImagesByBreedAndSubBreed {
    message: [String]
  }

  type Query {
    breeds: [Breed]
    dog(breed: String!): Dog
    imagesByBreedAndSubBreed(
      breed: String!
      subBreed: String!
    ): ImagesByBreedAndSubBreed
  }
`;

const resolvers = {
  Query: {
    breeds: async (_, __, { dataSources }) => dataSources.dogAPI.getAllBreeds(),
    dog: async (_, { breed }, { dataSources }) => {
      return dataSources.dogAPI.getDog({ breed });
    },
    imagesByBreedAndSubBreed: async (
      _,
      { breed, subBreed },
      { dataSources }
    ) => {
      return dataSources.dogAPI.getImagesByBreedAndSubBreed({
        breed,
        subBreed
      });
    }
  },
  Dog: {
    images: ({ breed }, _, { dataSources }) => {
      return dataSources.dogAPI.getImagesByBreed({ breed });
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      dogAPI: new DogAPI()
    };
  }
});

// const startServer = server.start();
// await startServer;

const handler = server.createHandler({ path: "/api/graphql-data" });

export const config = {
  api: {
    bodyParser: false
  }
};

export default handler;
