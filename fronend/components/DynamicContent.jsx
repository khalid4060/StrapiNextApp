import styles from "./DynamicContent.module.css";

export default function DynamicContent({ title, author, content }) {
  return (
    <div className={styles.container}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {author && <p className={styles.author}>By {author}</p>}

      {content.map((block, index) => {
        switch (block.__component) {
          case "block.text-block":
            return (
              <p key={index} className={styles.textBlock}>
                {block.text || "No text provided"}
              </p>
            );
          case "block.image-block":
            return (
              <img
                key={index}
                className={styles.imageBlock}
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${block.image?.url}`}
                alt="Blog image"
              />
            );
          case "block.quote-block":
            return (
              <blockquote key={index} className={styles.quoteBlock}>
                {block.quote || "No quote"}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
