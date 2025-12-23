// File: src/pages/my-page.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function MyPage() {
  return (
    <Layout title="SPK Tech Team Wiki" description="Documentation and tutorials for equipment and events">
      <main className={styles.main}>
        <h1>SPK Tech Team Wiki</h1>
        <p>Documentation and tutorials for equipment and events</p>
        <Link className={styles.getStartedButton} to="/docs/intro">
          Get Started
        </Link>
        <br/>
        <br/>
        <img src = "/img/homepage-gif.gif" alt="homepage gif" className={styles.heroImage}/>
      </main>
    </Layout>
  );
}
