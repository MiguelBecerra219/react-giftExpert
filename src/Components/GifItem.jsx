export const GifItem = ({ title, url }) => {
  return (
  <article className="card">
    <h2>{title}</h2>
    <img src={url} alt={title}></img>
  </article>
  )
}
