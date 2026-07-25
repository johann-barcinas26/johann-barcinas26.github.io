import { useEffect, useState } from 'react'
import './TypingTagline.css'

const TYPING_SPEED = 80
const DELETING_SPEED = 40
const PAUSE_DURATION = 1200

function TypingTagline({ phrases }) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    // Finished typing the phrase - pause, then start deleting
    if (!isDeleting && charIndex === currentPhrase.length) {
      const pause = setTimeout(() => setIsDeleting(true), PAUSE_DURATION)
      return () => clearTimeout(pause)
    }

    // Finished deleting - move on to the next phrase
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setPhraseIndex((index) => (index + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(
      () => setCharIndex((index) => index + (isDeleting ? -1 : 1)),
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    )
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex, phrases])

  return (
    <p className="typing-tagline">
      {phrases[phraseIndex].slice(0, charIndex)}
      <span className="typing-cursor">|</span>
    </p>
  )
}

export default TypingTagline
