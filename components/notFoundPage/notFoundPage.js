import { useRouter } from 'next/router'
import React from 'react'
import Styles from  './notFoundPage.module.scss'
const notFoundPage = () => {
    const router = useRouter()

    return (
        <div className={Styles.container}>
                <h1>404 User Not Found</h1>
                <button onClick={e=>router.push("/")}>Go Back</button>
        </div>
    )
}

export default notFoundPage
