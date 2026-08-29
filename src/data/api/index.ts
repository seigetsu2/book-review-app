const baseUrl = "https://railway.bookreview.techtrain.dev";
export const signIn = (email: string, password: string) => {
  console.log(JSON.stringify({ email, password }));
  return fetch(baseUrl + "/signin", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const signUp = (name: string, email: string, password: string) => {
  console.log(JSON.stringify({ name, email, password }));
  return fetch(baseUrl + "/users", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
