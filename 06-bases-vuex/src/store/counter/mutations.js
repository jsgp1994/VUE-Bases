export const increment = ( state ) => {
    state.count++
    state.lastMutation = 'increment'
}

export const incrementBy = ( state, objtect ) => {
    const { val, name } = objtect
    state.count += val
    state.lastMutation = `${name} ${val}`
    state.lastRandomInt = val
}

export const setLoading = ( state, value) => {
    state.isLoading = value
}