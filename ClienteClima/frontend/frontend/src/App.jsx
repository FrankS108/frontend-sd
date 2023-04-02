import { City } from "./components/City"
import { Card } from "./components/Card"
import { CardController } from "./components/CardController"
import "./App.css"
import { useState } from "react"
function App() {

  const [data, setData] = useState({})
  return (
    <div className="contenedor">
      <City/>
      {data && <CardController objectWeather={data}/>}
    </div>
  )
}

export default App
