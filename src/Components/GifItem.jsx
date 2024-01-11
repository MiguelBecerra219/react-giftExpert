import PropTypes from 'prop-types'

export const GifItem = ({ title, url }) => {
  return (
  <article className="card">
    <h2>{title}</h2>
    <img src={url} alt={title}></img>
  </article>
  )
}

GifItem.protoTypes = {
  title: PropTypes.string.isRequireds,
  url: PropTypes.string.isRequireds
}
