// import React from 'react';
import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
//import StellarWorker from '../lib/stellar.worker';

//import PingPongWorker from '../lib/ping-pong.worker';
import PingPongWorker from 'worker-loader?name=static/[hash].worker.js!../lib/ping-pong.worker'
let worker: PingPongWorker

const Home = () => {
  const [msg, setMessage] = useState('');

  // const onMessage = (event) => {
  //   console.log("onMessage()");
  //   setMessage(event.data);
  // };

  useEffect(() => {
    worker = new PingPongWorker();
    //worker.addEventListener('message', onMessage);
    worker.onmessage = onWorkerMessage // workerから帰ってくる処理結果をひろうリスナーを登録
    return () => {
      worker.terminate();
    };
  }, []);

  const onWorkerMessage = (event: { data: string }) => {
    console.log('Workerから結果が帰ってきた！', event.data)
    setMessage(event.data);
  }

  const exec = () => {
    worker.postMessage(4) // イベント経由でworkerに処理を依頼
  }

  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <img src="/images/logo.png" />
        <h1>WebWorkerテスト</h1>
        <button onClick={exec}>WebWorker呼び出し</button>
        <h2>Message from Worker: {msg}</h2>
      </div>
    </React.Fragment>
  );
};

export default Home;
