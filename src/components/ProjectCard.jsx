import './ProjectCard.css'

function ProjectCard({ title, description, image, video, tags = [], onView }) {
  return (
    <article className="project-card">
      <div className="project-media">
        {video ? (
          <video src={video} controls />
        ) : image ? (
          <img src={image} alt={`Screenshot of ${title}`} />
        ) : (
          <div className="project-media-placeholder">Add an image or video</div>
        )}
      </div>

      <div className="project-body">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <button className="project-link" onClick={onView}>
          View project &rarr;
        </button>
      </div>
    </article>
  )
}

export default ProjectCard
