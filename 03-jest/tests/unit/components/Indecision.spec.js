import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/indecision'


describe('Indesicion Component', () => {
    let wrapper
    let clgSpy

    beforeEach( () => {
        wrapper = shallowMount( Indecision )
        clgSpy = jest.spyOn(console, 'log')
    })

    /*test('match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })*/


    test('escribir en el input no se debe de disparar nada (console.log)', async() => {

        let getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')

        await input.setValue('Hola mundo')

        expect( clgSpy ).toHaveBeenCalled()

        expect( getAnswerSpy ).not.toHaveBeenCalled()


    })

    test('escribir el simbolo de "?" debe de disparar el fetch', () => {

    })

    test('Pruebas de getAnswer', () => {

    })

    test('Pruebas de getAnswer - fallo en el API', () => {

    })

})