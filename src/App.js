import React, { Fragment } from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./hoc/PhotoCardWithQuery";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Fragment>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </Fragment>
      )}
    </>
  );
};
