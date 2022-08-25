import Image from "next/image";
import React from "react";
import styes from "./postheader.module.css";
function PostHeader(props) {
  const { title, image } = props;
  return (
    <header className={styes.header}>
      <h1>{title}</h1>
      <Image src={image} height="150" width="200" alt={title} />
    </header>
  );
}

export default PostHeader;
