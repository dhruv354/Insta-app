(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(21),s=n.n(a),o=n(3),i=n(2),r=n(5),l=n(8),j=n.n(l),u=(n(27),n(0));var h=function(){Object(i.f)();var e=Object(c.useContext)(v),t=e.state,n=(e.dispatch,Object(c.useState)([])),a=Object(o.a)(n,2),s=a[0],l=a[1];return Object(c.useEffect)((function(){fetch("http://localhost:8000/allposts",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},method:"GET"}).then((function(e){return e.json()})).then((function(e){l(e)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)("div",{className:"home",children:s.map((function(e){return Object(u.jsxs)("div",{className:"card home-card",children:[Object(u.jsx)("h5",{className:"name-heading",children:Object(u.jsxs)(r.b,{to:"/Profile/".concat(e.postedBy._id),children:[e.postedBy.name,console.log(e.postedBy.name)]})}),e.postedBy._id==t._id&&Object(u.jsx)("i",{className:"material-icons delete-icon",onClick:function(){return t=e._id,void fetch("/delete/".concat(t),{method:"delete",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=s.filter((function(t){return t._id!==e._id}));l(t)})).catch((function(e){return console.log(e)}));var t},children:"delete"}),Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)("img",{src:e.photo})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(t._id)?Object(u.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=s.map((function(t){return t._id==e._id?e:t}));l(t)}));var t},children:"thumb_down"}):Object(u.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=s.map((function(t){return t._id==e._id?e:t}));l(t)})).catch((function(e){return console.log(e)}));var t},children:"thumb_up"}),Object(u.jsxs)("h6",{children:[e.likes.length," likes"]}),Object(u.jsx)("h6",{children:e.title}),Object(u.jsx)("p",{children:e.body}),e.comments.map((function(e){return Object(u.jsxs)("h6",{className:"comment-container",children:[Object(u.jsx)("span",{className:"comment-author",children:e.postedBy.name})," ",Object(u.jsxs)("span",{className:"comment=text",children:[" ",e.text]})]},e._id)})),Object(u.jsx)("form",{onSubmit:function(t){var n,c;t.preventDefault(),n=t.target[0].value,c=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},body:JSON.stringify({text:n,postId:c})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=s.map((function(t){return t._id==e._id?e:t}));l(t)})).catch((function(e){return console.log(e)})),t.target[0].value=""},children:Object(u.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]},e._id)}))})};n(19);var d=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),l=Object(o.a)(s,2),h=l[0],d=l[1],b=Object(c.useState)(""),f=Object(o.a)(b,2),p=f[0],m=f[1],O=Object(i.f)();return Object(u.jsx)("div",{className:"my-card",children:Object(u.jsxs)("div",{className:"card auth-card input-field",children:[Object(u.jsx)("h2",{children:"InstaApp"}),Object(u.jsx)("input",{type:"text",placeholder:"name",value:n,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("input",{type:"text",placeholder:"email",value:h,onChange:function(e){return d(e.target.value)}}),Object(u.jsx)("input",{type:"password",placeholder:"password",value:p,onChange:function(e){return m(e.target.value)}}),Object(u.jsx)("button",{className:"btn waves-effect waves-light ",type:"submit",name:"action",onClick:function(){return function(){if(!1===/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(h))return j.a.toast({html:"invalid email",classes:"#e57373 red lighten-2"});fetch("http://localhost:8000/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:h,password:p})}).then((function(e){return e.json()})).then((function(e){e.error?j.a.toast({html:e.error,classes:"#e57373 red lighten-2"}):(j.a.toast({html:e.message,classes:"#43a047 green darken-1 "}),O.push("/signin"))})).catch((function(e){return console.log(e)}))}()},children:"Signup"}),Object(u.jsx)("h5",{children:Object(u.jsx)(r.b,{to:"/signin",children:"Already have account?"})})]})})};var b=function(){var e=Object(c.useContext)(v),t=(e.state,e.dispatch),n=Object(c.useState)(""),a=Object(o.a)(n,2),s=a[0],l=a[1],h=Object(c.useState)(""),d=Object(o.a)(h,2),b=d[0],f=d[1],p=Object(i.f)();return Object(u.jsx)("div",{className:"my-card",children:Object(u.jsxs)("div",{className:" auth-card input-field",children:[Object(u.jsx)("h2",{children:"InstaApp"}),Object(u.jsx)("input",{type:"email",placeholder:"email",value:s,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)("input",{type:"password",placeholder:"password",value:b,onChange:function(e){return f(e.target.value)}}),Object(u.jsx)("button",{className:"btn waves-effect waves-light ",type:"submit",name:"action",onClick:function(){return function(){if(!1===/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(s))return j.a.toast({html:"invalid email",classes:"#e57373 red lighten-2"});fetch("http://localhost:8000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:b})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?j.a.toast({html:e.error,classes:"#e57373 red lighten-2"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),j.a.toast({html:"signedin",classes:"#43a047 green darken-1 "}),p.push("/"))})).catch((function(e){return console.log(e)}))}()},children:"Login"}),Object(u.jsx)("h5",{children:Object(u.jsx)(r.b,{to:"/signup",children:"Don't have an account?"})})]})})};n(20);var f=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useContext)(v),i=s.state;return s.dispatch,console.log(i),Object(c.useEffect)((function(){fetch("/myposts",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.myPost)}))}),[]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"profile-container",children:[Object(u.jsx)("div",{className:"img-container",children:Object(u.jsx)("img",{className:"profile-img",src:"https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"})}),Object(u.jsxs)("div",{className:"person-details",children:[Object(u.jsx)("h4",{children:i?i.name:"loading..."}),Object(u.jsxs)("div",{className:"profile-details",children:[Object(u.jsx)("h6",{children:"40 posts"}),Object(u.jsx)("h6",{children:"40 followers"}),Object(u.jsx)("h6",{children:"40 following"})]})]})]}),Object(u.jsx)("div",{className:"gallery",children:n.map((function(e){return Object(u.jsx)("img",{className:"item",src:e.photo,alt:"posts image"},e._id)}))})]})};n(33);var p=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(o.a)(s,2),l=r[0],h=r[1],d=Object(c.useState)(""),b=Object(o.a)(d,2),f=b[0],p=b[1],m=Object(c.useState)(""),O=Object(o.a)(m,2),g=O[0],x=O[1],v=Object(i.f)();return Object(c.useEffect)((function(){g&&fetch("http://localhost:8000/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},body:JSON.stringify({title:n,body:l,image:g})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?j.a.toast({html:e.error,classes:"#e57373 red lighten-2"}):(j.a.toast({html:"created post successfully",classes:"#43a047 green darken-1 "}),v.push("/"))})).catch((function(e){return console.log(e)}))}),[g]),Object(u.jsxs)("div",{className:"card input-filed",children:[Object(u.jsx)("input",{type:"text",placeholder:"title",value:n,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("input",{type:"text",placeholder:"body",value:l,onChange:function(e){return h(e.target.value)}}),Object(u.jsxs)("div",{className:"file-field input-field",children:[Object(u.jsxs)("div",{className:"btn",children:[Object(u.jsx)("span",{children:"Upload File"}),Object(u.jsx)("input",{type:"file",onChange:function(e){return p(e.target.files[0])}})]}),Object(u.jsx)("div",{className:"file-path-wrapper",children:Object(u.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(u.jsx)("button",{className:"btn waves-effect waves-light blue",type:"submit",name:"action",onClick:function(){return function(){var e=new FormData;e.append("file",f),e.append("upload_preset","instagram-clone"),e.append("cloud_name","dhruv2612354"),fetch("https://api.cloudinary.com/v1_1/dhruv2612354/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){x(e.url),console.log(e)})).catch((function(e){return console.log(e)}))}()},children:"Submit post"})]})};n(34);var m=function(){var e=Object(c.useContext)(v),t=e.state,n=e.dispatch,a=Object(i.f)("/");return Object(u.jsx)("div",{children:Object(u.jsx)("nav",{children:Object(u.jsxs)("div",{className:"nav-wrapper white",children:[Object(u.jsx)(r.b,{to:t?"/":"/signin",className:"brand-logo",children:"InstaApp"}),Object(u.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:t?[Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/Profile",children:"Profile"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/create",children:"create"})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"btn waves-effect waves-light ",type:"submit",onClick:function(){localStorage.clear(),n({type:"CLEAR"}),a.push("/signin")},children:"Logout"})})]})]:[Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/Signin",children:"Signin"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/Signup",children:"Signup"})})]})]})]})})})},O=n(10);n(35);var g=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useContext)(v),r=(s.state,s.dispatch),l=Object(i.g)().userid;return console.log(l),Object(c.useEffect)((function(){fetch("/user/".concat(l),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){return e.json()})).then((function(e){console.log("log from useEffect call\n"),console.log(e),a(e)}))}),[]),Object(u.jsx)("div",{children:n.user?Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"profile-container",children:[Object(u.jsx)("div",{className:"img-container",children:Object(u.jsx)("img",{className:"profile-img",src:"https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"})}),Object(u.jsxs)("div",{className:"person-details",children:[Object(u.jsx)("h4",{children:n.user.name}),Object(u.jsx)("h5",{children:n.user.email}),Object(u.jsxs)("div",{className:"profile-details",children:[Object(u.jsxs)("h6",{children:[n.posts.length," posts"]}),Object(u.jsxs)("h6",{children:[n.user.followers.length," followers"]}),Object(u.jsxs)("h6",{children:[n.user.following.length," following"]})]}),Object(u.jsx)("button",{className:"Follow-button btn waves-effect waves-light ",type:"submit",name:"action",onClick:function(){fetch("/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},body:JSON.stringify({followId:l})}).then((function(e){return e.json()})).then((function(e){console.log(e),r({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),a((function(t){return Object(O.a)(Object(O.a)({},t),{},{user:e})}))})).catch((function(e){return console.log(e)}))},children:"Follow"})]})]}),Object(u.jsx)("div",{className:"gallery",children:n.posts.map((function(e){return Object(u.jsx)("img",{className:"item",src:e.photo,alt:"posts image"},e._id)}))})]}):Object(u.jsx)("h2",{children:"loading"})})},x=function(e,t){return"USER"==t.type?t.payload:"CLEAR"==t.type?null:"UPDATE"==t.type?Object(O.a)(Object(O.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):"UPDATEPIC"==t.type?Object(O.a)(Object(O.a)({},e),{},{pic:t.payload}):e},v=Object(c.createContext)(),y=function(){var e=Object(c.useContext)(v),t=(e.state,e.dispatch,Object(i.f)());return Object(c.useEffect)((function(){JSON.parse(localStorage.getItem("user"))||t.push("/signin")}),[]),Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/Signin",children:Object(u.jsx)(b,{})}),Object(u.jsx)(i.a,{path:"/Signup",children:Object(u.jsx)(d,{})}),Object(u.jsx)(i.a,{exact:!0,path:"/Profile",children:Object(u.jsx)(f,{})}),Object(u.jsx)(i.a,{path:"/create",children:Object(u.jsx)(p,{})}),Object(u.jsx)(i.a,{path:"/Profile/:userid",children:Object(u.jsx)(g,{})}),Object(u.jsx)(i.a,{path:"/",children:Object(u.jsx)(h,{})})]})};var w=function(){var e=Object(c.useReducer)(x,null),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(u.jsx)(v.Provider,{value:{state:n,dispatch:a},children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(y,{})]})})};s.a.render(Object(u.jsx)(w,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9972428d.chunk.js.map