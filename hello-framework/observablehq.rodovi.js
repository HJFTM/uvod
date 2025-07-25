import { CURRENT_PROJECT, data, generirajObiteljiPoMjestu, generirajMjestaOdObitelji } from "./observablehq.base.js";

const obiteljiPoMjestuPages = generirajObiteljiPoMjestu(data, CURRENT_PROJECT);
const mjestaPages = generirajMjestaOdObitelji(data, CURRENT_PROJECT);

export const rodEntitetiIzvoriPages = [
  {
    name: `Obitelji`,
    pages: [
      { name: "  Prezime",      path: `/pages/1_Jularic/prezime_r?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },
      { name: "  Generacije",   path: `/pages/ROD/Generacije_R?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },
      { name: "  Obitelji",     path: `/pages/ROD/Obitelji_R?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },
      { name: "  Događaji",     path: `/pages/ROD/Dogadjaji_R?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },      
      { name: "  Stablo",       path: `/pages/ROD/Stablo_R?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },
      { name: "  Bolesti",      path: `/pages/ROD/Bolesti_D?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },
      { name: "  Mjesta",          path: `/pages/ROD/Mjesta_R?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },
      //{ name: "Mjesta-zapisi",   path: `/pages/KONCEPT/Mjesta_zapisi_R?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },
      { name: "  Migracije",       path: `/pages/ROD/Migracije_R?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },      
      { name: "  Izvori*",         path: `/pages/ROD/Izvori_D?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },
    ]
  },
  {
    name: "Mjesta",
    pages: [
      ...mjestaPages,
    ]
  },
  {
    name: "Izvori",
    pages: [      
      { name: "  Popisi",          path: `/pages/ROD/Izvor_Popisi?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },
      { name: "  Matice",           path: `/pages/ROD/Matice_D?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },  
      { name: "  Groblje",          path: `/pages/ROD/Groblje_D?ROD=${encodeURIComponent(CURRENT_PROJECT)}` }, 
      { name: "  Katastar",         path: `/pages/ROD/Katastar_D?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },
      { name: "  Pismo / Jezik",    path: `/pages/ROD/Pismo_D?ROD=${encodeURIComponent(CURRENT_PROJECT)}` },
  
    ]
  },
      {
    name: "----------",
    pages: [
      { name: "Sadržaj", path: "/pages/KONCEPT/Navigacija" }
    ]
  }
];
