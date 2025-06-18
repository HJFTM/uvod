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
      name: "Prezime",
      pages: [
        {name: "Vrste", path: "/pages/1_Prezime/prezime_vrste"},
        {name: "Povijest", path: "/pages/1_Prezime/prezime_povijest"}
      ]
    } , 
        {
      name: "Jularić",
      pages: [
        {name: "Prezime Jular-ić (K)", path: "/pages/1_Jularic/01.1.prezime_ilaric"},
        {name: "Evolucija zapisa (V)", path: "/pages/1_Jularic/01.2.evolucija"},
        {name: "Prezime (E)",          path: "/pages/1_Jularic/01.3.prezime_e"}
      ]
    }, 
        {
      name: "Generacije",
      pages: [
        {name: "Generacije (K)", path: "/pages/2 Generacije/Generacije_K"},
        {name: "Generacije (R)", path: "/pages/2 Generacije/Generacije_R"}
      ]
    } , 
        {
      name: "Obitelji",
      pages: [
        {name: "Obitelji (K)", path: "/pages/2 Obitelji/Obitelji_K"},
        {name: "Obitelji (R)", path: "/pages/2 Obitelji/Obitelji_R"},
        {name: "Obitelji (E)", path: "/pages/2 Obitelji/Obitelji_E"},
        {name: "Obitelji Zapisi", path: "/pages/2 Obitelji/Obitelj_Zapisi"}
      ]
    } , 

            {
      name: "Migracije",
      pages: [
        {name: "Migracije (K)", path: "/pages/9 Migracije/Migracije_K"},
        {name: "Migracije (R)", path: "/pages/9 Migracije/Migracije_R"},
        {name: "Migracije Individualne (E)", path: "/pages/9 Migracije/Migracije_Individualne_E"},
        {name: "Migracije Masovne (E)", path: "/pages/9 Migracije/Migracije_Masovne_E"}
      ]
    } , 
             {
      name: "Mjesta",
      pages: [
        {name: "Mjesta (K)", path: "/pages/10 Mjesta/Mjesta_K"},
        {name: "Mjesta (R)", path: "/pages/10 Mjesta/Mjesta_R"},
        {name: "Mjesta (E)", path: "/pages/10 Mjesta/Mjesta_E"}
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
