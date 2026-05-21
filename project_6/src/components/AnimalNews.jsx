
function AnimalNews({news}) {

  

    return ( <>
    <ul className="news-ul">
        {news && news.results.map((article, index) => (
            <li className="news-li" key={index}>
                <img className="news-img" src={article.image_url} alt={article.title} />
                <p>{article.title}</p>
                {/* <a href={article.url} target="_blank" rel="noopener noreferrer"></a> */}
            </li>
        ))}
    </ul>
    {/* <button className="news-btn" onClick={handleClick}>Load More</button> */}
    </> );
}

export default AnimalNews;