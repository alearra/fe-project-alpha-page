
import React from 'react'
import "../assets/styles/Empresas.css"
import { EmpresaStack } from '../components/EmpresaStack'

export const Empresas = () => {
  return (
    <div className='empresas'>
        <div empresas-subtitle>
            <h5 className='subtitle'>Unite a +1000 monotributistas de estas empresas que manejan su contabilidad con nosotros.</h5>
        </div>
        <div empresas-img>
            <EmpresaStack />
        </div>
    </div>
  )
}
