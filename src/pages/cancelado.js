import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function cancelado() {
  return (
    <div>
      <SEO title="Producto Cancelado" />
      <Purchase>
        <h2>Compra cancelada</h2>
        <p>Lamentamos que no hayas comprado tu nuevo swag.</p>
        <p>Te esperamos devuelta nunca pares de aprender</p>
        <span role="img" aria-label="emoji">
          😥
        </span>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
