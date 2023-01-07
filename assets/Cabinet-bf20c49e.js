import{o as c,c as n,a as e,_ as d,r as f,b as s,d as l,e as r,f as x,w as g}from"./index-f78a5151.js";function b(t,a){return c(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z"})])}function z(t,a){return c(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z","clip-rule":"evenodd"})])}function M(t,a){return c(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"})])}function B(t,a){return c(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"}),e("path",{d:"M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"})])}const $={computed:{isOpen(){return this.$store.state.drawer.open}},methods:{closeDrawer(){this.$store.commit("drawer/setOpen",!1)}},components:{AdjustmentsVerticalIcon:b,ChartBarIcon:M,BeakerIcon:z,HomeIcon:B}},C={class:"drawer drawer-mobile"},I=["checked"],k={class:"drawer-content flex flex-col items-center justify-center"},A={class:"drawer-side"},V={class:"menu p-4 w-80 bg-base-200 text-base-content"};function D(t,a,u,h,v,o){const i=r("HomeIcon"),p=r("ChartBarIcon"),_=r("BeakerIcon"),w=r("AdjustmentsVerticalIcon");return c(),n("div",C,[e("input",{type:"checkbox",class:"drawer-toggle",checked:o.isOpen},null,8,I),e("div",k,[f(t.$slots,"default")]),e("div",A,[e("label",{onClick:a[0]||(a[0]=(...m)=>o.closeDrawer&&o.closeDrawer(...m)),class:"drawer-overlay"}),e("ul",V,[e("li",null,[e("a",null,[s(i,{class:"w-6 h-6"}),l("Dashboard")])]),e("li",null,[e("a",null,[s(p,{class:"w-6 h-6"}),l("Statistic")])]),e("li",null,[e("a",null,[s(_,{class:"w-6 h-6"}),l("Manage")])]),e("li",null,[e("a",null,[s(w,{class:"w-6 h-6"}),l("Settings")])])])])])}const H=d($,[["render",D]]),j={components:{Drawer:H}},y=e("div",{class:"hero min-h-screen bg-base-200"},[e("div",{class:"hero-content text-center"},[e("div",{class:"max-w-md"},[e("h1",{class:"text-5xl font-bold"},"Cabinet"),e("p",{class:"py-6"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro obcaecati at eveniet, ratione, inventore beatae laborum quis ab soluta, pariatur dolore accusamus. Explicabo quasi sequi omnis! Soluta, officia est. ")])])],-1);function S(t,a,u,h,v,o){const i=r("Drawer");return c(),x(i,null,{default:g(()=>[y]),_:1})}const E=d(j,[["render",S]]);export{E as default};
