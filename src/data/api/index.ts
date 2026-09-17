const baseUrl = "https://railway.bookreview.techtrain.dev";
export const signIn: (
  email: string,
  password: string,
) => Promise<UserToken> = async (email: string, password: string) => {
  console.log(JSON.stringify({ email, password }));
  const res = await fetch(baseUrl + "/signin", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`HTTP error. code: ${res.status}`);
  }
  return await res.json();
};

export type UserToken = {
  token: string;
};

export const signUp: (
  name: string,
  email: string,
  password: string,
) => Promise<UserToken> = async (
  name: string,
  email: string,
  password: string,
) => {
  console.log(JSON.stringify({ name, email, password }));
  const response = await fetch(baseUrl + "/users", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error. code: ${response.status}`);
  }
  return await response.json();
};

export const getBooks: (offset: number) => Promise<BookData[]> = async (
  offset: number,
) => {
  const response = await fetch(
    baseUrl +
      "/public/books?" +
      new URLSearchParams({ offset: offset.toString() }),
    {
      method: "GET",
    },
  );
  if (!response.ok) {
    throw new Error(`HTTP error. code: ${response.status}`);
  }
  const result = await response.json();
  console.log(result);
  return result;
};

export type BookData = {
  id: "string";
  title: "string";
  url: "string";
  detail: "string";
  review: "string";
  reviewer: "string";
};
