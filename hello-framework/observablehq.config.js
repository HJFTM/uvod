export default {
  title: "Jularić",

  nav: [
    {
      name: "Uvod",
      children: [
        { name: "Naslovnica", path: "/pages/0 Uvod/naslovnica" },
        { name: "Uvod", path: "/pages/0 Uvod/uvod" }
      ]
    },
    {
      name: "Jularić",
      children: [
        { name: "Prezime Jular-ić (K)", path: "/pages/1_Jularic/01.1.prezime_ilaric" },
        { name: "Evolucija zapisa (V)", path: "/pages/1_Jularic/01.2.evolucija" },
        { name: "Prezime (E)", path: "/pages/1_Jularic/01.3.prezime_e" },
        { name: "Generacije (K)", path: "/pages/2 Generacije/Generacije_K" },
        { name: "Obitelji (K)", path: "/pages/2 Obitelji/Obitelji_K" },
        { name: "Migracije (K)", path: "/pages/9 Migracije/Migracije_K" },
        { name: "Mjesta (K)", path: "/pages/10 Mjesta/Mjesta_K" },
        { name: "Kuće (K)", path: "/pages/11 Kucedomacin/Kucedomacin_K" },
        { name: "Popisi (K)", path: "/pages/15 Popisi/Popisi_K" },
        { name: "Župe (K)", path: "/pages/20 Zupe/Zupe_K" },
        { name: "Izvori (K)", path: "/pages/21 Izvori/Izvori_K" },
        { name: "Države (K)", path: "/pages/30 Drzava/Drzava_K" },
        { name: "Katastar (K)", path: "/pages/31 Katastar/Katastar_K" },
        { name: "Pismo (K)", path: "/pages/40 Pismo/Pismo_K" },
        { name: "Bolesti (K)", path: "/pages/70 Bolesti/Bolesti_K" },
        { name: "Groblje (K)", path: "/pages/71 Groblje/Groblje_K" }
      ]
    },
    {
      name: "Rod",
      children: [
        { name: "Generacije (R)", path: "/pages/2 Generacije/Generacije_R" },
        { name: "Obitelji (R)", path: "/pages/2 Obitelji/Obitelji_R" },
        { name: "Migracije (R)", path: "/pages/9 Migracije/Migracije_R" },
        { name: "Mjesta (R)", path: "/pages/10 Mjesta/Mjesta_R" },
        { name: "Župe (R)", path: "/pages/20 Zupe/Zupe_D" },
        { name: "Katastar (D)", path: "/pages/31 Katastar/Katastar_D" },
        { name: "Pismo (D)", path: "/pages/40 Pismo/Pismo_D" },
        { name: "Bolesti (D)", path: "/pages/70 Bolesti/Bolesti_D" },
        { name: "Groblje (D)", path: "/pages/71 Groblje/Groblje_D" },
        { name: "Izvori (D)", path: "/pages/21 Izvori/Izvori_D" },
        { name: "Popisi (D)", path: "/pages/15 Popisi/Popisi_D" }
      ]
    },
    {
      name: "Entiteti",
      children: [
        { name: "Obitelji (E)", path: "/pages/2 Obitelji/Obitelji_E" },
        { name: "Obitelji (Z)", path: "/pages/2 Obitelji/Obitelj_Zapisi" },
        { name: "Migracije Individualne (E)", path: "/pages/9 Migracije/Migracije_Individualne_E" },
        { name: "Migracije Masovne (E)", path: "/pages/9 Migracije/Migracije_Masovne_E" },
        { name: "Mjesta (E)", path: "/pages/10 Mjesta/Mjesta_E" },
        { name: "Kuće (E)", path: "/pages/11 Kucedomacin/Kucedomacin_E" },
        { name: "Popisi (E)", path: "/pages/15 Popisi/Popisi_E" },
        { name: "Župe (E)", path: "/pages/20 Zupe/Zupe_E" },
        { name: "Izvori (E)", path: "/pages/21 Izvori/Izvori_E" },
        { name: "Države (E)", path: "/pages/30 Drzava/Drzava_E" },
        { name: "Katastar (E)", path: "/pages/31 Katastar/Katastar_E" },
        { name: "Pismo (E)", path: "/pages/40 Pismo/Pismo_E" },
        { name: "Bolesti (E)", path: "/pages/70 Bolesti/Bolesti_E" },
        { name: "Groblje (E)", path: "/pages/71 Groblje/Groblje_E" }
      ]
    },
    {
      name: "Rodovi",
      children: [
        {
          name: "Bosna",
          children: [
            { name: "Generacije", path: "/pages/71 Groblje/Groblje_E" },
            { name: "Obitelji", path: "/pages/71 Groblje/Groblje_E" },
            { name: "Migracije", path: "/pages/71 Groblje/Groblje_E" },
            { name: "Mjesta", path: "/pages/71 Groblje/Groblje_E" }
          ]
        },
        {
          name: "XXXX",
          children: [
            { name: "Generacije", path: "/pages/71 Groblje/Groblje_E" },
            { name: "Obitelji", path: "/pages/71 Groblje/Groblje_E" },
            { name: "Migracije", path: "/pages/71 Groblje/Groblje_E" },
            { name: "Mjesta", path: "/pages/71 Groblje/Groblje_E" }
          ]
        },
        {
          name: "Durbovaćka",
          children: [
            { name: "Generacije", path: "/pages/71 Groblje/Groblje_E" },
            { name: "Obitelji", path: "/pages/71 Groblje/Groblje_E" },
            { name: "Migracije", path: "/pages/71 Groblje/Groblje_E" },
            { name: "Mjesta", path: "/pages/71 Groblje/Groblje_E" }
          ]
        }
      ]
    }
  ],

  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  root: "src"
};
