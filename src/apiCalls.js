fetchResponse = (url) => {
 return (
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw Error(response.statusText)
    })
  )
} 

const allData = fetchResponse(`https://api.nytimes.com/svc/topstories/v2/home.json?sNldn0GkKnLZK6hqbyG21AAiNPiXKhX4`)

export {allData}