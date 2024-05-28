import AsyncStorage from "@react-native-async-storage/async-storage";
import { SENSITIVE_KEYS, TEMP_KEYS, USER_MOBILE } from "./cacheKeys";
import * as SecureStore from "expo-secure-store";

interface CacheObject {
  key: string;
  value: any;
}

function createKey(input: string): string {
  if (input.charAt(0) !== "_") {
    input = "_" + input;
  }
  return input;
}

export async function addToCache(obj: CacheObject) {
  try {
    const { key, value } = obj;
    const newKey = createKey(key);

    if (key in SENSITIVE_KEYS) {
      await SecureStore.setItemAsync(newKey, JSON.stringify(value));
    } else {
      await AsyncStorage.setItem(newKey, JSON.stringify(value));
    }
  } catch (e) {
    console.log("Error adding Item to Cache: ", e);
  }
}

export async function getItemFromCache(
  key: string,
  keyNotFoundIsOkay?: boolean
): Promise<Object> {
  try {
    if (typeof key !== "string" || key.trim() === "")
      throw new Error("Invalid key");

    let value: string | null = null;

    if (key in SENSITIVE_KEYS) {
      value = await SecureStore.getItemAsync(createKey(key));
    } else {
      value = await AsyncStorage.getItem(createKey(key));
    }

    if (value === null || value === undefined) {
      if (keyNotFoundIsOkay === undefined)
        console.log(
          "Key does not exist in cache or has value of null or undefined",
          key
        );

      return "";
    } else {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log("Error getting key from cache:", e);
  }
  return "";
}

export async function removeItemFromCache(key: string) {
  try {
    if (key in SENSITIVE_KEYS) {
      await SecureStore.deleteItemAsync(createKey(key));
    } else await AsyncStorage.removeItem(createKey(key));
  } catch (e) {
    console.log("Error removing Item from Cache: ", e);
  }
}

export async function updateCache(obj: CacheObject) {
  try {
    const { key, value } = obj;
    await addToCache({ key, value });
  } catch (e) {
    console.log("Error updating Item in Cache", e);
  }
}

// export async function getAllKeys() {
//   try {
//     return await AsyncStorage.getAllKeys();
//   } catch (e) {
//     console.log("Error getting all keys from Cache: ", e);
//   }
// }

// export async function removeMultipleKeys(keys: string[]) {
//   try {
//     return await AsyncStorage.multiRemove(keys);
//   } catch (e) {
//     console.log("Error removing keys from Cache", e);
//   }
// }

/**
 * This function clears all the keys including permanent keys
 * @returns Promise<void>
 */
export async function clearCache() {
  try {
    const keys = await AsyncStorage.getAllKeys();
    let sensitiveKeys: string[] = [];

    Object.keys(SENSITIVE_KEYS).forEach((key) => {
      sensitiveKeys.push(key);
    });

    await Promise.all(
      sensitiveKeys.map((key) => SecureStore.deleteItemAsync(createKey(key)))
    );

    console.log("Cache cleared successfully");

    if (keys.length <= 0) return;

    console.log("Clearing async storage");

    await AsyncStorage.clear();
  } catch (error) {
    console.error("Error clearing cache:", error);
  }
}

/**
 * This function clears only the temporary keys
 * @returns Promise<void>
 */
export async function clearTempCache() {
  try {
    let keys: string[] = [];
    Object.keys(TEMP_KEYS).forEach((key) => {
      keys.push(key);
    });

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const keyExists = await doesKeyExist(key);
      if (keyExists) {
        removeItemFromCache(key);
      }
    }

    console.log("Temp Keys cleared in Cache successfully");
  } catch (error) {
    console.error("Error clearing cache:", error);
  }
}

export async function doesKeyExist(key: string) {
  try {
    let value: string | null = null;
    if (key in SENSITIVE_KEYS) {
      value = await SecureStore.getItemAsync(createKey(key));
    } else value = await AsyncStorage.getItem(createKey(key));
    return value !== null;
  } catch (error) {
    console.log("Error checking key in cache:", error);
  }
}
