// **************
// SET UP NEWS API
// **************

const url = "https://newsapi.org/v2/everything?q="
const sortBY = "&sortBy=trending"
const apiKEY = '3e31013428a049488c33fc92999db3dd'

// **************
// SET UP NEWS API FILTERING
// Advanced search filtering code found from Stackoverflow and W3 Schools
// https://stackoverflow.com/questions/1206911/why-do-i-need-to-add-g-when-using-string-replace-in-javascript
// https://www.w3schools.com/jsref/jsref_encodeuricomponent.asp
// **************

const searchTerms = "cosmetics, beauty, skincare, makeup"
const searchResults = `${searchTerms.replace(/, /g, " OR ")}`
const resultsURL = encodeURIComponent(searchResults)

const antiSearchTerms = "NOT politics, NOT finance, NOT tech, NOT sports, NOT film, NOT food, NOT nike, NOT trump, NOT null";
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
        <img class="image" src=${article.urlToImage} />
        <p><b>${article.title}</b></p>
        <p>${article.content}</p>
        <button class="readmore" onclick="window.open('${article.url}')">READ MORE</button>
        `
        articleDetails.append(newArticle)

    })
}

renderArticles()

// **************
// RENDER SEARCH
// **************

const searchRequest = document.querySelector('#searchbutton')
const searchInput = document.querySelector('#searchbox')

searchRequest.addEventListener('click', (event => {
    event.preventDefault()
    renderSearch()
}))

const renderSearch = async () => {

    const responseSearch = await axios.get(`${searchURL}${searchInput.value}${sortBY}&apiKey=${apiKEY}`)
    console.log(responseSearch)

    const search = responseSearch.data.articles

    if (responseSearch.data.totalResults >= 1) {
        
        const searchDetails = document.querySelector('article')
        searchDetails.innerHTML = ''

        search.forEach(searches => {
            const newSearch = document.createElement('div')
            newSearch.innerHTML =  `
            <img class="image" src=${searches.urlToImage} />
            <p><b>${searches.title}</b></p>
            <p>${searches.content}</p>
            <button class="readmore" onclick="window.open('${searches.url}')">READ MORE</button>
            `
        searchDetails.append(newSearch)

        })

    } else {

        const errorDetails = document.querySelector('article')
        errorDetails.innerHTML = ''

        const error = document.createElement('div')
        error.innerHTML = `
        <p class="error">We're sorry, no results were found for your search.</p>`
        errorDetails.append(error)
    
    }
}
