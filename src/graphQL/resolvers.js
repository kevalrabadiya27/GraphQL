const { users, quotes } = require("../../fakeDB");
require("./schema");
const { randomBytes } = require("crypto");
resolvers = {
  Query: {
    users: () => users,
    user: (_, args) => users.find((user) => user.id == args.id), //particular search by ID
    quote: () => quotes,
  },
  User: {
    quote: (ur) => quotes.filter((quote) => quote.by == ur.id),
  },
  Mutation: {
    createUser: (_, { UserNew }) => {
      const id = randomBytes(5).toString("hex");
      users.push({
        id,
        ...UserNew,
      });
      return users.find((user) => user.id == id);
    },
  },
};

module.exports = resolvers;
