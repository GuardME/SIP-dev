import { defineStore } from "pinia";
import axiosClient from "../axios";
import router from "../router";



export const useUnitKerjaStore = defineStore("unitkerja", {
    state: () => ({
        unitKerja: []
    }),
    getters: {
        unitkerja: (state) => state.unitKerja
    },
    actions: {
        async getUnitKerja() {
            await axiosClient.get('/unit-kerja')
        }
    }
});
