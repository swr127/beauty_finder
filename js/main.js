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
    
    const articleImage = document.querySelector('article')
        articleImage.innerHTML = `<img src='${responseArticles.data.articles[0].urlToImage}'/>`

    const articleDate = document.createElement('p')
        articleDate.innerHTML = `PUBLISHED: ${responseArticles.data.articles[0].publishedAt}`
        articleDetails.append(articleDate)

    const articleSource = document.createElement('p')
        articleSource.innerHTML = `SOURCE: ${responseArticles.data.articles[0].source.name}`
        articleDetails.append(articleSource)
    
    const articleAuthor = document.createElement('p')
        articleAuthor.innerHTML = `AUTHOR: ${responseArticles.data.articles[0].author}`
        articleDetails.append(articleAuthor)
    
    const articleTitle = document.createElement('p')
        articleTitle.innerHTML = `TITLE: ${responseArticles.data.articles[0].title}`
        articleDetails.append(articleTitle)
    
    const articleDescription = document.createElement('p')
        articleDescription.innerHTML = `${responseArticles.data.articles[0].content}`
        articleDetails.append(articleDescription)
       
}

renderArticles()

// **************
// RENDER ARTICLES FROM SEARCH
// **************

// Create search variables
// Create search event listener
// Create async function (API call)
// Append information to the DOM