<div id="observablehq-viewof-rod_selected_view-8f5c4010"></div>
<div id="observablehq-viewof-mjesto_selected_view-8f5c4010"></div>
<div id="observablehq-viewof-view_obitelj_selected-8f5c4010"></div>
<div id="observablehq-selected-8f5c4010"></div>
<p>Credit: <a href="https://observablehq.com/d/50c3ea95248bfea1@497">OBITELJ Zapisi by FTM</a></p>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/50c3ea95248bfea1@497.js?v=4";
new Runtime().module(define, name => {
  if (name === "viewof rod_selected_view") return new Inspector(document.querySelector("#observablehq-viewof-rod_selected_view-8f5c4010"));
  if (name === "viewof mjesto_selected_view") return new Inspector(document.querySelector("#observablehq-viewof-mjesto_selected_view-8f5c4010"));
  if (name === "viewof view_obitelj_selected") return new Inspector(document.querySelector("#observablehq-viewof-view_obitelj_selected-8f5c4010"));
  if (name === "selected") return new Inspector(document.querySelector("#observablehq-selected-8f5c4010"));
});
</script>
