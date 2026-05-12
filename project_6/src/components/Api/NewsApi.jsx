export default function NewsApi () {
    return fetch(`https://newsapi.org/v2/everything?q=pets&sortBy=popularity&pageSize=4&apiKey=d0a0007175ee4bc3b89c5353ff6f5053`)
    .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();

        })
}