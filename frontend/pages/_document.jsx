import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_KEY;
    return (
      <Html>
        <Head>
          <link rel="icon" href="/하미.ico" />
          <meta property="og:title" content="기억:함(函)" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://https://k6e201.p.ssafy.io/"
          />
          <meta property="og:image" content="/assets/images/Day.png" />
          <meta
            property="og:description"
            content="우리들의 추억을 보관하세요!"
          />
          <script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&libraries=services&autoload=false`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
