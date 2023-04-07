import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    let wrapper;

    beforeEach( () => {
        wrapper = shallowMount( Counter )
    })

    /*test('Debe de hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })*/

    test('h2 debe de tener el valor por defecto "Counter"', () => {

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Counter')

    })

    test('El valor por defecto debe ser 100 en el P', () => {

        const value = wrapper.find('[data-testid="counter"]').text()
        //ptags[1].text()
        expect(value).toBe('100')
    })

    test('Debe de incrementar y decrementar el contador', async() => {

        const [increaseBtn, btnDecrese ] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await btnDecrese.trigger('click')
        await btnDecrese.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe('101')

    })

    test('Debe de establecer el valor por defecto', () => {
        const { start } = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)
    })

    test('Debe mostrar la prop de Title', () => {

        const title = 'Hola Mundo'

        const wrapper = shallowMount( Counter, {
            props: {
                title
            }
        })

        expect(wrapper.find('h2').text()).toBe(title)

    })



})