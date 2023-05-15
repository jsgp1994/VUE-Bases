// export const myAction = async ({ commit }) => {

import journalApi from "@/api/journalApi"

// }


export const loadentries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    const entries = []

    for( let id of Object.keys(data) ){
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntry', entries)
}

export const updateEntry = async (/*{ commit }*/) => {

}

export const createEntry = async (/*{ commit }*/) => {

}