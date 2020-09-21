'use strict';

function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}

/* src/components/Sections/Sponsors.svelte generated by Svelte v3.24.0 */

const css = {
	code: ".background.svelte-1tp73ch.svelte-1tp73ch{--small-padding:var(--media-lte-sm) 50px;padding:var(--small-padding, 200px 40px 50px 40px);background:#2b636c;background-image:url(/dist/static/images/lake.svg);background-position:top;background-repeat:no-repeat;--mobile-backgrounds:var(--media-lte-sm) auto 130px;background-size:var(--mobile-backgrounds, auto 150px)}.container.svelte-1tp73ch.svelte-1tp73ch{display:grid;--small-grid:var(--media-lte-sm) 0;grid-gap:var(--small-grid, 30px);max-width:var(--container-width);--small-margin:var(--media-lte-sm) 0px 20px -50px 20px;margin:var(--small-margin, -120px auto 70px auto);--small-padding:var(--media-lte-sm) 50px 0;padding:var(--small-padding, initial)}h2.svelte-1tp73ch.svelte-1tp73ch{--small-font:var(--media-lte-sm) 34px;font-size:var(--small-font, 60px);font-family:\"Anton\";line-height:150%;text-align:center}.sponsors.svelte-1tp73ch.svelte-1tp73ch{width:100%;display:grid;grid-gap:43px}.sponsors+.sponsors.svelte-1tp73ch.svelte-1tp73ch{--small-top:var(--media-lte-sm) 40px;margin-top:var(--small-top, 0)}.gold.svelte-1tp73ch.svelte-1tp73ch{grid-template-columns:repeat(auto-fit, minmax(300px, 1fr))}.silver.svelte-1tp73ch.svelte-1tp73ch{grid-template-columns:repeat(auto-fit, minmax(150px, 1fr))}.sponsor.svelte-1tp73ch.svelte-1tp73ch{display:grid;justify-content:center;align-items:center;background:#1c464d;padding:30px 50px}.sponsor.svelte-1tp73ch span.svelte-1tp73ch{color:#e4eef0;font-size:18px;opacity:0.5}.silver.sponsors.svelte-1tp73ch .sponsor.svelte-1tp73ch{padding:20px 40px}.silver.sponsors.svelte-1tp73ch span.svelte-1tp73ch{font-size:16px}.gold.svelte-1tp73ch img.svelte-1tp73ch{height:66px;max-height:66px}.silver.svelte-1tp73ch img.svelte-1tp73ch{height:50px;max-height:50px}.info.svelte-1tp73ch.svelte-1tp73ch{margin:0 auto;margin-top:40px;max-width:575px;text-align:center}[data-tooltip].svelte-1tp73ch.svelte-1tp73ch{position:relative}[data-tooltip].svelte-1tp73ch.svelte-1tp73ch:before,[data-tooltip].svelte-1tp73ch.svelte-1tp73ch:after{position:absolute;visibility:hidden;opacity:0;transition:opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,\n    transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);transform:translate3d(0, 0, 0);pointer-events:none}[data-tooltip].svelte-1tp73ch.svelte-1tp73ch:hover:before,[data-tooltip].svelte-1tp73ch.svelte-1tp73ch:hover:after,[data-tooltip].svelte-1tp73ch.svelte-1tp73ch:focus:before,[data-tooltip].svelte-1tp73ch.svelte-1tp73ch:focus:after{visibility:visible;opacity:1}[data-tooltip].svelte-1tp73ch.svelte-1tp73ch:after{z-index:1000;padding:8px;width:260px;background-color:#000;background-color:hsla(0, 0%, 20%, 0.9);color:#fff;font-weight:normal;content:attr(data-tooltip);font-size:14px;line-height:1.2}[data-tooltip].svelte-1tp73ch.svelte-1tp73ch:before,[data-tooltip].svelte-1tp73ch.svelte-1tp73ch:after{top:100%;--small-adjust:var(--media-lte-sm) calc(50% - 138px);left:var(--small-adjust, calc(70% - 138px))}",
	map: "{\"version\":3,\"file\":\"Sponsors.svelte\",\"sources\":[\"Sponsors.svelte\"],\"sourcesContent\":[\"<style>\\n.background {\\n  --small-padding: var(--media-lte-sm) 50px;\\n  padding: var(--small-padding, 200px 40px 50px 40px);\\n\\n  background: #2b636c;\\n  background-image: url(/dist/static/images/lake.svg);\\n  background-position: top;\\n  background-repeat: no-repeat;\\n\\n  --mobile-backgrounds: var(--media-lte-sm) auto 130px;\\n  background-size: var(--mobile-backgrounds, auto 150px);\\n}\\n.container {\\n  display: grid;\\n  --small-grid: var(--media-lte-sm) 0;\\n  grid-gap: var(--small-grid, 30px);\\n  max-width: var(--container-width);\\n\\n  --small-margin: var(--media-lte-sm) 0px 20px -50px 20px;\\n  margin: var(--small-margin, -120px auto 70px auto);\\n\\n  --small-padding: var(--media-lte-sm) 50px 0;\\n  padding: var(--small-padding, initial);\\n}\\nh2 {\\n  --small-font: var(--media-lte-sm) 34px;\\n  font-size: var(--small-font, 60px);\\n  font-family: \\\"Anton\\\";\\n  line-height: 150%;\\n  text-align: center;\\n}\\n.sponsors {\\n  width: 100%;\\n  display: grid;\\n  grid-gap: 43px;\\n}\\n.sponsors + .sponsors {\\n  --small-top: var(--media-lte-sm) 40px;\\n  margin-top: var(--small-top, 0);\\n}\\n.gold {\\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\\n}\\n.silver {\\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\\n}\\n.sponsor {\\n  display: grid;\\n  justify-content: center;\\n  align-items: center;\\n  background: #1c464d;\\n  padding: 30px 50px;\\n}\\n.sponsor span {\\n  color: #e4eef0;\\n  font-size: 18px;\\n  opacity: 0.5;\\n}\\n\\n.silver.sponsors .sponsor {\\n  padding: 20px 40px;\\n}\\n\\n.silver.sponsors span {\\n  font-size: 16px;\\n}\\n\\n.gold img {\\n  height: 66px;\\n  max-height: 66px;\\n}\\n\\n.silver img {\\n  height: 50px;\\n  max-height: 50px;\\n}\\n.info {\\n  margin: 0 auto;\\n  margin-top: 40px;\\n  max-width: 575px;\\n  text-align: center;\\n}\\n\\n[data-tooltip] {\\n  position: relative;\\n}\\n\\n[data-tooltip]:before,\\n[data-tooltip]:after {\\n  position: absolute;\\n  visibility: hidden;\\n  opacity: 0;\\n  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,\\n    transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);\\n  transform: translate3d(0, 0, 0);\\n  pointer-events: none;\\n}\\n\\n[data-tooltip]:hover:before,\\n[data-tooltip]:hover:after,\\n[data-tooltip]:focus:before,\\n[data-tooltip]:focus:after {\\n  visibility: visible;\\n  opacity: 1;\\n}\\n\\n[data-tooltip]:after {\\n  z-index: 1000;\\n  padding: 8px;\\n  width: 260px;\\n  background-color: #000;\\n  background-color: hsla(0, 0%, 20%, 0.9);\\n  color: #fff;\\n  font-weight: normal;\\n  content: attr(data-tooltip);\\n  font-size: 14px;\\n  line-height: 1.2;\\n}\\n\\n[data-tooltip]:before,\\n[data-tooltip]:after {\\n  top: 100%;\\n\\n  --small-adjust: var(--media-lte-sm) calc(50% - 138px);\\n  left: var(--small-adjust, calc(70% - 138px));\\n}</style>\\n\\n<div class=\\\"background\\\" id=\\\"sponsors\\\">\\n  <div class=\\\"container\\\">\\n    <h2>SPONSORED BY*</h2>\\n    <div class=\\\"gold sponsors\\\">\\n      <a\\n        href=\\\"https://aws.amazon.com/amplify/\\\"\\n        rel=\\\"noopener noreferrer\\\"\\n        target=\\\"_blank\\\"\\n        class=\\\"sponsor\\\"\\n        data-tooltip=\\\"AWS Amplify – The fastest, easiest way to develop mobile and web apps that scale\\\">\\n        <img src=\\\"/dist/static/images/sponsors/aws.svg\\\" alt=\\\"\\\" />\\n      </a>\\n      <a\\n        href=\\\"https://www.coderight.se\\\"\\n        rel=\\\"noopener noreferrer\\\"\\n        target=\\\"_blank\\\"\\n        class=\\\"sponsor\\\">\\n        <img src=\\\"/dist/static/images/sponsors/b3coderight.svg\\\" alt=\\\"\\\" />\\n      </a>\\n      <div class=\\\"sponsor\\\"><span>Sponsor spot open</span></div>\\n    </div>\\n    <div class=\\\"silver sponsors\\\">\\n      <a\\n        href=\\\"https://oasisdigital.com\\\"\\n        rel=\\\"noopener noreferrer\\\"\\n        target=\\\"_blank\\\"\\n        class=\\\"sponsor\\\"\\n        data-tooltip=\\\"Oasis Digital delivers advanced software product development and training services, focused on web technology and full stack solutions.\\\">\\n        <img src=\\\"/dist/static/images/sponsors/oasis.svg\\\" alt=\\\"\\\" />\\n      </a>\\n      <div class=\\\"sponsor\\\"><span>Sponsor spot open</span></div>\\n      <div class=\\\"sponsor\\\"><span>Sponsor spot open</span></div>\\n      <div class=\\\"sponsor\\\"><span>Sponsor spot open</span></div>\\n    </div>\\n    <p class=\\\"info\\\">\\n      *We’re looking for more sponsors for the event. Any financial backing will\\n      be used to support the event and further development of Svelte itself. <a\\n        href=\\\"mailto:sponsors@sveltesociety.dev\\\">Get in touch</a>.\\n    </p>\\n  </div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"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\"}"
};

