import React, {useEffect, useState} from 'react'
import Article from './Article'

function Main() {

  const [carta, setcarta] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      fetch("http://localhost:3005/api/productos")
        .then((response) => response.json())
        .then((valores) => {
          setcarta(valores.result);
          setTimeout(() => {
            setLoading(false)
          }, 2000);
        })
        .catch(error => console.log(error))
    }, [loading])
    console.log(carta);

    if (loading) {
      return (
          <div>
              <h1>loading...</h1>
          </div>
      )
    }

  return (
    
    <div>
        <h1>PROMOCIONES</h1>
    <section className="productos">
    {
        carta.map((values, index) => (
          values.descuento > 0 ?     
            <Article
            key = {index}
            id = {values.id}
            nombre = {values.nombre}
            precio = {values.precio}
            descuento = {values.descuento}
            imagen = {values.imagenes[0].name}
            />
          : 
          null
        ))
    }
    </section>
    <h1>PRODUCTOS DESTACADOS</h1>
    <section className="productos">
    {
        carta.map((values, index) => (
          values.categoria_id === 1 || values.categoria_id === 2 ?
            <Article
            key = {index}
            id = {values.id}
            nombre = {values.nombre}
            precio = {values.precio}
            descuento = {values.descuento}
            imagen = {values.imagenes[0].name}
            />
            :
            null
        ))
    }
    </section>
    </div>
  )
}

export default Main