import{r as c,b as n,d as i,j as t}from"./index-c58adfde.js";const m="_actorsList_1ngxp_1",p="_actorCard_1ngxp_21",l="_poster_1ngxp_47",h="_img_1ngxp_65",_="_actorName_1ngxp_85",d="_character_1ngxp_99",a={actorsList:m,actorCard:p,poster:l,img:h,actorName:_,character:d},x=()=>{const[e,o]=c.useState(null),{movieId:r}=n();if(c.useEffect(()=>{i(r).then(o).catch(s=>console.log(s.message))},[r]),!!e)return t.jsx(t.Fragment,{children:e.length>0?t.jsx("ul",{className:a.actorsList,children:e.map(s=>t.jsxs("li",{className:a.actorCard,children:[t.jsx("div",{className:a.poster,children:t.jsx("img",{className:a.img,src:s.profile_path?`https://www.themoviedb.org/t/p/w500/${s.profile_path}`:"https://www.banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",alt:s.original_name})}),t.jsx("h4",{className:a.actorName,children:s.name}),t.jsxs("p",{className:a.character,children:["Character: ",s.character]})]},s.id))}):"We don't have any information about cast"})};export{x as default};
