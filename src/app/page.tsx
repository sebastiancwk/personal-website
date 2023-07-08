import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div style={{ height: '100vh' }} className="flex border justify-center items-center">
        <div className="border p-5 rounded">
          <h1>Hello</h1>
          <p>I&apos;m Seb</p>
          <p>Currently at GoodHuman</p>
          <p><a href="https://www.linkedin.com/in/sebastian-king-15011b171/">LinkedIn</a></p>
          <p><a href="https://github.com/sebastiancwk">GitHub</a></p>
        </div>
      </div>
    </main>
  )
}