const Sponsors = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css);

	return `<div class="${"background svelte-1tp73ch"}" id="${"sponsors"}"><div class="${"container svelte-1tp73ch"}"><h2 class="${"svelte-1tp73ch"}">SPONSORED BY*</h2>
    <div class="${"gold sponsors svelte-1tp73ch"}"><a href="${"https://aws.amazon.com/amplify/"}" rel="${"noopener noreferrer"}" target="${"_blank"}" class="${"sponsor svelte-1tp73ch"}" data-tooltip="${"AWS Amplify – The fastest, easiest way to develop mobile and web apps that scale"}"><img src="${"/dist/static/images/sponsors/aws.svg"}" alt="${""}" class="${"svelte-1tp73ch"}"></a>
      <a href="${"https://www.coderight.se"}" rel="${"noopener noreferrer"}" target="${"_blank"}" class="${"sponsor svelte-1tp73ch"}"><img src="${"/dist/static/images/sponsors/b3coderight.svg"}" alt="${""}" class="${"svelte-1tp73ch"}"></a>
      <div class="${"sponsor svelte-1tp73ch"}"><span class="${"svelte-1tp73ch"}">Sponsor spot open</span></div></div>
    <div class="${"silver sponsors svelte-1tp73ch"}"><a href="${"https://oasisdigital.com"}" rel="${"noopener noreferrer"}" target="${"_blank"}" class="${"sponsor svelte-1tp73ch"}" data-tooltip="${"Oasis Digital delivers advanced software product development and training services, focused on web technology and full stack solutions."}"><img src="${"/dist/static/images/sponsors/oasis.svg"}" alt="${""}" class="${"svelte-1tp73ch"}"></a>
      <div class="${"sponsor svelte-1tp73ch"}"><span class="${"svelte-1tp73ch"}">Sponsor spot open</span></div>
      <div class="${"sponsor svelte-1tp73ch"}"><span class="${"svelte-1tp73ch"}">Sponsor spot open</span></div>
      <div class="${"sponsor svelte-1tp73ch"}"><span class="${"svelte-1tp73ch"}">Sponsor spot open</span></div></div>
    <p class="${"info svelte-1tp73ch"}">*We’re looking for more sponsors for the event. Any financial backing will
      be used to support the event and further development of Svelte itself. <a href="${"mailto:sponsors@sveltesociety.dev"}">Get in touch</a>.
    </p></div></div>`;
});

module.exports = Sponsors;
