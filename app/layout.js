import './globals.css'
import { DarkModeProvider } from './context/DarkModeContext'

export const metadata = {
  title: 'Ashutosh Joshi - Software Developer',
  description: 'Personal website of Ashutosh Joshi, a software engineer based in Maryland, United States of America.',
  icons: {
    icon: '/images/favicon.jpeg',
    apple: '/images/favicon.jpeg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16x16" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  )
} 