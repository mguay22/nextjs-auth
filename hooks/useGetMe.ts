import { gql, useQuery } from "@apollo/client";

const GET_ME = gql`
  query Me {
    me {
      _id
      email
    }
  }
`;

const useGetMe = () => {
  return useQuery(GET_ME, { errorPolicy: "all" });
};

export default useGetMe;
