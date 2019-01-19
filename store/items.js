export const state = () => ({
    list: [],
    userList: []
})

export const mutations = {
    add(state, item) {
        state.list.push(item)
    },
    emptyList(state) {
        state.list = []
    },
    loadUserItems(state, item) {
        state.list.push(item)
    },
    emptyUserItems(state) {
        state.userList = []
    }
}

export const getters = {
    list: state => {
        return state.list
    },
    userList: state => {
        return state.userList
    }
}