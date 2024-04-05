import React from 'react'
import Particles from 'react-particles'
import { particleConfig } from './config/particle-config'
export default function ParticleBg() {
  return (
    <Particles params={particleConfig} className='w-full h-screen text-gray-5 grid place-items-center'>
        <div className='text-gray-5'>
            <h1>Tgedfgdf</h1>
        </div>
    </Particles>
  )
}
