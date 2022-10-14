import { useState } from "react";
import { client } from "../graphql/client";

const useLogin = () => {
  // Stops fetch from being overidden to expose token
  const secureFetch = window.fetch;

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);

  const login = async (userData) => {
    try {
      setLoading(true);
      setServerError(null);
      setSuccess(false);

      const response = await secureFetch("/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const { message } = await response.json();
        setServerError(message);
      } else {
        const { token } = await response.json();

        client.setToken(token);
        setSuccess(true);
      }
    } catch (err) {
      setServerError("Something went wrong. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, serverError, success };
};

export { useLogin };
