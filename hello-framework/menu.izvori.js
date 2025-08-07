import {data} from "./observablehq.base.js";
console.log("menu.izvor.js - typeof data:", typeof data);
console.log("menu.izvor.js - Array.isArray(data):", Array.isArray(data));

// 🔁 Funkcija za generiranje matica po župi
export function generirajMaticePoZupi(dataCombined, rod = "Bosna") {
  const matice = (dataCombined.matice ?? [])
    .filter(m => m.UID && m.UID != null)
    .filter(m => m.DOKUMENT && m.DOKUMENT != null && m.DOKUMENT !== "");
  const zupeSet = new Set();

  for (const m of matice) {
    if (!m.ROD || m.ROD !== rod || !m.ZUPA) continue;
    zupeSet.add(m.ZUPA.trim());
  }

  const zupe = Array.from(zupeSet);
  const mapaZupa = {};

  for (const zupa of zupe) {
    mapaZupa[zupa] = matice
      .filter(z =>
        z.ROD === rod &&
        z.ZUPA &&
        z.ZUPA.trim() === zupa
      ).sort((a, b) => {
        const aGodina = parseInt(a.GODINA_OD) || 9999;
        const bGodina = parseInt(b.GODINA_OD) || 9999;
        return aGodina - bGodina;
      })
      .map(z => ({
        name: z.UID,
        path: `/pages/ENTITET/matica/${encodeURIComponent(z.UID)}`,
        pathEncoded2: `/pages/ENTITET/matica/${encodeURIComponent(encodeURIComponent(z.UID))}`,
        geo_path: `/pages/ENTITET/matica_geo/${encodeURIComponent(z.UID)}`,
        geo_pathEncoded2: `/pages/ENTITET/matica_geo/${encodeURIComponent(encodeURIComponent(z.UID))}`
      }));
  }

  return Object.entries(mapaZupa).map(([zupa, matice]) => ({
    name: zupa,
    pages: matice
  }));
}

// ➕ Generiranje matica za sve rodove
const maticeBH = generirajMaticePoZupi(data, "Bosna");
const maticeST = generirajMaticePoZupi(data, "Stupnik");
const maticeDU = generirajMaticePoZupi(data, "Dubrovnik");
const matice_komusina = maticeBH.find(m => m.name ==  "Komušina");
const matice_sivsa = maticeBH.find(m => m.name ==  "Sivša");

// 📦 Export struktura izvora, uključujući matice
export const izvoriPages = [
  {
    name: "Izvori",
    pages: [
      { name: "Izvori",    path: "/pages/KONCEPT/Izvori_K" },
      { name: "Crkveni",   path: "/pages/KONCEPT/Izvori_Crkveni" },
      { name: "Državni",   path: "/pages/KONCEPT/Izvori_Drzavni" },      
      { name: "Gradski",   path: "/pages/KONCEPT/Izvori_Gradski" },  
      { name: "Radovi",    path: "/pages/KONCEPT/Izvori_Radovi" },
      { name: "Groblja",   path: "/pages/KONCEPT/Izvori_Groblja" },  
      { name: "Pismo",     path: "/pages/KONCEPT/Pismo_K" }
    ]
  },
  {
    name: "Događaji - Zapisi",
    pages: [   
      { name: "Matice",         path: "/pages/KONCEPT/Izvori_zapisi_K" },
      { name: "Kućedomaćini",   path: "/pages/KONCEPT/Kucedomacin_K" },
      { name: "Katastar",       path: "/pages/KONCEPT/Katastar_K" },
      { name: "Stanovnici",     path: "/pages/KONCEPT/Popis_stanovnika_K" }
    ]
  },
matice_komusina,
matice_sivsa,
//maticeBH,
//...maticeST,
//...maticeDU
];
