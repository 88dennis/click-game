(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Joker",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbjZC-uhMaUo_5bbSDtKg8CjCk16kXAIZcLHpAml4-ONrBo9k"},{id:2,name:"Riddler",image:"https://cdnb.artstation.com/p/assets/images/images/005/270/857/large/samuel-shin-riddler.jpg?1489782611"},{id:3,name:"Two Face",image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/two-face-harvey-dent-batman-the-telltale-series-3.02.jpg"},{id:4,name:"Harley Quinn",image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74a18c47-f08b-40a7-8e13-e112652bf430/dad2ieq-353be960-0117-4e2f-9856-0092c0257b5e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc0YTE4YzQ3LWYwOGItNDBhNy04ZTEzLWUxMTI2NTJiZjQzMFwvZGFkMmllcS0zNTNiZTk2MC0wMTE3LTRlMmYtOTg1Ni0wMDkyYzAyNTdiNWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BMGan36W1UVMrSQIx5PbPT8iP_ly_inBZyVejoxnv_U"},{id:5,name:"Bane",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2u-mEZASWD4knN1BI97XjuHU4VBjopY_xtMgBUOP3ZmW8Wucm"},{id:6,name:"Cat Woman",image:"https://i.etsystatic.com/6076216/r/il/7e030e/1174252663/il_794xN.1174252663_ozqo.jpg"},{id:7,name:"Penguin",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rxsIyJ4m46EI1Ad1T7NJuIy2dp5YEbabyZEwDi92Knd_eQCu"},{id:8,name:"Mr Freeze",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9_M_Lu1zexNsV6JaiZQup1OlpXikrHg4RVftYQTyMrrAnb5A"},{id:9,name:"Scarecrow",image:"https://vignette.wikia.nocookie.net/heroesassembled/images/3/3c/Johnathancrane.jpg/revision/latest?cb=20140813180244"},{id:10,name:"Deadshot",image:"https://img00.deviantart.net/a32e/i/2016/107/2/8/suicide_squad___deadshot_and_harley_by_goxiii-d8wm3qd.jpg"},{id:11,name:"Poison Ivy",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-cuv2gCSAw8COzg3YBt5GcAhgjrOcPj_NBXC4_2bQqLEmbIS"},{id:12,name:"Talia",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByE_Ig2haEoAquAX7jmnrj3oFkJGJU1RZOx7OYhaiBIwspkJiew"}]},,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(3),s=t.n(c),r=(t(16),t(8)),o=t(4),m=t(5),l=t(7),d=t(6),g=t(9);t(17);var u=function(e){return console.log("Dennis",e),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container fade"},i.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.handleBtnClick(e.id)}})))};t(18);var h=function(e){return i.a.createElement("div",{className:"contain1"},i.a.createElement("div",{className:"wrapper"},e.children))};t(19);var p=function(e){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",null,i.a.createElement("a",{href:"/"},i.a.createElement("p",{className:"partitle"},"Clicky Game"))),i.a.createElement("div",{className:"clicktobegin"},i.a.createElement("p",{className:"par1"},"Click an image to begin!")),i.a.createElement("div",null,i.a.createElement("p",{className:"par1"},"Score:  ",e.score)),i.a.createElement("div",null,i.a.createElement("p",{className:"par1"},"Losses:  ",e.losses)),i.a.createElement("div",null,i.a.createElement("p",{className:"par1"},"Max Score:  ",e.maxScore)))},b=t(1);console.log(b);var v=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={villains:b,clicked:!1,score:0,losses:0,guesses:[],maxScore:0},t.handleBtnClick=function(e){var a=Object(r.a)({},t.state);a.guesses.includes(e)?(console.log("you lose"),a.losses=a.losses+1,a.guesses=[],a.score=0):(a.score=a.score+1,a.guesses.push(e)),a.villains=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n}return e}(a.villains),a.score>a.maxScore&&(a.maxScore=a.score),t.setState(a)},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(p,{score:this.state.score,losses:this.state.losses,maxScore:this.state.maxScore}),i.a.createElement(h,null,this.state.villains.map(function(a){return i.a.createElement(u,{handleBtnClick:e.handleBtnClick,id:a.id,key:a.id,name:a.name,image:a.image})})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.9b6dabea.chunk.js.map