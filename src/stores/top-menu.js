import { defineStore } from "pinia";

export const useTopMenuStore = defineStore("topMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "kapal-pengawas",
        title: "Dashboard",
      },
      {
        icon: "ActivityIcon",
        pageName: "top-menu-page-2",
        title: "Operasi Pengawasan Kapal Perikanan",
        subMenu: [
          {
            icon: "HomeIcon",
            pageName: "",
            title: "Target Operasi",
            ignore: true
          },
          {
            icon: "HomeIcon",
            pageName: "",
            title: "Rencana Operasi",
            ignore: true
          },
          {
            icon: "HomeIcon",
            pageName: "",
            title: "Hasil Operasi",
            ignore: true
          },
          {
            icon: "HomeIcon",
            pageName: "",
            title: "BA Hasil Pemeriksaan",
            ignore: true
          },
          {
            icon: "HomeIcon",
            pageName: "",
            title: "Rincian Penangkapan Kapal",
            ignore: true
          },
        ],
      },
      {
        icon: "DatabaseIcon",
        pageName: "",
        title: "Master Data",
        subMenu: [
          {
            icon: "UsersIcon",
            title: "Unit Kerja",
            pageName: "unit_kerja"
          },
          
        ],
      },
    ],
  }),
});
