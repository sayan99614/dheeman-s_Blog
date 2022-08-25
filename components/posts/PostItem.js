import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./postitem.module.css";
function PostItem(props) {
  const { title, image, excert, date, slug } = props.post;
  console.log(title);
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <li className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={imagePath}
              height="200"
              width="300"
              layout="responsive"
              alt={title}
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{date}</time>
            <p>{excert}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
