import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/Components/AddCategory'

/* eslint-disable */
describe('Pruebas en el componente AddCategory', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={()=>{}}/>)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target: {value: 'saitama'}})
        expect(input.value).toBe('saitama')
        screen.debug()
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'saitama'
        const onNewCategory = jest.fn() // Esta es una funcion de jest de la cual tenemos control, por ejemplo podemos saber cuantas veces fue llamada en donde la enviamos

        render(<AddCategory onNewCategory={onNewCategory}/>) // Renderizamos el componenete
        // Extraemos los elementos que nos interesa evaluar/modificar
        const input = screen.getByRole('textbox') 
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue}}) // Simulamos que se escribe ub texto en el input
        fireEvent.submit(form) // Simulamos un submit en el form que seleccionamos
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled() // Esperamos que la funcion sea llamada al menos una vez
        expect(onNewCategory).toHaveBeenCalledTimes(1) // Esperamos que la funcion  sea llamada un numero determinados de veces
        expect(onNewCategory).toHaveBeenCalledWith(inputValue) // Esperamos que la funcion se llamara con el valor enviado
    })

    test('no debe de llamar el onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)

        const form = screen.getByRole('form')
        fireEvent.submit(form)
        expect(onNewCategory).toHaveBeenCalledTimes(0)
        expect(onNewCategory).not.toHaveBeenCalled()
    })
})  