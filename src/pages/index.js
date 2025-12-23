// File: src/pages/my-page.js
import React from 'react';
import Layout from '@theme/Layout';

export default function MyPage() {
  return (
    <Layout title="SPK Tech Team Wiki" description="Documentation and tutorials for equipment and events">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>SPK Tech Team Wiki</h1>
        <p>Documentation and tutorials for equipment and events</p>
        <button
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer',
          }}
          onClick={() => {window.location.href = '/docs/intro';}}
        >
          Get Started
        </button>
        <br/>
        <br/>
        <img src = "/img/homepage-gif.gif" alt="homepage gif" style={{ marginTop: '2rem', width: '200px' }}/>
      </main>
    </Layout>
  );
}
