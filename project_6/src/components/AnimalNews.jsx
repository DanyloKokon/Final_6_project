
function AnimalNews({news, setPage}) {

    const handleClick = (pr) => {
        setPage(prevPage => prevPage + 1);
    }

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
    <button className="news-btn" onClick={handleClick}>Load More</button>
    </> );
}

export default AnimalNews;