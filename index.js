// News fetch logic
import 'dotenv/config'

async function fetchedUsers() {
    try {
        const response = await fetch(`${process.env.NEWS_API_BASE_URL}?country=mx&apiKey=${process.env.NEWS_API_BASE_URL}`)
        const news = await response.json()
        console.log(news)
        return news
    } catch (error) {
        console.error('Error fetching news', error)
    }
}
fetchedUsers()