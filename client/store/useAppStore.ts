import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore',() => {
    const appState = ref({
        showLoader: false,
    })

    const show = () => {
        appState.value.showLoader = true
    }
    const hide = () => {
        appState.value.showLoader = false
    }
    return {appState, show, hide }
})