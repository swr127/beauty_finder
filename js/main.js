// **************
// SET UP NEWS API
// **************

const url = "https://newsapi.org/v2/everything?q="
const sortBY = "&sortBy=publishedAt"
const apiKEY = '3e31013428a049488c33fc92999db3dd'

// **************
// SET UP NEWS API FILTERING
// Advanced search filtering code found from W3 Schools
// **************

const searchTerms = "cosmetics, beauty, skincare, makeup"
const searchResults = `${searchTerms.replace(/, /g, " OR ")}`
const resultsURL = encodeURIComponent(searchResults)

const antiSearchTerms = "NOT politics, NOT trump, NOT sports, NOT nike, NOT finance, NOT null";
const antiSearchResults = `${antiSearchTerms.replace(/, /g, " AND ")}`
const antiResultsURL = encodeURIComponent(antiSearchResults);

const articleURL = `${url}${resultsURL}%20AND%20${antiResultsURL}${sortBY}&apiKey=${apiKEY}`
const searchURL = `${url}${resultsURL}%20AND%20${antiResultsURL}%20AND%20`

// **************
// RENDER ARTICLES
// **************

const renderArticles = async () => {
    const responseArticles = await axios.get(`${articleURL}`)
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


const renderSearch = async () => {
    const responseSearch = await axios.get(`${searchURL}${searchInput.replace(/" "/g, "%20")}${sortBY}&apiKey=${apiKEY}`)
    console.log(responseSearch)

    const search = responseSearch.data.articles


    const searchDetails = document.querySelector('article')
    searchDetails.innerHTML = ''

    search.forEach(searches => {
        const newSearch = document.createElement('div')
        newSearch.innerHTML =  `
        <img src=${searches.urlToImage} />
        <p>PUBLISHED: ${searches.publishedAt}</p>
        <p>SOURCE: ${searches.source.name}</p>
        <p>AUTHOR: ${searches.author}</p>
        <p>TITLE: ${searches.title}</p>
        <p>${searches.content}</p>
        <button id="readmore" onclick="window.location.href = '${searches.url}';">Read More</button>
        `
        searchDetails.append(newSearch)

    })
}

const searchRequest = document.querySelector('#searchbutton')
searchRequest.addEventListener('click', (event => {
    event.preventDefault()
    const searchInput = document.querySelector('#searchbox')
    renderSearch(searchInput.value)
}))