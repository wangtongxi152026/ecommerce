const _ = require('lodash');

export default function(ctx) {
    if (!ctx.store.getters['auth/token'] || _.isObject(ctx.store.getters['auth/token']) || !_.isString(ctx.store.getters['auth/token'])) {
        ctx.store.commit('auth/logout')
        ctx.redirect('/login')
    }
}