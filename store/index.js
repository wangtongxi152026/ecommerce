import cookieparser from 'cookieparser'

export const actions = {
    nuxtServerInit({
        commit
    }, {
        req
    }) {
        let user = null
        let token = null
        if (req && req.headers && req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            user = (parsed.user && JSON.parse(parsed.user)) || null
            token = (parsed.token && JSON.parse(parsed.user)) || null
        }
        commit('auth/setUser', user)
        commit('auth/setToken', token)
    }
}