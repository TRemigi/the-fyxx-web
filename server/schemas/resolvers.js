const { User, Artist, ArtPiece } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().select("-__v -password");
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).select("-__v -password");
    },
    userType: async (parent, { lastName }) => {
      return (await User.findOne({ lastName })).isSelected("-__v -password");
    },
    artists: async () => {
      return Artist.find().select("-__v");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    changeUserType: async (parent, { lastName, newType }) => {
      const updatedUser = await User.findOneAndUpdate(
        { lastName: lastName },
        newType,
        {
          new: true,
        }
      );
      return updatedUser;
    },
    addArtist: async (parent, args) => {
      const newArtist = await Artist.create(args);

      return newArtist;
    },
    addArtPiece: async (parent, args) => {
      const newArtPiece = await ArtPiece.create(args);

      return newArtPiece;
    },
  },
};

module.exports = resolvers;
