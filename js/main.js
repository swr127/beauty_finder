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

    const articleDetails = document.querySelector('article')
        articleDetails.innerHTML = ''

    const publishedDate = document.createElement('p')
        publishedDate.innerHTML = `PUBLISHED: ${responseArticles.data.articles[0].publishedAt}`
        articleDetails.append(publishedDate)
       
}

renderArticles()

// **************
// RENDER ARTICLES FROM SEARCH
// **************

// Create search variables
// Create search event listener
// Create async function (API call)
// Append information to the DOM