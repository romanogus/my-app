import Navbar from "@components/Navbar/Navbar";
import Hero from "@components/Hero/Hero";
import Card from "@components/Card/Card";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <section>
        <Card 
          img='katie-zaferes.png'
          rating='5.0'
          reviewCount={6}
          country='United States'
          title='Life Lessons with Katie Zaferes'
          price={136}
        />
      </section>
    </>
  )
}

export default App
