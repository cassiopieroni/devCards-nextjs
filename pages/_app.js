import React from 'react'

import styles from '../globalStyles.css';

const MyApp = ({ Component, pageProps }) => (
    <>    
        <Component {...pageProps} />
        <style jsx global>{ styles }</style>
    </>
)

export default MyApp;