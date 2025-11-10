import React from 'react'

import Productlist from './Ui/Productlist'
import Productinfo from './Ui/Productinfo'
import ArtworkInfo from './Ui/ArtworkInfo'
import Alsolike from "./Ui/Alsolike"
const Product = () => {
  return (
    <>
   <Productinfo/>
   <Productlist/>
   <ArtworkInfo/>
   <Alsolike/>
   </>
  )
}

export default Product