import React from 'react'

import { makeStyles } from '@material-ui/styles'
import Link from './Links/Link'

const useStyles = makeStyles({
  container: {
    background: '#000',
    color: '#fff',
    padding: '48px 0',
    marginTop: 24,
  },
  content: {
    maxWidth: 960,
    margin: 'auto',
    padding: '0 24px',
  },
  about: {
    '& p': {
      paddingBottom: 4,
    },
  },
  nav: {
    marginTop: 16,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: -8,
    '& a': {
      padding: '8px 16px',
      textDecoration: 'none',
      display: 'inline-block',
      borderRight: '1px #ccc solid',
      borderLeft: '1px #ccc solid',
      marginBottom: 8,
      fontWeight: 400,
      transition: 'background 0.2s ease-out, color 0.2s ease-out, border-color 0.2s ease-out',
      '&:not(:first-child)': {
        marginLeft: -1,
      },
      '&:hover, &:focus, &:active': {
        background: '#fff',
        color: '#000',
        borderColor: '#000',
      },
    },
  },
})

const Footer: React.FC = () => {
  const classes = useStyles()
  return (
    <footer className={classes.container}>
      <main className={classes.content}>
        <section className={classes.about}>
          <p className="text-speak-up">&copy; {new Date().getFullYear()} David Wheatley</p>
          <p className="text-whisper">
            <a href="https://github.com/davwheat/personal-portfolio" rel="noopener noreferrer">
              View this site on GitHub
            </a>
          </p>
        </section>
        <nav className={classes.nav}>
          <Link href="/">Home</Link>
          {/* <Link href="/blog">Blog</Link> */}
          {/* <Link href="/my-work">Portfolio</Link> */}
          <a href="https://github.com/davwheat" rel="noopener noreferrer">
            My GitHub
          </a>
        </nav>
      </main>
    </footer>
  )
}

export default Footer