const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    // Build date string
    let currentDate = new Date()

    let message = "Hello there!"
    let imageUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fknowyourmeme.com%2Feditorials%2Fguides%2Fwhat-does-hello-there-mean-everything-you-need-to-know-about-obi-wan-kenobis-iconic-meme&psig=AOvVaw2HPQMMkLfx0xhbI1E6dc5W&ust=1679623710728000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCODd6ob88P0CFQAAAAAdAAAAABAb"

    let formattedDate = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds() >= 10 ? currentDate.getSeconds() : "0" + currentDate.getSeconds()} ${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`
    res.json({
        message: message,
        imageUrl: imageUrl,
        systemTime: currentDate,
        formattedDate: formattedDate
    })
})

app.listen(port, () => {
  console.log(`REST API listening on port ${port}`)
})