export default {
    sendLoginRequest: (payload) => ({
        url: '/users',
        method: 'post',
        params: {
            email: payload.email
        }
    }),
    sendMoviesRequest: () => ({
        url: '/photos',
        method: 'get'
    })
}