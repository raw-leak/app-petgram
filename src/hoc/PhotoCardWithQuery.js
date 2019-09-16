import React from "react";
import { useGetCard } from "../hooks/useGetCard";
import { PhotoCard } from "../components/PhotoCard";

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data: { photo } = {} } = useGetCard(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return <PhotoCard key={photo.id} {...photo} />;
};
