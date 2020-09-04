import React, { useState, useContext, useEffect } from "react"
import priceFormat from "../utils/priceFormat"
import { CartContext } from "../context.js"
import {
  Tag,
  SizeButton,
  //   QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/components"
import { SEO, Stars } from "./"
export default function ProductDetail({
  price,
  id,
  product: { name, metadata },
  quantity,
}) {
  const formatePrice = priceFormat(price)

  const [size, setSize] = useState(2)
  const [qyt, setQyt] = useState(1)
  const { addToCart, cart } = useContext(CartContext)

  const handleSubmit = () => {
    let nombres = []
    if (!cart.length) {
      addToCart({ price, sku: id, name, metadata, quantity: qyt })
    } else {
      cart.map((swag, i) => {
        if (!nombres.includes(swag.name)) {
          nombres.push(swag.name)
        }
        if (nombres.includes(name) && swag.name === name) {
          swag.quantity += qyt
        }
      })
      if (!nombres.includes(name)) {
        addToCart({ price, sku: id, name, metadata, quantity: qyt })
      }
    }
  }

  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD{formatePrice}</b>
        <Stars />
        {metadata.wear && <h3>Color: {metadata.color}</h3>}
        <small>{metadata.description}</small>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>X</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={() => (qyt > 1 ? setQyt(qyt - 1) : null)}>-</button>
          <input type="text" disabled value={qyt} />
          <button onClick={() => setQyt(qyt + 1)}>+</button>
        </QtySelect>
        <Button onClick={handleSubmit}>Agregar al Carrito</Button>
      </div>
    </StyledProductDetail>
  )
}
