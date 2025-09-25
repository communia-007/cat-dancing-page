import catSvg from '../assets/images/cat.svg'
import { useAnimation } from '../hooks/useAnimation'
import '../styles/DancingCat.css'

const DancingCat = () => {
  const {
    isAnimating,
    animationSpeed,
    animationCount,
    toggleAnimation,
    changeSpeed,
    resetAnimation
  } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div className="animation-stats">
        <p>댄스 횟수: {animationCount}회</p>
        <p>키보드 스페이스바로도 제어 가능!</p>
      </div>

      <div
        className={`cat ${isAnimating ? 'dancing' : ''}`}
        style={{
          animationDuration: `${2 / animationSpeed}s`
        }}
      >
        <img src={catSvg} alt="Dancing Cat" />
      </div>

      <div className="controls">
        <button
          onClick={toggleAnimation}
          className="main-button"
        >
          {isAnimating ? '🛑 춤 멈추기' : '💃 춤 시작하기'}
        </button>

        <div className="speed-controls">
          <label>속도 조절:</label>
          <button
            onClick={() => changeSpeed(0.5)}
            className={animationSpeed === 0.5 ? 'active' : ''}
          >
            느리게
          </button>
          <button
            onClick={() => changeSpeed(1)}
            className={animationSpeed === 1 ? 'active' : ''}
          >
            보통
          </button>
          <button
            onClick={() => changeSpeed(2)}
            className={animationSpeed === 2 ? 'active' : ''}
          >
            빠르게
          </button>
        </div>

        <button
          onClick={resetAnimation}
          className="reset-button"
        >
          🔄 리셋
        </button>
      </div>

      <div className="music-notes">
        <span className="note">♪</span>
        <span className="note">♫</span>
        <span className="note">♪</span>
        <span className="note">♫</span>
      </div>
    </div>
  )
}

export default DancingCat