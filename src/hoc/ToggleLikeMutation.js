import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const ADD_LIKE = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const ToggleLikeMutation = () => {
  const [likeAnonymousPhoto] = useMutation(ADD_LIKE);

  return { likeAnonymousPhoto };
};
