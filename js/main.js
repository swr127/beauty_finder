// **************
// SET UP NEWS API
// **************
const newsURL = "https://newsapi.org/v2/everything?q=makeup&q=skincare";
const searchURL = "https://newsapi.org/v2/everything?q=makeup&q=skincare&q=";
const sortBY = "&sortBy=publishedAt" 
const apiKEY = '3e31013428a049488c33fc92999db3dd'

// **************
// SET UP GLOBAL VARIABLES
// **************

// **************
// RENDER ARTICLES
// **************

const renderArticles = async () => {
    const responseArticles = await axios.get(`${newsURL}${sortBY}&apiKey=${apiKEY}`)
    console.log(responseArticles)

    const articles = responseArticles.data.articles

    const articleDetails = document.querySelector('article')
    articleDetails.innerHTML = ''

    articles.forEach(article => {
        const newArticle = document.createElement('div')
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

const searchInput = document.querySelector('#searchbox')
const searchRequest = document.querySelector('#searchbutton')

searchRequest.addEventListener('click', renderSearch)
searchRequest.addEventListener('keyup', renderSearch)

const renderSearch = async () => {
    renderSearch.preventDefault()

    const responseSearch = await axios.get(`${searchURL}${searchbox.value}${sortBY}&apiKey=${apiKEY}`)
    console.log(responseSearch)

    const search = responseSearch.data.articles

    const searchDetails = document.querySelector('article')
    searchDetails.innerHTML = ''

    search.forEach(article => {
        const newSearch = document.createElement('div')
        newSearch.innerHTML =  `
        <img src=${article.urlToImage} />
        <p>PUBLISHED: ${article.publishedAt}</p>
        <p>SOURCE: ${article.source.name}</p>
        <p>AUTHOR: ${article.author}</p>
        <p>TITLE: ${article.title}</p>
        <p>${article.content}</p>
        <button id="readmore" onclick="window.location.href = '${article.url}';">Read More</button>
        `
        searchDetails.append(newSearch)

    })
}
