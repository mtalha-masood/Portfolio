import React,{useEffect} from 'react'
import './PreLoader.css'
import { preLoaderAnimation } from '../../animation'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnimation()
  }, [])
  return (
    <div className='preloader'>
        <div className='texts-container'>
           <span>Entering &nbsp;</span>
           <span>Muhammad Talha's &nbsp;</span>
           <span> Portfolio</span>
        </div>
    </div>
  )
}

export default PreLoader