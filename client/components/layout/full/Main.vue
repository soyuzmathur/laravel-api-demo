<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import sidebarItems from '@/components/layout/full/vertical-sidebar/sidebarItem';
const sidebarMenu = shallowRef(sidebarItems);
</script>

<template>
    <!------Sidebar-------->
    <v-navigation-drawer floating color="transparent">
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <!-- <perfect-scrollbar class="scrollnavbar"> -->
            <!-- <div class="px-0 py-5 text-center">Mcclaincellars</div> -->
            <v-list class="pt-10">
                <ul class="pl-5 pb-16">
                    <!---Menu Loop -->
                    <template v-for="(item) in sidebarMenu">
                        <!---Item Sub Header -->
                        <LayoutFullVerticalSidebarNavGroup :item="item" v-if="item.header" :key="item.title+'-if'" />

                        <!---Single Item-->
                        <LayoutFullVerticalSidebarNavItem :key="item.title+'-else'" :item="item" v-else class="leftPadding" />
                        <!---End Single Item-->
                    </template>
                </ul>
            </v-list>
        <!-- </perfect-scrollbar> -->
    </v-navigation-drawer>
    <!------Header-------->
</template>
