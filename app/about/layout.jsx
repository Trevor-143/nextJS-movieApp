
export const metadata = {
  title: 'About NextJS',
  description: 'This is the about page',
}

export default function RootLayout({ children }) {
  return (
    <html >
      <body>
        {children}
      </body>
    </html>
  )
}
