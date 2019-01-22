import Cookies from 'js-cookie'

export const state = () => {}

export const mutations = {
	setUser(state, user) {
		state.user = user
		Cookies.set('user', user)
	},
	setToken(state, token) {
		state.token =  token
		Cookies.set('token', token)
	},
	updateUserType(state, type) {
		state.user.userType = type
	},
	logout(state) {
		state.user = null
		state.token = null
		Cookies.set('user', null)
		Cookies.set('token', null)
	}
}

export const getters = {
	user: state => {
		return state.user
	},
	token: state => {
		return state.token
	}
}
