import Loading from './Loading.vue'
const load = {
    install: (Vue) => {
        if(typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue;
        }
        Vue.component(Loading.name, Loading)
    }
}
export default load;