import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";

function PostContent(props) {
  const { image, slug, title, content } = props.post;
  const imageUrl = `/images/posts/${slug}/${image}`;
  const handleRender = {
    // p: ({ node }) => {
    //   if (node.children[0].type === "paragraph") {
    //     const image = node.children[0];
    //     return (
    //       <div>
    //         <Image
    //           src={`/images/posts/${slug}/${image.url}`}
    //           alt={image.alt}
    //           width={600}
    //           height={300}
    //         />
    //       </div>
    //     );
    //   }
    // },
  };

  return (
    <article>
      <PostHeader title={title} image={imageUrl} />
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => (
            <Image
              src={`/images/posts/${slug}/${props.src}`}
              alt={props.alt}
              width={600}
              height={300}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
