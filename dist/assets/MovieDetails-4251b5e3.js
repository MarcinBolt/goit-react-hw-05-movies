import{r as i,b as g,a as N,j as s,L as k,N as r,O as u,c as y}from"./index-c58adfde.js";const f="_goBack_4jyn2_1",w="_h2_4jyn2_45",b="_h3_4jyn2_59",L="_p_4jyn2_73",I="_rating_4jyn2_85",B="_rating__rate_4jyn2_111",C="_description__block_4jyn2_125",R="_poster_4jyn2_137",D="_description_4jyn2_125",M="_img_4jyn2_159",E="_ul_4jyn2_177",O="_li_4jyn2_187",F="_movieCard_4jyn2_195",G="_container_4jyn2_211",S="_additionalInfo_4jyn2_227",A="_navLink_4jyn2_243",e={goBack:f,h2:w,h3:b,p:L,rating:I,rating__rate:B,description__block:C,poster:R,description:D,img:M,ul:E,li:O,movieCard:F,container:G,additionalInfo:S,navLink:A},$=()=>{var o;const[t,l]=i.useState(null),{movieId:c}=g(),_=N(),d=i.useRef(((o=_.state)==null?void 0:o.from)??"/"),m=async a=>{try{const n=await y(a);l(n)}catch(n){console.log(n.message)}};if(i.useEffect(()=>{m(c)},[c]),t){const{title:a,poster_path:n,release_date:h,vote_average:j,overview:p,genres:v}=t;return s.jsxs(s.Fragment,{children:[s.jsx(k,{className:e.goBack,to:d.current,children:"Go back"}),s.jsxs("div",{className:e.container,children:[s.jsxs("div",{className:e.movieCard,children:[s.jsx("div",{className:e.poster,children:s.jsx("img",{className:e.img,src:t.poster_path?`https://www.themoviedb.org/t/p/w500/${n}`:"https://www.banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",alt:a})}),s.jsxs("div",{className:e.description,children:[s.jsxs("h2",{className:e.h2,children:[a," (",h.slice(0,4),")"]}),s.jsxs("p",{className:e.rating,children:["Rating",s.jsx("span",{className:e.rating__rate,children:j.toFixed(2)})]}),s.jsxs("div",{className:e.description__block,children:[s.jsx("h3",{className:e.h3,children:"Overview"}),s.jsx("p",{className:e.p,children:p})]}),s.jsxs("div",{className:e.description__block,children:[s.jsx("h3",{className:e.h3,children:"Genres"}),s.jsx("p",{className:e.p,children:v.map(x=>x.name).join(", ")})]})]})]}),s.jsxs("div",{className:e.additionalInfo,children:[s.jsx("h2",{className:e.h2,children:"Additional information"}),s.jsxs("ul",{className:e.ul,children:[s.jsx("li",{className:e.li,children:s.jsx(r,{className:e.navLink,to:"cast",children:"Cast"})}),s.jsx("li",{className:e.li,children:s.jsx(r,{className:e.navLink,to:"reviews",children:"Reviews"})})]})]}),s.jsx(i.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsx(u,{})})]})]})}};export{$ as default};