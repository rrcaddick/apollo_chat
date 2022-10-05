import { useMutation } from "@apollo/client";
import { useState } from "react";

export const baseMutation = (mutation) => (onCompelteFn) => {
  const [serverErrors, setServerErrors] = useState({});

  const [mutate, { loading }] = useMutation(mutation, {
    onError: ({ graphQLErrors }) => {
      if (graphQLErrors.length > 0) {
        const { data: errors } = graphQLErrors[0];
        setServerErrors(errors);
      }
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

export const createMutationFields = (variables, availableFields) => {
  let mutationFields;
  if (variables) {
    mutationFields = Object.keys(variables)
      .filter((field) => availableFields.includes(field))
      .join("\n");
  } else {
    mutationFields = `
      ${availableFields.join("\n")}
    `;
  }
  return mutationFields;
};
