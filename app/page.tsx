import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='home-box'>
        <div className='greeting-box'>
          <p style={{ fontSize: '4rem', color: 'orange' }}>Welcome to WhisperWeb</p>
          Wanna confess something?
        </div>
        <Link href={'/confess'} className='home-button'>
          <button>
            Lets Go
          </button>
        </Link>
      </div>
    </>
  )
}
