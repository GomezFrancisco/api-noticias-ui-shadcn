import {useEffect, useState} from 'react'
import {Header} from './components/Header'
import { Formulario } from './components/Formulario'

import './App.css'


function App() {

  // definir la categoria y noticias
   const [categoria, guardarCategoria] = useState('')

   const API_KEY = '0911245c208546678c463c6f1271d4aa'

   useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()
      console.log(noticias.articles)
    }
    consultarAPI()
  },[categoria]) 
    


  return (
    <>
      <Header />
      <Formulario
        guardarCategoria={guardarCategoria}
       />
    </>
  )
}

export default App
