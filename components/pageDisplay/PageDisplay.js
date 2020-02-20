import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import styles from './PageDisplay.module.css';

const PageHeader = () => (

    <header className={styles.headerBox}>

        <h1 className={styles.title}>devCards</h1>

        <nav className={styles.navBox}>

            <div className={`${styles.linksBox} ${styles.homeBox}`}>
                <Link href='/'>
                    <a className={styles.links} >HOME</a>
                </Link>
            </div>

            <div className={`${styles.linksBox} ${styles.aboutBox}`}>
                <Link href='/about'>
                    <a className={styles.links} >ABOUT</a>
                </Link>
            </div>

        </nav>
        
    </header>
)

const PageDisplay = (props) => (

    <>
        <Head>

            <title>devCards</title>
            <link href="https://fonts.googleapis.com/css?family=Montserrat+Subrayada&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
        
        </Head>
        
        <div className={styles.wrapper}>

            <PageHeader />
            
            <div className={styles.pageContent}>
                {props.children}
            </div>
        
        </div>
    </>
)

export default PageDisplay;