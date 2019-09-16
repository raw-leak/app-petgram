import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_SINGLE_CARD = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const useGetCard = id => {
  const { loading, error, data } = useQuery(GET_SINGLE_CARD, {
    variables: { id }
  });
  return { loading, error, data };
};
