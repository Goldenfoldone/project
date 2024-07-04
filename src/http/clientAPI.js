import { $host } from "./index";

export const createPost   = async (post) => {
    const {data} = await $host.post('/api/client/create', post)
    return data
}

export const fetchPost = async () => {
    const {data} = await $host.get('/api/client/getall')
    return data
}



export const fetchOnePost = async (id) => {
    const {data} = await $host.get('/api/client/' + id)
    return data
}

export const updateOnepost = async (post) => {
    const {data} = await $host.post('/api/client/is/' + post.id, post)
    return data
}