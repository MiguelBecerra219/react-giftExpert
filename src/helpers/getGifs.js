export const getGift = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=dODqKTASWqNI0KocscDLQYQN0psPydGD&q=${category}&limit=10`
  const respueta = await fetch(url)
  const { data } = await respueta.json()
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return gifs
}
