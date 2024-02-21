// These styles apply to every route in the application
import './globals.css'
 
export const metadata = {
  title: 'Hadley Peterson',
  description: 'About Hadley Peterson',
  icon: '/favicon.ico'
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}