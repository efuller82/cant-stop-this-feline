(this["webpackJsonpcant-stop-this-feline"]=this["webpackJsonpcant-stop-this-feline"]||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(43),c=a.n(l),i=(a(53),a(7)),s=a(9),o=a(11),m=a(10),u=a(12);a(54);var d=function(){return r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-dark bg-light"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Sign-In"),r.a.createElement("h1",{className:"title",id:"banner-title"},r.a.createElement("a",{href:"/"},"Can't Stop this Feline")))};a(55);var h=function(e){return r.a.createElement("div",{className:"card whole-card"},r.a.createElement("div",null,r.a.createElement("h5",{className:"card-title"},e.catName),r.a.createElement("button",{onClick:function(){return e.deleteCat(e.id)},type:"button",className:"btn btn-outline-danger delete",id:e.id},"X")),r.a.createElement("h6",{className:"card-subtitle"},e.nickname),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{className:"cat-pic",alt:e.catName,src:e.imgURL})),r.a.createElement("p",{className:"card-text"},e.description))},p=a(1);a(68);var f=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"side-list",id:"side-nav"},r.a.createElement("li",null,r.a.createElement("a",{href:"/addcat",className:"list-item"},"Add a Cat")),r.a.createElement("li",null,r.a.createElement("a",{href:"/rumble",className:"list-item"},"Rumble")),r.a.createElement("li",null,r.a.createElement("a",{href:"/adopt",className:"list-item"},"Adopt"))))},g=a(16),E=a.n(g),b={getOrgs:function(e){return E.a.get("/api/search",{params:{q:"location:"+e}})},getCats:function(){return E.a.get("/api/cats")},getCat:function(e){return E.a.get("/api/cats/"+e)},deleteCat:function(e){return E.a.delete("/api/cats/"+e)},saveCat:function(e){return E.a.post("/api/cats",e)}},y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={cats:[]},a.loadCats=function(){b.getCats().then((function(e){a.setState({cats:e.data})})).catch((function(e){return console.log(e)}))},a.deleteCat=function(e){b.deleteCat(e).then((function(e){return a.loadCats()})).catch((function(e){return console.log(e)}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadCats()}},{key:"render",value:function(){var e=this;return r.a.createElement(p.Container,null,r.a.createElement(d,null),r.a.createElement(p.Row,null,r.a.createElement(p.Col,{sm:3},r.a.createElement(f,null)),r.a.createElement(p.Col,{sm:9},r.a.createElement("h2",{id:"leaderboard"},"Cat Leaderboard"),this.state.cats.map((function(t){return r.a.createElement(h,{key:t.id,id:t._id,deleteCat:e.deleteCat,catName:t.catName,nickname:t.nickname,imgURL:t.imgURL,description:t.description})})))))}}]),t}(n.Component),v=a(19),C=(a(85),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={catName:"",nickname:"",description:"",imgURL:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(v.a)({},n,r))},a.handleFormSubmit=function(e){if(e.preventDefault(),a.state.catName&&a.state.description&&a.state.imgURL.includes(".")){var t={catName:a.state.catName,nickname:a.state.nickname,description:a.state.description,imgURL:a.state.imgURL};console.log(t),b.saveCat({catName:a.state.catName,nickname:a.state.nickname,description:a.state.description,imgURL:a.state.imgURL}).then((function(e){return console.log(e+"Success.")})).catch((function(e){return console.log(e)}))}a.clearForm()},a.clearForm=function(){a.setState({catName:"",nickname:"",description:"",imgURL:""})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("It's mounted")}},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},"Add a Cat"),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"cat-name"},"Cat Name: "),r.a.createElement("input",{type:"text",id:"cat-name",className:"form-control",value:this.state.catName,onChange:this.handleInputChange,name:"catName"}),r.a.createElement("label",{htmlFor:"nick-name"},"Nickname/Alias: "),r.a.createElement("input",{type:"text",id:"nick-name",className:"form-control",value:this.state.nickname,onChange:this.handleInputChange,name:"nickname"}),r.a.createElement("label",{htmlFor:"bio"},"What's not to love?"),r.a.createElement("textarea",{className:"form-control",id:"bio",rows:"3",value:this.state.description,onChange:this.handleInputChange,name:"description"}),r.a.createElement("label",{htmlFor:"add-photo"},"Add Photo URL:"),r.a.createElement("input",{type:"text",className:"form-control",id:"add-photo",value:this.state.imgURL,onChange:this.handleInputChange,name:"imgURL"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleFormSubmit},"Submit"))))}}]),t}(n.Component)),N=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Container,null,r.a.createElement(d,null),r.a.createElement(p.Row,null,r.a.createElement(p.Col,{sm:3},r.a.createElement(f,null)),r.a.createElement(p.Col,{sm:7},r.a.createElement(C,null)),r.a.createElement(p.Col,{sm:2})))}}]),t}(n.Component),w=a(86),k=new function e(){var t=this;Object(i.a)(this,e),this.search=function(e,a){return t.client.organization.search({location:e}).then((function(e){return a(e.data)})).catch((function(e){console.log(e)}))},this.client=new w.Client({apiKey:"DZTx6mYRQKcXtEzsrwroIRqFXBp2YzYI3YK3ZuqWxkGUjcrmW7",secret:"XcUMQrOzZd6F0PxYuqHIGJTGkwmHWdJZJ0wqzXiE"})};a(105);function S(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function j(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}a(106);var O=function(e){var t=e.name,a=e.city,n=e.website,l=e.mission_statement,c=e.url;return r.a.createElement(j,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement("a",{href:c,className:"btn btn-outline-primary myButton",role:"button","aria-pressed":"true",target:"_blank",rel:"noopener noreferrer"},"Find Your Future Furry Friend"),r.a.createElement("p",{className:"card-text"},"In "+a),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},n),r.a.createElement("p",{className:"card-text"},l))))},x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={orgs:[],q:"",message:"Search for adoption organizations in your area..."},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(v.a)({},n,r))},a.loadOrgs=function(){b.getOrgs(a.state.q).then((function(e){e&&e.data.length>0?a.setState({orgs:e.data}):a.setDefaultState()})).catch((function(e){console.log(e+"-There is an error."),a.setDefaultState()}))},a.setDefaultState=function(){a.setState({orgs:[],message:"No results."})},a.handleFormSubmit=function(e){e.preventDefault(),console.log(a.state.q),k.search(a.state.q,(function(e){console.log("This is my API response: ",e),a.setState({orgs:e.organizations}),console.log("This is my new state for orgs: ",a.state.orgs)}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Container,null,r.a.createElement(d,null),r.a.createElement(p.Row,null,r.a.createElement(p.Col,{sm:3},r.a.createElement(f,null)),r.a.createElement(p.Col,{sm:9},r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},r.a.createElement("h1",null,"Get your own furry ball of fun!"),r.a.createElement("h2",null,"Find adoption organizations near you.")),r.a.createElement("form",{className:"form-inline",role:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"Title",className:"sr-only"},"Search Adoption Organizations"),r.a.createElement("input",{className:"form-control",id:"Title",type:"text",value:this.state.q,placeholder:"Enter city and state (ex. Austin, Tx) or zip-code",name:"q",onChange:this.handleInputChange,size:"62",required:!0})),r.a.createElement("button",{onClick:this.handleFormSubmit,type:"submit",className:"btn btn-lg search-btn"},"Search")))),r.a.createElement(p.Row,null,r.a.createElement(p.Col,{size:"md-12"},r.a.createElement("h1",{className:"text-center"},"Results"),this.state.orgs.length?r.a.createElement(S,null,this.state.orgs.map((function(e){return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement(O,{name:e.name,city:e.address.city,website:e.website,mission_statement:e.mission_statement,url:e.url}))}))):r.a.createElement("div",null,r.a.createElement("h2",{className:"heading-title text-center"},this.state.message)))))}}]),t}(n.Component);a(107);var L=function(e){return r.a.createElement("div",{className:"wrapper flex-column"},e.children)};a(108);var R=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(p.Container,null,r.a.createElement(p.Row,null,r.a.createElement(p.Col,null,r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-subtitle"},e.alias),r.a.createElement("div",{onClick:function(){return e.clicked(e.isClicked,e.id)},className:"img-container"},r.a.createElement("img",{className:"cat-pic",src:e.image})))))))},A=(a(109),a(44)),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={dummyCats:A,score:0,userMsg:"Choose your cat."},a.handleSelection=function(){a.setState({clicked:!0})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Container,null,r.a.createElement(d,null),r.a.createElement(p.Row,null,r.a.createElement(p.Col,{sm:3},r.a.createElement(f,null)),r.a.createElement(p.Col,{sm:9},r.a.createElement("div",{className:"rumbleSubtitle"},"Pick Your Rumbler"),r.a.createElement(L,null,this.state.dummyCats.map((function(e){return r.a.createElement(R,{id:e.id,key:e.id,alias:e.alias,image:e.image})})))),r.a.createElement(p.Col,null,r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-body"},"This is some text within a card body."))),r.a.createElement(p.Col,null,r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-body"},"This is some text within a card body.")))))}}]),t}(n.Component),T=(a(110),a(45)),I=a(14);var U=function(){return r.a.createElement(T.a,null,r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:"/",component:y}),r.a.createElement(I.a,{exact:!0,path:"/addcat",component:N}),r.a.createElement(I.a,{exact:!0,path:"/adopt",component:x}),r.a.createElement(I.a,{exact:!0,path:"/rumble",component:F})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},44:function(e){e.exports=JSON.parse('[{"id":1,"name":"Garfield","alias":"Lasagna Lover","image":"https://yt3.ggpht.com/a/AGF-l7_5_gsypJpmcfZFJlo7QlWEGHixtwrEuzgEaw=s900-c-k-c0xffffffff-no-rj-mo","bio":"Garfield is a cat that treats his bro like garbage, loves lasagna, and is lazy as all heck.","clicked":false},{"id":2,"name":"Tardar Sauce","alias":"Grumpy Cat","image":"https://pbs.twimg.com/profile_images/1080545769034108928/CEzHCTpI_400x400.jpg","bio":"Tardar Sauce (April 4, 2012[1] \u2013 May 14, 2019), nicknamed Grumpy Cat, was an American Internet celebrity cat. She was known for her permanently \'grumpy\' facial appearance, which was caused by an underbite and feline dwarfism.","clicked":false},{"id":3,"name":"Tigger","alias":"Just Tigger","image":"https://images-na.ssl-images-amazon.com/images/I/41uPBydq69L.jpg","bio":"Tigger is a fictional tiger character originally introduced in The House at Pooh Corner, the sequel to Winnie-the-Pooh by A. A. Milne. Like other Pooh characters, Tigger is based on one of Christopher Robin Milne\'s stuffed toy animals.","clicked":false},{"id":4,"name":"Chershire Cat","alias":"Churchy","image":"https://ohmy.disney.com/wp-content/uploads/2014/07/Cheshire-CAt-thinking.jpg","bio":"The Cheshire Cat is a fictional cat popularised by Lewis Carroll in Alice\'s Adventures in Wonderland and known for its distinctive mischievous grin","clicked":false},{"id":5,"name":"Sylvester J. Pussycat Sr.","alias":"Sylvester","image":"http://images5.fanpop.com/image/photos/30900000/Sylvester-the-Cat-warner-brothers-animation-30976216-300-297.png","bio":"Sylvester J. Pussycat Sr., usually called Sylvester, is a fictional character, a three-time Academy Award-winning anthropomorphic Tuxedo cat in the Looney Tunes and Merrie Melodies series of cartoons. Most of his appearances have him often chasing Tweety, Speedy Gonzales, or Hippety Hopper.","clicked":false},{"id":6,"name":"Lil BUB","alias":"Lil Bub","image":"https://www.wired.com/images_blogs/underwire/2013/09/20130909-LIL-BUB-0149edit.jpg","bio":"Lil Bub, officially Lil BUB, is an American celebrity cat known for her unique physical appearance. She was the runt of her litter. Her owner, Mike Bridavsky, adopted her when his friends called to ask him to give her a home.","clicked":false}]')},48:function(e,t,a){e.exports=a(114)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},68:function(e,t,a){},85:function(e,t,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.628348b2.chunk.js.map