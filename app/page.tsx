import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='home-box'>
        <div className='greeting-box'>
          <p style={{ fontSize: '4rem', color: 'orange' }}>Welcome to WhisperWeb</p>
          <p style={{ color: '#000080' }}>Wanna confess something?</p>
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
