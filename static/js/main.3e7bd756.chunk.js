(this.webpackJsonpmytodo=this.webpackJsonpmytodo||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(4),r=n.n(o),l=(n(12),n(6)),i=n(2),u=(n(13),function(e){var t=e.children;return a.a.createElement("div",{className:"TodoTemplate"},a.a.createElement("div",{className:"app-title"},"\ub9ac\uc561\ud2b8 \uc2a4\ud130\ub514 \uccb4\ud06c\ub9ac\uc2a4\ud2b8"),a.a.createElement("div",{className:"content"},t))}),d=n(1),s=(n(14),function(e){var t=e.onInsert,n=Object(c.useState)(""),o=Object(i.a)(n,2),r=o[0],l=o[1],u=Object(c.useCallback)((function(e){l(e.target.value)}),[]),s=Object(c.useCallback)((function(e){t(r),l(""),e.preventDefault()}),[t,r]);return a.a.createElement("form",{className:"TodoInsert",onSubmit:s},a.a.createElement("input",{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:r,onChange:u}),a.a.createElement("button",{type:"submit"},a.a.createElement(d.a,null)))}),m=n(5),f=n.n(m),h=(n(15),function(e){var t=e.todo,n=e.onRemove,c=e.onToggle,o=t.id,r=t.text,l=t.checked;return a.a.createElement("div",{className:"TodoListItem"},a.a.createElement("div",{className:f()("checkbox",{checked:l}),onClick:function(){return c(o)}},l?a.a.createElement(d.b,null):a.a.createElement(d.c,null),a.a.createElement("div",{className:"text"},r)),a.a.createElement("div",{className:"remove",onClick:function(){return n(o)}},a.a.createElement(d.d,null)))}),k=(n(16),function(e){var t=e.todos,n=e.onRemove,c=e.onToggle;return a.a.createElement("div",{className:"TodoList"},t.map((function(e){return a.a.createElement(h,{todo:e,key:e.id,onRemove:n,onToggle:c})})))}),v=function(){var e=Object(c.useState)([{id:1,text:"\uac1c\ubc1c\ud658\uacbd \uad6c\ucd95",checked:!0},{id:2,text:"\ucef4\ud3ec\ub10c\ud2b8 \uc81c\uc791",checked:!0},{id:3,text:"JSX",checked:!0},{id:4,text:"props\uc640 state",checked:!0},{id:5,text:"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub9c1",checked:!0},{id:6,text:"ref:DOM\uc5d0 \uc774\ub984 \ub2ec\uae30",checked:!0},{id:7,text:"\ubc30\uc5f4\ub2e4\ub8e8\uae30(1) \uc0dd\uc131\uacfc \ub80c\ub354\ub9c1",checked:!0},{id:8,text:"\ubc30\uc5f4\ub2e4\ub8e8\uae30(2) \uc81c\uac70\uc640 \uc218\uc815",checked:!0},{id:9,text:"LifeCycle API",checked:!1},{id:10,text:"Hooks",checked:!1},{id:11,text:"\ucef4\ud3ec\ub10c\ud2b8 \uc2a4\ud0c0\uc77c\ub9c1",checked:!0}]),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useRef)(12),d=Object(c.useCallback)((function(e){var t={id:r.current,text:e,checked:!1};o(n.concat(t)),r.current+=1}),[n]),m=Object(c.useCallback)((function(e){o(n.filter((function(t){return t.id!==e})))}),[n]),f=Object(c.useCallback)((function(e){o(n.map((function(t){return t.id===e?Object(l.a)({},t,{checked:!t.checked}):t})))}),[n]);return a.a.createElement(u,null,a.a.createElement(s,{onInsert:d}),a.a.createElement(k,{todos:n,onRemove:m,onToggle:f}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.3e7bd756.chunk.js.map