
const BlogItem = ({ imageSrc, title, body }) => {
  return (
    <div className="div-h-item">

      {/* Image */}
      <img id="h-img" src={imageSrc} alt="BlogImage" />

      <div className="div-item-h-text">

        <h3 id="h-heading">{title}</h3>
        <p id="h-card-p">{body}</p>
      </div>

      {/* Button */}
      <div className="div-h-btn">
        <button className="btn-h-white">Read More</button>
      </div>

    </div>
  )
}

export default BlogItem;