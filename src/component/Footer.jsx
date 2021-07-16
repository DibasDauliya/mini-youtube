import React from 'react'

export default function Footer() {
  return (
    <>
      <hr />
      <footer className='py-2 px-3 text-center'>
        Made with 💖 By <strong>Dibas Dauliya</strong>
        <p>
          <i className='fab fa-github'></i>{' '}
          <a
            href='https://github.com/dibasdauliya'
            className='card-link'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>{' '}
          |<i className='ml-1 fab fa-twitter'></i>{' '}
          <a
            href='https://twitter.com/dibasdauliya33'
            className='card-link'
            target='_blank'
            rel='noreferrer'
          >
            Twitter
          </a>
        </p>
      </footer>
    </>
  )
}
