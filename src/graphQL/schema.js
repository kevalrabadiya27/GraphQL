const { gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const typeDefs = gql`
  type Query {
    users: [User]
    quote: [Quotes]
    user(id: ID!): User
  }
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    quote: [Quotes] # merge with diffrent collection
  }
  type Quotes {
    name: String
    by: String
  }

  type Mutation{
    createUser(UserNew:userInput!):User
  }

  input userInput{
    firstName:String!,
    lastName:String!,
    email:String!
  }
`;

module.exports = typeDefs;

// query input for playground

// {
//   user(id:"23131"){
//     id
//     firstName
//     lastName
//     quote{
//       name
//       by
//     }
//   }
// }

// return which user,he is quote id same
// {
//   users{
//     id
//     firstName
//     lastName
//     quote{
//       by
//     }
//   },
//   }

// query variable
// query getUserById($userid:ID!){
//   user(id:$userid){
//     id
//     firstName
//     lastName
//   },
//   }

// mutation

// mutation {
// 	user:createUser(UserNew:{
//     firstName:"djnfj",lastName:"jddj",email:"jdjdaaa"
//   })
//   {
//     id
//     lastName
//     firstName
//   }
// }
