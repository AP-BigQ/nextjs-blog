import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

import Date from '../components/date';
import { GetStaticProps } from 'next';

import Auth from "../components/auth"

export default function Home({ allPostsData }:{allPostsData: {
  date: string;
  title: string;
  id: string;
}[];}) {
  return (
    <Auth>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Friends is a 90's Comedy TV show, based in Manhattan, about 6 friends who go through just about every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama.]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          <br/>
          <Link href="/posts/first-post">← Back to posts</Link>
        </p>
      </section>

{/* Add this <section> tag below the existing <section> tag */}
<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.darkText}>
    <Date dateString={date} />
  </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
    </Auth>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}