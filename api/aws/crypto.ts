/**
 * @see This file handles decryption and encryption of payload
 */

import Constants from "expo-constants";
// const { extra } = Constants.expoConfig;
import AWS from "../aws/awsConfig";
import { KMS } from "aws-sdk";
import { Buffer } from "buffer";
import { EncryptedRequestBody } from "../api-contracts/user/requests/encrypted.request";


const AWS_REGION = process.env.EXPO_PUBLIC_AWS_REGION || "ca-central-1";
const AWS_ACCESS_KEY_ID =
  process.env.EXPO_PUBLIC_AWS_ACCESS_KEY || "dummy";
const AWS_SECRET_ACCESS_KEY =
  process.env.EXPO_PUBLIC_AWS_SECRET_KEY || "dummy";
const AWS_SECRET_KEY = process.env.EXPO_PUBLIC_SECRET_KEY || "dummy";
const AWS_KMS_KEY_ID =
  process.env.EXPO_PUBLIC_AWS_KMS_KEY_ID || "dummy";

/**
 * Converts data to a buffer
 */
const toBuffer = (data: any): Buffer => {
  let buffer: Buffer;
  if (typeof data === "string") {
    buffer = Buffer.from(data);
  } else if (typeof data === "object" && data !== null) {
    const json = JSON.stringify(data);
    buffer = Buffer.from(json);
  } else {
    throw new Error("Invalid data type. Expected string or object.");
  }
  return buffer;
};

/**
 *
 * @param data
 * @returns
 */
export const encryptPayload = async (data: string | object) => {
  try {
    const buffer: Buffer = toBuffer(data);

    const kmsClient = new AWS.KMS({
      region: AWS_REGION,
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    });

    const params: KMS.Types.EncryptRequest = {
      KeyId: AWS_KMS_KEY_ID,
      Plaintext: buffer,
      EncryptionContext: {
        key: AWS_SECRET_KEY,
      },
    };

    const encryptedBuffer = await kmsClient.encrypt(params).promise();

    const blobData = encryptedBuffer.CiphertextBlob;

    if (!blobData)
      //TODO: find a better way to log error than throwing an error
      throw new Error(
        "Error encrypting payload in crypto.ts method encryptPayload"
      );

    const encryptedData = blobData.toString("base64");

    return encryptedData;
  } catch (error) {
    //TODO: log the error and crash the app
    throw new Error(
      `Error encrypting payload in crypto.ts method encryptPayload with error ${error}`
    );
  }
};

/**
 *
 * @param buffer - CipherTextBlob
 * @returns
 *
 * // TODO: issue here
 */
export const decryptPayload = async (data: string) => {
  try {
    const buffer: AWS.KMS.CiphertextType = Buffer.from(data, "base64");
    const kmsClient = new AWS.KMS({
      region: AWS_REGION,
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    });

    console.log("assigning paramas");
    const params = {
      KeyId: AWS_KMS_KEY_ID,
      CiphertextBlob: buffer,
      EncryptionContext: {
        key: AWS_SECRET_KEY,
      },
    };

    console.log("params: ", JSON.stringify(params, null, 2));

    const decryptedBuffer = await kmsClient.decrypt(params).promise();

    const clearText = decryptedBuffer.Plaintext!.toString();

    let decryptedData;

    if (clearText[0] === "{") {
      decryptedData = JSON.parse(clearText);
    } else {
      decryptedData = clearText;
    }

    return decryptedData;
  } catch (error) {
    throw new Error(
      "Error decrypting payload in crypto.ts method decryptPayload with error: " +
        error
    );
  }
};
