import { useApolloClient } from "@apollo/client";
import { useState } from "react";

const useLogout = () => {
  // Stops fetch from being overidden to expose token
  const secureFetch = window.fetch;
  const client = useApolloClient();

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);

  const logout = async () => {
    try {
      setLoading(true);
      setServerError(null);
      setSuccess(false);

      const response = await secureFetch("/logout", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      if (!response.ok) {
        const { message } = await response.json();
        setServerError(message);
      } else {
        await client.clearStore();
        setSuccess(true);
      }
    } catch (err) {
      setServerError("Something went wrong. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading, serverError, success };
};

export { useLogout };
