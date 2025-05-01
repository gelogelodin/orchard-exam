import { useState } from 'react'
import ModuleOne from '../ModuleOne/ModuleOne';
import ModuleTwo from '../ModuleTwo/ModuleTwo';
import './Layout.scss'

function Layout() {

  return (
    <>
      <div className='container text-center'>
        <div className='mb-3'>
          <ModuleOne />
        </div>
        <div>
          <ModuleTwo />
        </div>
      </div>
    </>
  )
}

export default Layout
