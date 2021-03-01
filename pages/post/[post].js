import React from 'react'
import Styles from '../../styles/post.module.scss'
import Publication from '../../components/publication/publication'
import Head from 'next/head'

const Post = () => {
    return (
        <div className={Styles.container}>
            <Head>
                <title>unha</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="social media websites where people can talk about certain subjects that happen in daily life"></meta>
                <meta name="keywords" content="speak, talk, subjict"></meta>
            </Head>
            <div className={Styles.pubContainer}>
            <Publication index={1} text={"gezg"}></Publication>
            </div>
        </div>
    )
}

export default Post
