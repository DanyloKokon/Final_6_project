
function AnimalNews({news}) {
    return ( <>
    <ul className="news-ul">
        {news && news.articles.map((article, index) => (
            <li className="news-li" key={index}>
                <img className="news-img" src={article.urlToImage} alt={article.title} />
                <p>{article.title}</p>
                {/* <a href={article.url} target="_blank" rel="noopener noreferrer"></a> */}
            </li>
        ))}
    </ul>
    </> );
}

export default AnimalNews;