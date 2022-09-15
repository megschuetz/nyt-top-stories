const fetchResponse = (section) => {
 return (
  fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=sNldn0GkKnLZK6hqbyG21AAiNPiXKhX4`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw Error(response.statusText)
    })
  )
} 


export { fetchResponse }