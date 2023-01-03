import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <footer className="text-[11px] text-center text-attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://gerardocastillo.me/" target="_blank">Gerardo Castillo</a>.
        </footer>
      </main>
    </>
  )
}
