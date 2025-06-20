<!-- Na vrhu stranice -->
<script type="module">
  import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
  import notebook from "https://api.observablehq.com/d/f777e930c0aec7f8@217.js?api_key=6184...";

  const main = new Runtime().module(notebook, name => {
    const dom = document.getElementById(name);
    return Inspector.into(dom);
  });
</script>

<!-- Tampon za sve cell-ove iz notebooka -->
<div id="chart"></div>
<div id="anotherCell"></div>
