<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useAppStore } from '@/store/useAppStore';
import { storeToRefs } from 'pinia'

const appStore = useAppStore();
const { appState } = storeToRefs( appStore );

const showLoader = computed( () => appState.value.showLoader );

const c = reactive({
    title: "Mcclaincellars", 
    isLoading: showLoader
})

useHead({
    meta: [{
        content: c.title
    }],
    titleTemplate: (titleChunk) => {
        return titleChunk ?
            `${titleChunk} - Nuxt3 Typescript based Free Admin Dashboard Template` :
            "Modernize - Nuxt3 Typescript based Free Admin Dashboard Template";
    },
});
</script>
<template>
    <v-locale-provider>
        <v-app>
            <v-layout class="my-2">
                <LayoutFullMain />
                <v-main>
                    <v-app-bar color="white" class="rounded-t-xl px-5 bg-slate-100">
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                        <NuxtLink to="/">Products</NuxtLink>
                    </v-app-bar>
                    <v-container fluid class="page-wrapper bg-slate-100 rounded-b-xl" style="min-height:100vh;">
                        <div class="maxWidth">
                            <slot></slot>
                        </div>
                    </v-container>
                </v-main>
            </v-layout>
        </v-app>
    </v-locale-provider>
    <v-overlay persistent contained v-model="appStore.appState.showLoader" class="align-center justify-center" style="z-index: 9999">
        <v-progress-circular class="soyuzmathur" :size="70" :width="70" color="primary" indeterminate></v-progress-circular>
    </v-overlay>
</template>