(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2/hA":function(t,a,e){"use strict";e.r(a);var n=e("wHSu"),s=e("rT2p"),i=e("3Zo4"),o=e("nqqA"),r=e("9HyH"),l={name:"FreshButton",components:{BDropdown:i.a,BDropdownItem:o.a,BDropdownDivider:r.a,FontAwesomeIcon:s.a},data:function(){return{running:!1}},computed:{faSpinner:function(){return n.d}}},c=e("KHd+"),d=Object(c.a)(l,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BDropdown",{staticStyle:{width:"6.5em"},attrs:{right:"",size:"sm",split:"",variant:"warning"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t.running?[e("FontAwesomeIcon",{attrs:{icon:t.faSpinner,spin:""}})]:[t._v("Fresh")]]},proxy:!0}])},[t._v(" "),e("BDropdownItem",[t._v("\n        Fresh\n        "),e("small",{staticClass:"d-block text-muted"},[t._v("Drop tables & apply all migrations")])]),t._v(" "),e("BDropdownItem",[t._v("\n        Fresh + Seed "),e("small",{staticClass:"text-muted"},[t._v("(Default)")])]),t._v(" "),e("BDropdownDivider"),t._v(" "),e("BDropdownItem",[t._v("\n        Refresh\n        "),e("small",{staticClass:"d-block text-muted"},[t._v("Rollback & apply all migrations")])]),t._v(" "),e("BDropdownItem",[t._v("\n        Refresh + Seed\n    ")]),t._v(" "),e("BDropdownDivider"),t._v(" "),e("BDropdownItem",[t._v("\n        Seed only\n    ")])],1)}),[],!1,null,null,null).exports,m={name:"MigrationsListRow",props:{migration:{type:Object,required:!0}},components:{BDropdown:i.a,BDropdownItem:o.a,BDropdownDivider:r.a,FontAwesomeIcon:s.a},data:function(){return{running:!1}}},u={name:"MigrationsList",components:{MigrationsListRow:Object(c.a)(m,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{class:t.migration.file?"":"table-danger"},[e("td",{staticClass:"align-middle"},[t.migration.date?e("span",[t._v(t._s(t.migration.date))]):e("span",{staticClass:"text-muted"},[t._v("(Unknown)")])]),t._v(" "),e("td",{staticClass:"align-middle"},[e("span",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:t.migration.relPath}},[t.migration.file?e("a",{attrs:{href:"#","data-toggle":"modal","data-target":"#migration-popup","data-path":t.migration.relPath}},[t._v("\n                "+t._s(t.migration.title)+"\n            ")]):[t._v("\n                "+t._s(t.migration.title)+"\n                "),e("span",{staticClass:"badge badge-danger"},[t._v("File Missing!")])]],2)]),t._v(" "),e("td",{staticClass:"align-middle"},[t.migration.batch?e("span",{staticClass:"badge badge-pill badge-success"},[t._v("Applied – Batch "+t._s(t.migration.batch))]):e("span",{staticClass:"badge badge-pill badge-warning"},[t._v("Pending")])]),t._v(" "),e("td",{staticClass:"align-middle text-right"},[e("div",{staticClass:"btn-group"},[t.migration.file?void t.migration.batch:void 0],2)])])}),[],!1,null,null,null).exports,FreshButton:d,FontAwesomeIcon:s.a},data:function(){return{migrations:[]}},computed:{faQuestionCircle:function(){return n.c}}},p=Object(c.a)(u,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card shadow-sm mb-3"},[e("div",{staticClass:"card-header bg-secondary text-white",staticStyle:{"line-height":"1.2","padding-left":"0.80em","padding-right":"0.80em"}},[e("a",{staticClass:"float-right text-white",attrs:{href:"https://laravel.com/docs/migrations",target:"_blank"}},[e("FontAwesomeIcon",{attrs:{icon:t.faQuestionCircle}}),t._v("\n            Laravel Docs\n        ")],1),t._v(" "),e("h6",{staticClass:"m-0"},[t._v("Migrations")])]),t._v(" "),e("table",{staticClass:"table table-hover bg-white mb-0"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Date / Time")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),e("th",{staticClass:"align-middle font-weight-normal text-muted text-right",attrs:{scope:"col"}},[e("FreshButton")],1)])]),t._v(" "),t.migrations.length?e("tbody",t._l(t.migrations,(function(t){return e("MigrationsListRow",{key:t.id,attrs:{migration:t}})})),1):e("tbody",[t._m(0)])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{attrs:{colspan:"4"}},[a("em",{staticClass:"text-muted"},[this._v("No migrations found.")])])])}],!1,null,null,null).exports,g=e("wKV1"),v={name:"TablesList",components:{FontAwesomeIcon:s.a},data:function(){return{connection:"TODO",database:"TODO",tables:[]}},computed:{faPlug:function(){return n.b},faDatabase:function(){return n.a}}},_=Object(c.a)(v,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card shadow-sm"},[e("div",{staticClass:"card-header bg-secondary text-white",staticStyle:{"line-height":"1.2","padding-left":"0.80em","padding-right":"0.80em"}},[e("span",{staticStyle:{cursor:"default"},attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Connection"}},[e("FontAwesomeIcon",{staticClass:"mr-1",attrs:{icon:t.faPlug}}),t._v("\n            "+t._s(t.connection)+"\n        ")],1),t._v(" "),e("span",{staticClass:"ml-3",staticStyle:{cursor:"default"},attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Database"}},[e("FontAwesomeIcon",{staticClass:"mr-1",attrs:{icon:t.faDatabase}}),t._v("\n            "+t._s(t.database)+"\n        ")],1)]),t._v(" "),e("table",{staticClass:"table table-hover bg-white mb-0"},[t._m(0),t._v(" "),t.tables.length?e("tbody",t._l(t.tables,(function(a){return e("tr",[e("td",{staticClass:"align-middle"},[t._v("\n                    "+t._s(a)+"\n                ")])])})),0):e("tbody",[t._m(1)])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[this._v("\n                    Tables\n                ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{attrs:{colspan:"1"}},[a("em",{staticClass:"text-muted"},[this._v("No tables found.")])])])}],!1,null,null,null).exports,h={components:{MigrationsList:p,Navbar:g.a,TablesList:_}},b=Object(c.a)(h,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("Navbar"),this._v(" "),a("div",{staticClass:"container-fluid mt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl"},[a("MigrationsList")],1),this._v(" "),a("div",{staticClass:"col-xl-4"},[a("TablesList")],1)])])],1)}),[],!1,null,null,null);a.default=b.exports}}]);