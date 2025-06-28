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
         {name: "Naslovnica",   path: "/pages/0 Uvod/naslovnica"},
         {name: "Uvod",         path: "/pages/0 Uvod/uvod"},
         {name: "Događaji",     path: "/pages/0 Uvod/dogadjaji"}
      ]
     },
     {
      name: "Jularić",
      pages: [
        {name: "Prezime Jular-ić (K)", path: "/pages/1_Jularic/01.1.prezime_ilaric"},
        {name: "Slična prezimena (K)", path: "/pages/1_Prezime/prezime_slicno"},        
        {name: "Evolucija zapisa (V)", path: "/pages/1_Jularic/01.2.evolucija"},
        
        {name: "Generacije (K)",       path: "/pages/KONCEPT/Generacije_K"},
        {name: "Obitelji (K)",         path: "/pages/KONCEPT/Obitelji_K"},
        {name: "Brakovi (K)",           path: "/pages/KONCEPT/Brakovi_K"},  
        {name: "Povezane obitelji (K)", path: "/pages/KONCEPT/Obitelji_povezane_K"},          
        {name: "Zapisi (K)",           path: "/pages/KONCEPT/Zapisi_K"},
        {name: "Migracije (K)",        path: "/pages/KONCEPT/Migracije_K"}, 
        {name: "Migracije (K)",        path: "/pages/KONCEPT/Migracije_masovne_K"}, 
        
        {name: "Mjesta (K)",           path: "/pages/KONCEPT/Mjesta_K"},  
        {name: "Kuće (K)",             path: "/pages/KONCEPT/Kucedomacin_K"},
        {name: "Popis stanocnika (K)", path: "/pages/KONCEPT/Popis_stanovnika_K"},
        {name: "Države (K)",           path: "/pages/KONCEPT/Drzava_K"},
        {name: "Župe (K)",             path: "/pages/KONCEPT/Zupe_K"}, 
        
        {name: "Izvori* (K)",          path: "/pages/KONCEPT/Popisi_K"},
        {name: "Pismo (K)",            path: "/pages/KONCEPT/Pismo_K"}, 
        {name: "Bolesti (K)",          path: "/pages/KONCEPT/Bolesti_K"},
        {name: "Groblje (K)",          path: "/pages/KONCEPT/Groblje_K"}

      ]
    }, 
    
    {
      name: "Rod (Bosna)",
      pages: [
        {name: "Prezime (R)",         path: "/pages/1_Jularic/prezime_r"},
        {name: "Generacije (R)",      path: "/pages/ROD/Generacije_R"},
        {name: "Obitelji (R)",        path: "/pages/ROD/Obitelji_R"},
        {name: "Stablo (R)",          path: "/pages/ROD/Stablo_R"},        
        {name: "Zapisi (R)",          path: "/pages/ROD/Zapisi_R"},        
        {name: "Migracije (R)",       path: "/pages/ROD/Migracije_R"},  
        
        {name: "Mjesta (R)",          path: "/pages/ROD/Mjesta_R"},
        {name: "Mjesta-zapisi (R)",          path: "/pages/KONCEPT/Mjesta_zapisi_R"},          
        {name: "Župe (R)",            path: "/pages/ROD/Zupe_D"}, 
        {name: "Župe Rodos. (R)",     path: "/pages/ROD/Zupe_rodoslovlje_R"}, 
        {name: "Župe Obitelji (R)",     path: "/pages/ROD/Zupe_obitelji_R"}, 
        
        {name: "Izvori* (D)",         path: "/pages/ROD/Popisi_D"},   
        {name: "Pismo (D)",           path: "/pages/ROD/Pismo_D"},
        {name: "Bolesti (D)",         path: "/pages/ROD/Bolesti_D"},
        {name: "Groblje (D)",         path: "/pages/ROD/Groblje_D"},
     
      ]
    } , 
    {
      name: "Entiteti",
      pages: [
        {name: "1700. Marko", path: "/pages/ENTITET/Obitelji_E?OBITELJ=1700. Marko"},
        
        {name: "Obitelji (E)", path: "/pages/ENTITET/Obitelji_E"},
        
        {name: "Obitelji (Z)", path: "/pages/ENTITET/Obitelj_Zapisi"},
        {name: "Zapisi (E)",   path: "/pages/ENTITET/Zapisi_E"},        
        {name: "Mig. Ind. (E)", path: "/pages/ENTITET/Migracije_Individualne_E"},
        {name: "Masovne (E)",   path: "/pages/ENTITET/Migracije_Masovne_E"},
        
        {name: "Kuće (E)",    path: "/pages/ENTITET/Kucedomacin_E"},
        {name: "Mjesta (E)",  path: "/pages/ENTITET/Mjesta_E"},
        {name: "Župe (E)",    path: "/pages/ENTITET/Zupe_E"},
        {name: "Države (E)",  path: "/pages/ENTITET/Drzava_E"},         
        
        {name: "Izvori* (E)",  path: "/pages/ENTITET/Popisi_E"},             
        {name: "Pismo (E)",   path: "/pages/ENTITET/Pismo_E"},
        {name: "Bolesti (E)", path: "/pages/ENTITET/Bolesti_E"},
        {name: "Groblje (E)", path: "/pages/ENTITET/Groblje_E"}
      ]
    },

    {
      name: "Popovići",
      pages: [
          {name: "1714. Mato", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1714. Mato"},
          {name: "1725. Ivan", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1725. Ivan"},
          {name: "1741. Matia", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1741. Matia"},
          {name: "1727. Petar", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1727. Petar"},
          {name: "1742. Stjepan", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1742. Stjepan"},
          {name: "1748. Nikola", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1748. Nikola"},
          {name: "1753. Ružica", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1753. Ružica"},
          {name: "1758. Petruša", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1758. Petruša"},
          {name: "1746. Vida", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1746. Vida"},
          {name: "1760. Ivana", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1760. Ivana"},
          {name: "1765. Ivan", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1765. Ivan"},
          {name: "1770. Ivan", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1770. Ivan"},
          {name: "1770. Kata", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1770. Kata"},
          {name: "1772. Božo", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1772. Božo"},
          {name: "1756. Petar ", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1756. Petar "},
          {name: "1758. Mio", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1758. Mio"},
          {name: "1758. Pavo", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1758. Pavo"},
          {name: "1762. Maria", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1762. Maria"},
          {name: "1766. Marko", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1766. Marko"},
          {name: "1789. Marko", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1789. Marko"},
          {name: "1780. Tomuša", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1780. Tomuša"},
          {name: "1788. Kata", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1788. Kata"},
          {name: "1794. Cecilia", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1794. Cecilia"},
          {name: "1779. Maria", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1779. Maria"},
          {name: "1780. Ružica", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1780. Ružica"},
          {name: "1834. Ivan", path:"/pages/ENTITET/Obitelji_E?OBITELJ=1834. Ivan"},
      ]
    },
     
  {
      name: "Izvori",
      pages: [
        {name: "Prezime (E)",          path: "/pages/1_Jularic/01.3.prezime_e"},

        {name: "Katastar (K)",         path: "/pages/KONCEPT/Katastar_K"},  
        {name: "Katastar (D)",         path: "/pages/ROD/Katastar_D"},
        {name: "Katastar (E)",         path: "/pages/ENTITET/Katastar_E"},   
        
        {name: "Izvori (K)",           path: "/pages/KONCEPT/Izvori_K"},
        {name: "Izvori (D)",          path: "/pages/ROD/Izvori_D"},   
        {name: "Izvori (E)",            path: "/pages/ENTITET/Izvori_E"}          
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
