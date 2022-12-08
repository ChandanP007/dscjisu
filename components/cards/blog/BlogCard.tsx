import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogCard.module.css';

export interface IBlogCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  date: string;
  blogImage: string;
  authorImage: string;
  blogslug: string;
  readingTime: string;

}

const BlogCard: React.FC<IBlogCard> = ({ blogslug, tag, title, body, author, date, blogImage, authorImage, readingTime }) => {

  return (
    < >
      <Link href={`/blog/${blogslug}`} passHref >
        <div className="cursor-pointer text-start hover:scale-105 ease-linear duration-200">
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.card__header}>
                <Image
                  src={blogImage}
                  alt="card__image"
                  className={styles.card__image}
                  width="600"
                  height="400"
                />
              </div>
              <div className={styles.card__body}>
                <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
                <h4>{title}</h4>
                <p>{body.slice(0, 100)}...</p>
              </div>
              <div className={styles.card__footer}>
                <div className={styles.user}>
                  <Image
                    src={authorImage}
                    alt="user__image"
                    className={styles.user__image}
                    width="50"
                    height="50"
                  />
                  <div className={styles.user__info}>
                    <h5>{author}</h5>
                    <div className='flex gap-3'>
                      <small>{date.slice(0, 15)}</small>
                      <small>{readingTime}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
