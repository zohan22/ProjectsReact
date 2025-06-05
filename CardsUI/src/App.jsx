import ShoeCard from "./components/ShoeCard/ShoeCard"
import adidas from './assets/icons8-adidas-96.png'
import nike from './assets/icons8-nike-96.png'
import puma from './assets/icons8-puma-96.png'
import tenis1 from './assets/nike_one.png'
import tenis2 from './assets/nike_two.png'
import tenis3 from './assets/nike_three.png'

function App() {
  const dato1 = {
    logo: puma,
    imagenTenis: tenis1,
    marca: 'Ronnie fieg x puma',
    modelo: 'R698 mid - sakura',
    descripcion: 'Ronnie Fieg partners with Puma to redesign the R69. Inspired by Japanese sakura blossoms',
    precio: 220
  }

  const dato2 = {
    logo: nike,
    imagenTenis: tenis2,
    marca: 'nike',
    modelo: 'air max 90 infrared',
    descripcion: 'The "Infrared" colorway is whitout any doubt one of the most iconic in the Nike Air Max history',
    precio: 129
  }

  const dato3 = {
    logo: adidas,
    imagenTenis: tenis3,
    marca: 'adidas',
    modelo: 'yeezy boost 350',
    descripcion: 'The low-top Yeezy Boost 350 in tan features an upper composed of tonal Primeknit',
    precio: 199
  }

  return (
    <section className="App">
      <ShoeCard data={dato1}/>
      <ShoeCard data={dato2}/>
      <ShoeCard data={dato3}/>
    </section>
  )
}

export default App
