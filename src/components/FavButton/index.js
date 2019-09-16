import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./styles";
import { ToggleLikeMutation } from "../../hoc/ToggleLikeMutation";

export const FavButton = ({ liked, onClick, likes, id }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const { likeAnonymousPhoto } = ToggleLikeMutation();
  debugger;
  const handleLikePhoto = id => {
    likeAnonymousPhoto({ variables: { type: id } });
  };

  return (
    <Button onClick={() => handleLikePhoto(id)}>
      <Icon size="23px" /> {likes} likes!
    </Button>
  );
};
