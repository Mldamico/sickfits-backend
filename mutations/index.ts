import { graphQLSchemaExtension } from '@keystone-next/keystone/schema';
import addToCart from './addToCart';
import checkout from './checkout';
import mercadoPago from './mercadoPago';

const graphql = String.raw;
export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      addToCart(productId: ID): CartItem
      checkout(amount: Int!, id: String!): Order
      mercadoPago: String
    }
  `,
  resolvers: {
    Mutation: {
      addToCart,
      checkout,
      mercadoPago,
    },
  },
});
