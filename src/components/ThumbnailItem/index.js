// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, imageClicked, isSelected} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const thumbnailSelectedStyle = isSelected ? 'thumbnail-selected' : ''

  return (
    <li className="thumbnail-list">
      <button
        onClick={() => imageClicked(id)}
        type="button"
        className="thumbnail-btn"
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${thumbnailSelectedStyle}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
