export default function NewsApi() {
    return fetch(`https://newsdata.io/api/1/latest? 
  apikey=pub_1c3a76ea5c8945088307cee8ded92d2e
  &q=pets
  &image=1
  &size=3`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();

        })
}