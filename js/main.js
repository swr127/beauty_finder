// **************
// SET UP NEWS API
// **************
const newsURL = "https://newsapi.org/v2/everything?q=makeup&q=skincare&sortBy=publishedAt";
const apiKEY = '3e31013428a049488c33fc92999db3dd'

// **************
// SET UP GLOBAL VARIABLES
// **************

// Are there any global variables?

// **************
// RENDER ARTICLES
// **************

const renderArticles = async () => {
    const responseArticles = await axios.get(`${newsURL}&apiKey=${apiKEY}`)
    console.log(responseArticles)

    const articles = responseArticles.data.articles

    const articleDetails = document.querySelector('section')
    articleDetails.innerHTML = ''

    articles.forEach(article => {
        const newArticle = document.createElement('article')
        newArticle.innerHTML =  `
        <img src=${article.urlToImage} />
        <p>PUBLISHED: ${article.publishedAt}</p>
        <p>SOURCE: ${article.source.name}</p>
        <p>AUTHOR: ${article.author}</p>
        <p>TITLE: ${article.title}</p>
        <p>${article.content}</p>
        <button id="readmore" onclick="window.location.href = '${article.url}';">Read More</button>
        `
        articleDetails.append(newArticle)

    })
}

renderArticles()

// **************
// RENDER ARTICLES FROM SEARCH
// **************

// Create search variables
// Create search event listener
// Create async function (API call)
// Append information to the DOM