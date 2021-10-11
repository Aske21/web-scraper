import axios from 'axios'
import express from 'express'
import cheerio from 'cheerio'

const port = 1337; // specified port 
const app = express();
const url = '' // name of website

axios(url)
    .then(response => {
        const html = response.data 
        const $ = cheerio.load(html)
        const items:any = []

        $('.name-of-class', html).each( function (){
            const title = $(this).text() 
            const attribute = $(this).find('a').attr('href') // example of anchor tags / getting links
            items.push(
                title,
                attribute
            )
        })
        console.log(items);
    }).catch(err => console.log(err))

app.listen(port, () => console.log(`app running on ${port}`))