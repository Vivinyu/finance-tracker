const { gql } = require('apollo-server-express');
const userSchema = require('./userSchema');

const typeDefs = gql`
  ${userSchema}
`;

module.exports = typeDefs;
