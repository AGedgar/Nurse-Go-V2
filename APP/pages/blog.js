import React from "react";
// import "../../assets/styles/components/Blog.css"
// import blogImage from "../../assets/static/section2Landing.png"
import { useState, useEffect } from "react";

const Blog = () => {

    useEffect(() =>{
        getNews()
    },[])

    const [news, setNews] = useState({
        news: []
    });


    const getNews = async () =>{
        fetch("api/news")
        .then(res => res.json())
        .then(news => setNews({news : news}))

    }
    console.log(news.news)
     console.log(news.news.map(obj => console.log("hola",obj)))


    return (
        <div>
            {news.news.map(obj =>
                <section className="blog-section">
                    <img src={blogImage} />
                    <span key={obj.id}>
                    <h1 >{obj.new}</h1>
                    <p>{obj.description}</p>
                    </span>
                </section>)}

        </div>
    )
}

export default Blog;