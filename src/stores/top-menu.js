import { defineStore } from "pinia";

export const useTopMenuStore = defineStore("topMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "dashboard",
        title: "Dashboard",
        subMenu: [
          {
            icon: "HomeIcon",
            pageName: "utama",
            title: "Utama",
          },
          {
            icon: "HomeIcon",
            pageName: "kapal-pengawas",
            title: "Operasi Kapal Pengawas",
          },
          {
            icon: "HomeIcon",
            title: "Kapal Perikanan",
          },
          {
            icon: "HomeIcon",
            title: "Pelaku Usaha"
          },
          {
            icon: "HomeIcon",
            title: "Pengaduan Masyarakat"
          },
          {
            icon: "HomeIcon",
            title: "Inspeksi Lapangan"
          }
        ]
      },
      {
        icon: "ActivityIcon",
        pageName: "top-menu-page-2",
        title: "Operasi Pengawasan Kapal Perikanan",
        subMenu: [
          {
            icon: "HomeIcon",
            pageName: "target-operasi",
            title: "Target Operasi",
            ignore: true
          },
          {
            icon: "HomeIcon",
            pageName: "rencana-operasi",
            title: "Rencana Operasi",
            ignore: true
          },
          {
            icon: "HomeIcon",
            pageName: "hasil-operasi",
            title: "Hasil Operasi",
            ignore: true
          },
          {
            icon: "HomeIcon",
            pageName: "ba-pemeriksaan",
            title: "BA Hasil Pemeriksaan",
            ignore: true
          },
          {
            icon: "HomeIcon",
            pageName: "rincian-kapal",
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
