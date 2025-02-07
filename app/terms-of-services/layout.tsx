import "@styles/tailwind.css"

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="bg-red-500">
        {children}
        </main>
      </body>
    </html>
  )
}
