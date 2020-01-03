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
        `
        articleDetails.append(newArticle)

    })

    // for (let i = 0; i <= articles.length; i++) {

    //     const articleDetails = document.querySelector('article')
    //         articleDetails.innerHTML = '' 
    
    //     const articleImage = document.querySelector('article')
    //         articleDetails.innerHTML = `<img src='${articles[i].urlToImage}'/>`

    //     const articleDate = document.createElement('p')
    //         articleDate.innerHTML = `PUBLISHED: ${articles[i].publishedAt}`
    //         articleDetails.append(articleDate)

    //     const articleSource = document.createElement('p')
    //         articleSource.innerHTML = `SOURCE: ${articles[i].source.name}`
    //         articleDetails.append(articleSource)
    
    //     const articleAuthor = document.createElement('p')
    //         articleAuthor.innerHTML = `AUTHOR: ${articles[i].author}`
    //         articleDetails.append(articleAuthor)
    
    //     const articleTitle = document.createElement('p')
    //         articleTitle.innerHTML = `TITLE: ${articles[i].title}`
    //         articleDetails.append(articleTitle)
    
    //     const articleDescription = document.createElement('p')
    //         articleDescription.innerHTML = `${articles[i].content}`
    //         articleDetails.append(articleDescription)
    // }
}

renderArticles()

// **************
// RENDER ARTICLES FROM SEARCH
// **************

// Create search variables
// Create search event listener
// Create async function (API call)
// Append information to the DOM