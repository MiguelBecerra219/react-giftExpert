import { useState, useEffect } from 'react'
import { getGift } from '../helpers/getGifs'
export const useFetchGifs = (category) => {
  const [images, setImagenes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getGift(category).then(newImages => setImagenes(newImages))
    setIsLoading(false)
  }, [])

  return {
    images,
    isLoading
  }
}
