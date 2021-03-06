import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {ethers} from 'ethers'
import {useEffect,useState} from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
  nftaddress,nftmarketaddress
}from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
          
        <title>NFT Metaverse Market</title>
        <meta name="description" content="generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="flex justify-center">
      <div className="px-4" style={{maxWidth: '1600px'}}>
        <div className="grid grid-cols-1 dm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            nfts.map((nft,i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img src={nft.image} />
                <div className="p-4">
                  <p style={{ height: '64px'}} className="text-2xl font-semibold">{nft.name}</p>
                  <div style={{height: '70px',overflow:'hidden'}}>
                    <p className="text-gray-400">{nft.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-black">
                  <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                  onClick={() => buyNFT(nft)}>Buy</button>
              </div>
              </div>
            )) 
          }
        </div>
      </div> 
    </div>
  )




      <main className={styles.main}>
          <span className={styles.logo}>
            <Image src="/ineuron-logo.png" alt="" width={100} height={30} />
          </span>
        <div class="header">
        
        </div>
        <h1 className={styles.title}>
         
          Welcome to the NFT Metaverse!
        </h1>

        <p className={styles.description}>
          A Decentralised Application built on the ethereum blockchain to trade Non Fungible Tokens!
          
        </p>


        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

    </div>
  )
}
