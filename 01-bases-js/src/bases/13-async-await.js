import gifpjyApi from './bases/11-axios'

const getImage = async() => {
    try {
        const { data } = (await gifpjyApi.get('/random')).data
        const { url } = data.images.original
        const img = document.createElement('img');

        img.src = url
        document.body.append(img)
    } catch (error) {
        console.log('error en la petición', error)
        throw error
    }
}

getImage()