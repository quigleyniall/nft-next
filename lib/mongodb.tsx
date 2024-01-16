import getConfig from "next/config";
import mongoose from "mongoose";

const { serverRuntimeConfig } = getConfig();
const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI || serverRuntimeConfig.connectionString
);
mongoose.Promise = global.Promise;

export const db = {
  User: userModel(),
  Suggestions: suggestionModel(),
  Polls: pollModel(),
  Rewards: rewardsModel()
};

// mongoose models with schema definitions

function suggestionModel() {
  const schema = new Schema({
    idea: { type: String, required: true },
  });

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.Suggestions || mongoose.model("Suggestions", schema);
}

function rewardsModel() {
  const schema = new Schema({
    title: { type: String, required: true }, 
    desc: { type: String, required: true }, 
    type: { type: String, required: true }, 
    numAvail: { type: String, required: true }, 
    points: { type: String, required: true }, 
    date: { type: Date, required: false }, 
    image: {
      data: Buffer,
      contentType: String
  }
  });

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.Rewards || mongoose.model("Rewards", schema);
}

function pollModel() {
  const schema = new Schema({
    question: { type: String, required: true },
    options: [{
        name: {type: String},
        value: {type: String}
    }],
  });

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.Poll || mongoose.model("Poll", schema);
}

function userModel() {
  const schema = new Schema(
    {
      username: { type: String, unique: true, required: true },
      hash: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    {
      // add createdAt and updatedAt timestamps
      timestamps: true,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.User || mongoose.model("User", schema);
}
