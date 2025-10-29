import { ProductContext } from '@/context';
import  { useContext } from 'react'

const  useCart =()=> {
  return useContext(ProductContext)
}

export default useCart ;
