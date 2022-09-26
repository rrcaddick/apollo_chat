import { useMutation } from "@apollo/client";
import { useState } from "react";

export const baseMutation = (mutation) => (onCompelteFn) => {
  const [serverErrors, setServerErrors] = useState({});

  const [mutate, { loading }] = useMutation(mutation, {
    onError: ({ graphQLErrors }) => {
      const { data: errors } = graphQLErrors[0];
      setServerErrors(errors);
    },
    onCompleted: (data) => {
      onCompelteFn();
    },
  });

  return {
    loading,
    serverErrors,
    mutate,
  };
};
