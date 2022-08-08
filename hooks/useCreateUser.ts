import { gql, useMutation } from "@apollo/client";

export interface CreateUserInput {
  createUserData: {
    email: string;
    password: string;
  };
}

interface User {
  _id: string;
  email: string;
}

const CREATE_USER = gql`
  mutation createUser($createUserData: CreateUserInput!) {
    createUser(createUserData: $createUserData) {
      _id
      email
    }
  }
`;

export const useCreateUser = () => {
  return useMutation<User, CreateUserInput>(CREATE_USER);
};
