import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='home-box'>
        <div className='greeting-box'>
          <p style={{ fontSize: '4rem', color: 'orange' }}>Welcome to WhisperWeb</p>
          Wanna confess something?
        </div>
        <button className='home-button'>
          Lets Go
        </button>
      </div>
    </>
  )
}
