import { useState, useEffect, useCallback } from 'react'

export const useAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const [animationCount, setAnimationCount] = useState(0)

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => {
      if (!prev) {
        setAnimationCount(count => count + 1)
      }
      return !prev
    })
  }, [])

  const changeSpeed = useCallback((speed) => {
    setAnimationSpeed(speed)
  }, [])

  const resetAnimation = useCallback(() => {
    setIsAnimating(false)
    setAnimationCount(0)
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [toggleAnimation])

  return {
    isAnimating,
    animationSpeed,
    animationCount,
    toggleAnimation,
    changeSpeed,
    resetAnimation
  }
}