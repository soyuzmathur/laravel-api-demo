import { defineStore } from "pinia";
import { useAppStore } from "~/store/useAppStore";

type Response = Record<string, unknown>

export const useRosterStore = defineStore('useRosterStore' , () => {
    const rosterState = reactive({
        records: [],
        showActions: false
    });
    return { rosterState }
});