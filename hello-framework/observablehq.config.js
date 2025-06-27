// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Jularić",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
   pages: [
     {
       name: "Uvod",
       pages: [
         {name: "Naslovnica", path: "/pages/0 Uvod/naslovnica"},
         {name: "Uvod", path: "/pages/0 Uvod/uvod"}
      ]
     },
     {
      name: "Jularić",
      pages: [
        {name: "Prezime Jular-ić (K)", path: "/pages/1_Jularic/01.1.prezime_ilaric"},
        {name: "Evolucija zapisa (V)", path: "/pages/1_Jularic/01.2.evolucija"},
        {name: "Generacije (K)",       path: "/pages/2 Generacije/Generacije_K"},
        {name: "Obitelji (K)",         path: "/pages/2 Obitelji/Obitelji_K"},
        {name: "Zapisi (K)",           path: "/pages/5 Zapisi/Zapisi_K"},
        {name: "Migracije (K)",        path: "/pages/9 Migracije/Migracije_K"}, 

        {name: "Mjesta (K)",           path: "/pages/10 Mjesta/Mjesta_K"},  
        {name: "Kuće (K)",             path: "/pages/11 Kucedomacin/Kucedomacin_K"},
        {name: "Države (K)",           path: "/pages/30 Drzava/Drzava_K"},
        {name: "Župe (K)",             path: "/pages/20 Zupe/Zupe_K"}, 
        
        {name: "Izvori (K)",           path: "/pages/15 Popisi/Popisi_K"},
        {name: "Pismo (K)",            path: "/pages/40 Pismo/Pismo_K"}, 
        {name: "Bolesti (K)",          path: "/pages/70 Bolesti/Bolesti_K"},
        {name: "Groblje (K)",          path: "/pages/71 Groblje/Groblje_K"}

      ]
    }, 
    
    {
      name: "Rod (Bosna)",
      pages: [
        {name: "Prezime (R)",         path: "/pages/1_Jularic/prezime_r"},
        {name: "Generacije (R)",      path: "/pages/2 Generacije/Generacije_R"},
        {name: "Obitelji (R)",        path: "/pages/2 Obitelji/Obitelji_R"},
        {name: "Zapisi (R)",          path: "/pages/5 Zapisi/Zapisi_R"},        
        {name: "Migracije (R)",       path: "/pages/9 Migracije/Migracije_R"},   
        {name: "Mjesta (R)",          path: "/pages/10 Mjesta/Mjesta_R"},
        {name: "Župe (R)",            path: "/pages/20 Zupe/Zupe_D"}, 
        {name: "Katastar (D)",        path: "/pages/31 Katastar/Katastar_D"},
        {name: "Pismo (D)",           path: "/pages/40 Pismo/Pismo_D"},
        {name: "Bolesti (D)",         path: "/pages/70 Bolesti/Bolesti_D"},
        {name: "Groblje (D)",         path: "/pages/71 Groblje/Groblje_D"},
        {name: "Izvori (D)",          path: "/pages/21 Izvori/Izvori_D"},
        {name: "Popisi (D)",          path: "/pages/15 Popisi/Popisi_D"},        
      ]
    } , 
    {
      name: "Entiteti",
      pages: [
        {name: "Obitelji (E)", path: "/pages/2 Obitelji/Obitelji_E"},
        {name: "Obitelji (Z)", path: "/pages/2 Obitelji/Obitelj_Zapisi"},
        {name: "Zapisi (E)",           path: "/pages/5 Zapisi/Zapisi_E"},        
        {name: "Migracije Individualne (E)", path: "/pages/9 Migracije/Migracije_Individualne_E"},
        {name: "Migracije Masovne (E)", path: "/pages/9 Migracije/Migracije_Masovne_E"},
        {name: "Mjesta (E)", path: "/pages/10 Mjesta/Mjesta_E"},
        {name: "Kuće (E)", path: "/pages/11 Kucedomacin/Kucedomacin_E"},
        {name: "Popisi (E)", path: "/pages/15 Popisi/Popisi_E"},       
        {name: "Župe (E)", path: "/pages/20 Zupe/Zupe_E"},
        {name: "Izvori (E)", path: "/pages/21 Izvori/Izvori_E"},
        {name: "Države (E)", path: "/pages/30 Drzava/Drzava_E"}, 
        {name: "Katastar (E)", path: "/pages/31 Katastar/Katastar_E"}, 
        {name: "Pismo (E)", path: "/pages/40 Pismo/Pismo_E"},
        {name: "Bolesti (E)", path: "/pages/70 Bolesti/Bolesti_E"},
        {name: "Groblje (E)", path: "/pages/71 Groblje/Groblje_E"}
      ]
    },
          
  {
      name: "Izvori",
      pages: [
        {name: "Prezime (E)",          path: "/pages/1_Jularic/01.3.prezime_e"},

        {name: "Katastar (K)",         path: "/pages/31 Katastar/Katastar_K"},  
        {name: "Izvori (K)",           path: "/pages/21 Izvori/Izvori_K"}, 
      ]
    } ,  
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
