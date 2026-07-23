import { useEffect, useState } from 'react'
import './ProjectModal.css'

{/* List the media into one array of items */}
function resolveGallery({ gallery, image, video }) {
  if (gallery && gallery.length > 0) return gallery
  if (video) return [{ type: 'video', src: video }]
  if (image) return [{ type: 'image', src: image }]
  return []
}

function ProjectModal({ project, onClose }) {
  const gallery = resolveGallery(project)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const showPrev = () => {
    setActiveIndex((index) => (index === 0 ? gallery.length - 1 : index - 1))
  }

  const showNext = () => {
    setActiveIndex((index) => (index === gallery.length - 1 ? 0 : index + 1))
  }

  const activeMedia = gallery[activeIndex]

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        {activeMedia && (
          <div className="modal-gallery">
            {activeMedia.type === 'video' ? (
              <video src={activeMedia.src} controls />
            ) : (
              <img src={activeMedia.src} alt={`${project.title} screenshot`} />
            )}

            {gallery.length > 1 && (
              <>
                <button className="modal-nav modal-nav-prev" onClick={showPrev} aria-label="Previous">
                  &lsaquo;
                </button>
                <button className="modal-nav modal-nav-next" onClick={showNext} aria-label="Next">
                  &rsaquo;
                </button>
              </>
            )}
          </div>
        )}

        <div className="modal-body">
          <h2>{project.title}</h2>
          <p className="modal-description">
            {project.longDescription || project.description}
          </p>

          <div className="modal-tags">
            {project.tags?.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectModal
