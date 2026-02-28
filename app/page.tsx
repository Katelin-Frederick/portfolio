import Experience from './(mainPage)/_experience/page'
import Projects from './(mainPage)/_projects/page'
import Contact from './(mainPage)/_contact/page'
import Landing from './(mainPage)/_landing/page'
import Skills from './(mainPage)/_skills/page'
import About from './(mainPage)/_about/page'


const Home = async () => (
  <main className='bg-gray-500 snap-x'>
    <Landing />
    <div className='sm:container mx-auto snap-x'>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  </main>
)

export default Home
