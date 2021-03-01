import React from 'react'
import Styles from './posts.module.scss'
import Publication from '../../components/publication/publication'
const posts = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.cards}>
                <div className={Styles.card}><h2>Total Posts 0</h2></div>
                <div className={Styles.card}><h2>this week Posts</h2></div>
                <div className={Styles.card}><h2>reports </h2></div>
            </div>
            <div className={Styles.reportedPosts}>
                    <Publication index={"1"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five"} image={"/me.jpg"}></Publication>
                    <Publication index={"2"} text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College  gze  innnnnnnaaa aaaaaaaaaaaaaaagezgzgze zzzzzzzzzzzzzzeggzg zn"} image={false}></Publication>
                    <Publication index={"3"} text={"gzegzegzeg"} image={"hola.jpg"}></Publication>
            </div>
        </div>
    )
}

export default posts
