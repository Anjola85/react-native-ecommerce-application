import * as AWS from "aws-sdk";
// import Constants from "expo-constants";
// const { extra } = Constants.expoConfig;

AWS.config.update({
  accessKeyId: process.env.EXPO_PUBLIC_AWS_ACCESS_KEY || "dummy",
  secretAccessKey: process.env.EXPO_PUBLIC_AWS_SECRET_ACCESS_KEY || "dummy",
});

export default AWS;
