import React, { Fragment, useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
const DEFAULT_URL =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_URL }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, element] = useNearScreen();

  const handleFavClick = () => setLiked(!liked);

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <FavButton liked={liked} onClick={handleFavClick} likes={likes} id={id}/>
        </Fragment>
      )}
    </Article>
  );
};
