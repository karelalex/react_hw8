import React, {useState} from "react";
import {Article} from "./Article";

export const ArticleList = ({articles}) => {
    const [openId, setOpenId] = useState(articles[0].id)

    const handleClick = (id) => {
        setOpenId(id === openId ? null : id)
    }

    const articleElements = articles.map((article, index) => (
        <li key={article.id} className="article-list__li">
            <Article article={article} isOpen={article.id === openId} onClick={handleClick}/>
        </li>
    ))

    return (
        <ul>
            {articleElements}
        </ul>
    )
}
