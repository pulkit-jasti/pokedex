(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),o=a.n(s),i=(a(9),a(2)),r=a(0),p=function(e){var t=e.categoryHandler,a=e.optionsHandler,c=e.categoryOptionsList,n=e.searchHandler,s=e.searchInputHandler;return Object(r.jsxs)("header",{children:[Object(r.jsxs)("select",{name:"category",id:"category-menu",onChange:t,children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"type",children:"Type"}),Object(r.jsx)("option",{value:"habitat",children:"Habitat"}),Object(r.jsx)("option",{value:"ability",children:"Ability"}),Object(r.jsx)("option",{value:"color",children:"Colour"}),Object(r.jsx)("option",{value:"shape",children:"Shape"})]}),Object(r.jsx)("select",{name:"category",id:"category-menu",onChange:a,children:c}),Object(r.jsx)("div",{className:"title-container",children:Object(r.jsx)("img",{src:"https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png",alt:""})}),Object(r.jsxs)("form",{action:"",onSubmit:n,children:[Object(r.jsx)("input",{type:"text",onChange:s}),Object(r.jsx)("button",{type:"submit",children:"Search"})]})]})},l=function(e){var t=e.Name,a=e.infoURL,n=Object(c.useState)(""),s=Object(i.a)(n,2),o=s[0],p=s[1];return t=t[0].toUpperCase()+t.slice(1),Object(c.useEffect)((function(){fetch(a).then((function(e){return e.json()})).then((function(e){var t=[];e.types.forEach((function(e){t.push(e.type.name[0].toUpperCase()+e.type.name.slice(1))})),p({imageURL:e.sprites.front_default,type:t.join(", "),weight:e.weight,hp:e.stats[0].base_stat,attack:e.stats[1].base_stat,defense:e.stats[2].base_stat,specialAttack:e.stats[3].base_stat,specialDefense:e.stats[4].base_stat,speed:e.stats[5].base_stat})})).catch(console.log)}),[a]),Object(r.jsxs)("div",{className:"pokemon-card",children:[Object(r.jsx)("div",{className:"img-wrapper",children:Object(r.jsx)("img",{src:o.imageURL,alt:""})}),Object(r.jsx)("h2",{children:t}),Object(r.jsxs)("h5",{children:["Weight: ",o.weight]}),Object(r.jsxs)("h5",{children:["Type: ",o.type]}),Object(r.jsx)("h4",{children:"Stats:"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["HP: ",o.hp]}),Object(r.jsxs)("li",{children:["Attack: ",o.attack]}),Object(r.jsxs)("li",{children:["Defense: ",o.defense]}),Object(r.jsxs)("li",{children:["Special Attack: ",o.specialAttack]}),Object(r.jsxs)("li",{children:["Special Defense: ",o.specialDefense]}),Object(r.jsxs)("li",{children:["Speed: ",o.speed]})]})]})};var j=function(){var e=Object(c.useState)("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),o=Object(i.a)(s,2),j=o[0],h=o[1],b=Object(c.useState)("all"),u=Object(i.a)(b,2),d=u[0],O=u[1],f=Object(c.useState)("Select an option"),m=Object(i.a)(f,2),x=m[0],k=m[1],g=Object(c.useState)(),v=Object(i.a)(g,2),y=v[0],S=v[1],H=Object(c.useState)(),N=Object(i.a)(H,2),L=N[0],U=N[1],_=Object(c.useState)(),A=Object(i.a)(_,2),w=A[0],C=A[1];return Object(c.useEffect)((function(){fetch(a).then((function(e){return e.json()})).then((function(e){"all"===d?(k(Object(r.jsx)("option",{children:"Select a category"})),h(e.results.map((function(e){return Object(r.jsx)(l,{Name:e.name,infoURL:e.url},e.name)})))):(S(e.results),k(e.results.map((function(e){return Object(r.jsx)("option",{value:e.name,children:e.name},e.name)}))))})).catch(console.log)}),[a,d]),Object(c.useEffect)((function(){fetch(L).then((function(e){return e.json()})).then((function(e){"type"===d||"ability"===d?h(e.pokemon.map((function(e){return Object(r.jsx)(l,{Name:e.pokemon.name,infoURL:e.pokemon.url},e.pokemon.name)}))):"habitat"===d||"color"===d||"shape"===d?h(e.pokemon_species.map((function(e){return Object(r.jsx)(l,{Name:e.name,infoURL:"https://pokeapi.co/api/v2/pokemon/".concat(e.name)},e.name)}))):alert("There seemes to be some kind of error")})).catch(console.log)}),[L,d]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(p,{categoryHandler:function(e){switch(O(e.target.value),e.target.value){case"all":n("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");break;case"type":n("https://pokeapi.co/api/v2/type/");break;case"habitat":n("https://pokeapi.co/api/v2/pokemon-habitat/");break;case"ability":n("https://pokeapi.co/api/v2/ability/");break;case"color":n("https://pokeapi.co/api/v2/pokemon-color");break;case"shape":n("https://pokeapi.co/api/v2/pokemon-shape");break;default:alert("Error !!!!!")}},optionsHandler:function(e){y.forEach((function(t){t.name===e.target.value&&U(t.url)}))},categoryOptionsList:x,searchHandler:function(e){e.preventDefault(),fetch("https://pokeapi.co/api/v2/pokemon/".concat(w)).then((function(e){return e.json()})).then((function(e){return h([Object(r.jsx)(l,{Name:w,infoURL:"https://pokeapi.co/api/v2/pokemon/".concat(w)},w)])})).catch((function(e){console.log(e),h(Object(r.jsxs)("h1",{children:["The pokemon '",w,"' does not exist in the pokedex"]}))}))},searchInputHandler:function(e){C(e.target.value)}}),Object(r.jsx)("div",{className:"card-container",children:j})]})};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.ca263e2d.chunk.js.map