import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/Components/GifItem'

/* eslint-disable */
describe('Pruebas al componente GifItem', () => { 
    const title = 'Titulo Gif'
    const url = 'https://media2.giphy.com/media/IvOFcGZeDA76P6XryO/giphy.gif?cid=377eb6f21m3n5qkuxxtw5nu6pq39v7g1s3m9imdaayx8j3yb&ep=v1_gifs_search&rid=giphy.gif&ct=g'

    test('La renderizacion debe coincidir con el snapShop', () => { 
        const { container } = render(<GifItem title={ title } url={ url }/>)
        expect(container).toMatchSnapshot()
        
     })

     test('debe de mostrar la imagen con el url y el alt indicado', () => { 
        render(<GifItem title={ title } url={ url }/>)
        screen.debug()

        const { src, alt } = screen.getByRole('img')

        expect(src).toBe(url)
        expect(alt).toBe(title)
      })

      test('debe mostrar el titulo en el componente', () => { 
        render(<GifItem title={ title } url={ url }/>)
        expect(screen.getByText(title)).toBeTruthy()
       })
 })