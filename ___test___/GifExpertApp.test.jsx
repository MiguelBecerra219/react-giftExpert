import { render, screen } from '@testing-library/react'
import { GiftExpertApp } from '../src/GifExpertApp'

/* eslint-disable */
describe('Pruebas en el componente GifExpertApp', () => { 
    test('Debe', () => { 
        render(<GiftExpertApp />)
        screen.debug()
     })
})