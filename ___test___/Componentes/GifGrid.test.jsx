import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/Components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

/* eslint-disable */
jest.mock('../../src/hooks/useFetchGifs')
describe('pruebas en GifGrid', () => { 
    const category = 'One Punch'

    test('debe mostar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category}/>)
        screen.debug()
        expect(screen.getByText('Cargando')).toBeTruthy()
        expect(screen.getByText(category)).toBeTruthy()
    })

    test('Debe mostar items cuando se cargan las imagenes del useFetch ', () => { 
        const gift = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://Holamundo'
        },{
            id: 'ABC',
            title: 'Goku',
            url: 'https://Holamundo'
        }]
        
        useFetchGifs.mockReturnValue({
            images: gift,
            isLoading: false
        })
        render(<GifGrid category={category}/>)
        screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2)
    })
})