let apiKey = "NzS4EmD4EE8VhGTbSGx4eBwNpwq5K3RN"

fetch(`https://api.nytimes.com/svc/topstories/v2/science.json?=${apiKey}`)
  .then(res => res.json())
  .then(response => {
    console.log(response)
  })
