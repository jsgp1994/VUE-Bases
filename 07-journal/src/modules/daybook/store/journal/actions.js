// export const myAction = async ({ commit }) => {

import journalApi from "@/api/journalApi"

// }


export const loadentries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    const entries = []

    if(!data) {
        commit('setEntry', [])
        return
    }

    for( let id of Object.keys(data) ){
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntry', entries)
}

export const updateEntry = async ({ commit }, entry) => {

    const { date, picture, text } = entry
    const dataTosave = { date, picture, text }

    await journalApi.put(`/entries/${entry.id}.json`, dataTosave)
    commit('updateEntry', { ...entry })
}

export const createEntry = async ({ commit }, entry ) => {

    const { date, picture, text } = entry
    const dataTosave = { date, picture, text }

    const { data } =  await journalApi.post(`/entries.json`, dataTosave)

    dataTosave.id = data.name

    commit('addEntry', dataTosave)

    return data.name

}

export const deleteEntry = async ({ commit }, id) => {
    await journalApi.delete(`/entries/${id}.json`)
    commit('deleteEntry', id)

    return id
}