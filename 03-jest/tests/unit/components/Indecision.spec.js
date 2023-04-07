import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/indecision'


describe('Indesicion Component', () => {
    let wrapper
    let clgSpy
    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/12-e4f57c8f172c51fdd983c2837349f853.gif'
        })
    }))

    beforeEach( () => {
        wrapper = shallowMount( Indecision )
        clgSpy = jest.spyOn(console, 'log')
        jest.clearAllMocks()
    })

    /*test('match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })*/


    test('escribir en el input no se debe de disparar nada (console.log)', async() => {

        let getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')

        await input.setValue('Hola mundo')

        expect( clgSpy ).toHaveBeenCalledTimes(1)

        expect( getAnswerSpy ).not.toHaveBeenCalled()


    })

    test('escribir el simbolo de "?" debe de disparar el getanswer', async() => {

        let getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')

        await input.setValue('Hola mundo?')

        expect( clgSpy ).toHaveBeenCalledTimes(2)

        expect( getAnswerSpy ).toHaveBeenCalled()
    })

    test('Pruebas de getAnswer', async() => {

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeTruthy()
        expect( wrapper.vm.image ).toBe('https://yesno.wtf/assets/yes/12-e4f57c8f172c51fdd983c2837349f853.gif')
        expect( wrapper.vm.answer ).toBe('Si!')
    })

    test('Pruebas de getAnswer - fallo en el API',async () => {
        //Mock para simular el error en la petición
        fetch.mockImplementationOnce( () => Promise.reject('API is down') )

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeFalsy()
        expect( wrapper.vm.answer ).toBe('No se pudo cargar del API')
    })

})