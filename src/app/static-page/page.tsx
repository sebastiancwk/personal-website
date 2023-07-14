export default function Home() {
  return (
    <main style={{ backgroundColor: '#002fa7'}}>
      <div className="flex items-center justify-center" style={{ height: '100vh', width: '100vw'}}>
        <div className="bg-white p-6 m-4">
          <h1 className="font-semibold text-[3rem] leading-none pb-1">Sebastian King</h1>
          <p>Software Engineer</p>
          <p>Currently at GoodHuman</p>
          <div className="flex justify-between pt-3">
            <p className="text-sm">
              <a href="https://www.linkedin.com/in/sebastian-king-15011b171/">
                LinkedIn
              </a>
            </p>
            <p className="text-sm">
              <a href="https://github.com/sebastiancwk">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
