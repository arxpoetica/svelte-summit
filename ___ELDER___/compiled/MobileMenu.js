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
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
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

/* src/components/Hero/MobileMenu.svelte generated by Svelte v3.24.0 */

const css = {
	code: ".container.svelte-r3oh4p{background:#17353a;position:fixed;z-index:1001;top:0;left:0;right:0;bottom:0;overflow:hidden}ul.svelte-r3oh4p{padding-top:100px;padding-bottom:100px;display:grid;grid-gap:40px;list-style:none}li.svelte-r3oh4p{text-transform:uppercase;font-family:Anton;font-size:48px;line-height:120%}a.svelte-r3oh4p:hover{color:white;opacity:1}a.svelte-r3oh4p{color:var(--sky-blue);opacity:0.6;text-decoration:none;letter-spacing:0.6px}button.svelte-r3oh4p{position:absolute;top:6px;right:6px}img.svelte-r3oh4p{padding:30px}",
	map: "{\"version\":3,\"file\":\"MobileMenu.svelte\",\"sources\":[\"MobileMenu.svelte\"],\"sourcesContent\":[\"<script>\\nexport let menu;\\n</script>\\n\\n<style>\\n.container {\\n  background: #17353a;\\n  position: fixed;\\n  z-index: 1001;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  overflow: hidden;\\n}\\nul {\\n  padding-top: 100px;\\n  padding-bottom: 100px;\\n  display: grid;\\n  grid-gap: 40px;\\n  list-style: none;\\n}\\nli {\\n  text-transform: uppercase;\\n  font-family: Anton;\\n  font-size: 48px;\\n  line-height: 120%;\\n}\\na:hover {\\n  color: white;\\n  opacity: 1;\\n}\\na {\\n  color: var(--sky-blue);\\n  opacity: 0.6;\\n  text-decoration: none;\\n  letter-spacing: 0.6px;\\n}\\nbutton {\\n  position: absolute;\\n  top: 6px;\\n  right: 6px;\\n}\\nimg {\\n  padding: 30px;\\n}</style>\\n\\n<div class=\\\"container\\\">\\n  <ul>\\n    {#each menu as { name, url }}\\n      <li><a on:click href=\\\"/{url}\\\">{name}</a></li>\\n    {/each}\\n    <li><a href=\\\"https://forms.gle/6PBKXng9jfrvxjhX8\\\" rel=\\\"noreferrer\\\" target=\\\"_blank\\\"> Sign up </a></li>\\n    <li><a target=\\\"_blank\\\" href=\\\"https://twitter.com/sveltesociety\\\">Twitter</a></li>\\n  </ul>\\n  <button on:click> <img src=\\\"dist/static/images/close.svg\\\" alt=\\\"\\\" /> </button>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAKA,UAAU,cAAC,CAAC,AACV,UAAU,CAAE,OAAO,CACnB,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,MAAM,AAClB,CAAC,AACD,EAAE,cAAC,CAAC,AACF,WAAW,CAAE,KAAK,CAClB,cAAc,CAAE,KAAK,CACrB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,IAAI,CACd,UAAU,CAAE,IAAI,AAClB,CAAC,AACD,EAAE,cAAC,CAAC,AACF,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,KAAK,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,AACnB,CAAC,AACD,eAAC,MAAM,AAAC,CAAC,AACP,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,CAAC,cAAC,CAAC,AACD,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,OAAO,CAAE,GAAG,CACZ,eAAe,CAAE,IAAI,CACrB,cAAc,CAAE,KAAK,AACvB,CAAC,AACD,MAAM,cAAC,CAAC,AACN,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,KAAK,CAAE,GAAG,AACZ,CAAC,AACD,GAAG,cAAC,CAAC,AACH,OAAO,CAAE,IAAI,AACf,CAAC\"}"
};

const MobileMenu = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { menu } = $$props;
	if ($$props.menu === void 0 && $$bindings.menu && menu !== void 0) $$bindings.menu(menu);
	$$result.css.add(css);

	return `<div class="${"container svelte-r3oh4p"}"><ul class="${"svelte-r3oh4p"}">${each(menu, ({ name, url }) => `<li class="${"svelte-r3oh4p"}"><a href="${"/" + escape(url)}" class="${"svelte-r3oh4p"}">${escape(name)}</a></li>`)}
    <li class="${"svelte-r3oh4p"}"><a href="${"https://forms.gle/6PBKXng9jfrvxjhX8"}" rel="${"noreferrer"}" target="${"_blank"}" class="${"svelte-r3oh4p"}">Sign up </a></li>
    <li class="${"svelte-r3oh4p"}"><a target="${"_blank"}" href="${"https://twitter.com/sveltesociety"}" class="${"svelte-r3oh4p"}">Twitter</a></li></ul>
  <button class="${"svelte-r3oh4p"}"><img src="${"dist/static/images/close.svg"}" alt="${""}" class="${"svelte-r3oh4p"}"></button></div>`;
});

module.exports = MobileMenu;
