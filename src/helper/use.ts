interface Response<T> {
  status: "success" | "pending" | "error";
  data: T | null;
}

/**
 * A promise tracker that will be updated
 * when promise resolves or rejects
 */
const response: Response<unknown> = {
  status: "pending",
  data: null,
};

/**
 * Adds first class support for reading the result of a JavaScript Promise using Suspense
 * @param promise
 * @link React RFC 229 https://github.com/reactjs/rfcs/pull/229
 * @returns
 */
export function use<T>(fn: () => Promise<T>) {
  /**
   * suspender is the promise we will throw
   * so react can re-render when it is fulfilled
   */
  const suspender = fn().then(
    res => {
      response.status = "success";
      response.data = res;
    },
    error => {
      response.status = "error";
      response.data = error;
    },
  );

  switch (response.status) {
    case "pending":
      throw suspender;
    case "error":
      throw response.data as T;
    default:
      return response.data as T;
  }
}
