export const state = () => ({
	avatar: ""
});

export const mutations = {
	setAvatar(state, avatar) {
		state.avatar = avatar;
	},
	removeAvatar(state) {
		state.avatar = null;
	}
};

export const getters = {
	avatar: state => {
		return state.avatar;
	}
};
