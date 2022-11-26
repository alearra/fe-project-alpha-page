
import React from 'react'
import "../assets/styles/Header.css"

export const Hearder = () => {
  return (
    <div className='header'>
        <div className='header-logo'>
        <img src="https://img.icons8.com/ios-filled/50/null/cash-app.png"/>
        </div>
        <div className='header-links'>
            <h5>Empresa</h5>
            <h5>Nosotros</h5>
            <h5>Servicios</h5>
        </div>
        <div className='header-create'>
            <h5>Crear cuenta</h5>
        </div>
    </div>
  )
}
