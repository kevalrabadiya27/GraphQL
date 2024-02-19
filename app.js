const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/graphQL/schema");
const resolvers = require("./src/graphQL/resolvers");
const dbConn = require('./src/config/dbconn');
const express = require("express");
const app = express();
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const apoloserver = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  //  direct open playground on browser
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

dbConn();
apoloserver.listen(3000, () => {
  console.log("server is running...");
});
