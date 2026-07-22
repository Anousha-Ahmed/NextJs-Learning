import Navbar from "@/app/components/Navbar"
import "./globals.css"

export const metadata = {
  title : "My App",
  description : "Net.js App"
};
export default function RootLayout({children}) {
  return (
    <html>
      <body>
        <Navbar />
        <div style={{ padding: '20px' }}>{children}</div>
      </body>
    </html>
  )
}

