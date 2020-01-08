# Beauty Finder Overview 

## Project Description

The **Beauty Finder** is an application that leverages the News API to present news articles from over 30,000 sources that are specific to the beauty industry.

Live App: 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 2rd| Create repository & README.md with project overview| Complete
|Jan 3rd| Pseudocode core application structure (HTML, CSS, JavaScript) | Complete
|Jan 5th| Code core application structure (HTML, CSS, Javascript) | Complete
|Jan 6th| Code MVP | Complete
|Jan 7th| Code core application styling (CSS) | Complete
|Jan 8th| Code additional styling & PostMVP | Complete
|Jan 9th| Present | Incomplete

## Priority Matrix

<a href="https://imgur.com/g5kN3hT"><img src="https://i.imgur.com/g5kN3hT.png" title="source: imgur.com" /></a>

## Timeframes 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Set up core code (HTML, CSS, JS) | H | 6hrs| 6hrs | 8hrs |
| Find and use external API | H | 5hrs| 5hrs | 3hrs |
| Render data on page | H | 4.5hrs| 4.5hrs | 5hrs |
| Enable search functionality | H | 4.5hrs| 4.5hrs | 3hrs |
| Implement responsive design | M | 3.5hrs| 3.5hrs | 3hrs |
| Advanced CSS features | L | 6hrs| 6hrs | TBD |
| Total |  | 30hrs| 30hrs | TBD |

## Wireframes

<a href="https://imgur.com/8Lq2KX9"><img src="https://i.imgur.com/8Lq2KX9.png" title="source: imgur.com" /></a>
<br>Link to wireframe: https://wireframe.cc/K98Wji

## API Data Sample

```
"status": "ok",
    "totalResults": 7171,
    "articles": [
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Sarah Young, Sarah Young",
            "title": "Sustainable beauty resolutions: 5 ways to overhaul your routine for 2020, from face wipes to cotton buds",
            "description": "Become a more conscientious beauty consumer this year",
            "url": "https://www.independent.co.uk/life-style/fashion/sustainable-beauty-resolution-routine-wipes-cotton-buds-plastic-packaging-a9265711.html",
            "urlToImage": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/12/31/15/waste-beauty.jpg",
            "publishedAt": "2020-01-02T15:49:32Z",
            "content": "As consumers become increasingly aware of the pollution and waste caused by single-use products, items like plastic straws, water bottles and disposable coffee cups have become maligned. But what about our beauty routines?\r\nA quick glance in your bathroom cab… [+15569 chars]"
        }
```
 
## MVP 

- Fetch and use News API
- Render news articles related to the beauty industry on page 
- Enable search functionality so that the user can filter the news articles by related keywords (i.e. vegan, mascara, cruelty-free, sephora, etc.)
- Implement a responsive design that enables to the user to read the articles and use the search functionality on any device 

## PostMVP 

- Filter out null data 
- Add advanced CSS features to the news articles based on user interaction (i.e. scroll functionality, hover animations)

## Code Snippet  

```
articles.forEach(article => {
        const newArticle = document.createElement('div')
        newArticle.innerHTML =  `
        <img class="image" src=${article.urlToImage} />
        <p><b>${article.title}</b></p>
        <p>${article.description}</p>
        <button class="readmore" onclick="window.open('${article.url}')">READ MORE</button>
        `
        articleDetails.append(newArticle)

    })
```

## Change Log

No major changes yet!  
