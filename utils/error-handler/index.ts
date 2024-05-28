export function processErrorResponse<T>(error: any, thunkname: string): T {
  console.log("error from request " + thunkname + " with error: ", error);

  if (error.response) {
    if (error.response.status === 409) {
      return {
        status: false,
        message: error.response.data.message,
        payload: null,
      } as T;
    }

    if (error.response.status === 400) {
      return {
        status: false,
        message: "Invalid request",
        payload: null,
      } as T;
    }
  }

  // TODO: remove
  console.log("Error: " + error.message);
  return {
    status: false,
    // message: "Something went wrong",
    message: error.message || "Default: Something went wrong",
    payload: null,
  } as T;
}

export const otpMessageMapping = (status: number) => {
  switch (status) {
    case 401:
      return "Invalid OTP! Please try again!"
    case 404:
      return "User not registered! Please sign up first!";
    case 409:
      return "User already exists!";
    default:
      return "Something went wrong!";
  }
}
