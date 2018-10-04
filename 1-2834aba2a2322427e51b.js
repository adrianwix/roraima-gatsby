(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{158:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return h}),t.d(a,"StaticQuery",function(){return d});var r=t(0),n=t.n(r),l=t(4),c=t.n(l),i=t(160),m=t.n(i);t.d(a,"Link",function(){return m.a}),t.d(a,"withPrefix",function(){return i.withPrefix}),t.d(a,"navigate",function(){return i.navigate}),t.d(a,"push",function(){return i.push}),t.d(a,"replace",function(){return i.replace}),t.d(a,"navigateTo",function(){return i.navigateTo});var o=t(36);t.d(a,"waitForRouteChange",function(){return o.c});var s=t(163),u=t.n(s);t.d(a,"PageRenderer",function(){return u.a});var E=t(50);t.d(a,"parsePath",function(){return E.a});var h=n.a.createContext({}),d=function(e){return n.a.createElement(h.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},159:function(e,a,t){"use strict";var r=t(166),n=t(0),l=t.n(n),c=t(4),i=t.n(c),m=t(167),o=t.n(m),s=t(158),u=(t(178),t(8)),E=t.n(u),h=t(52),d=t.n(h),f=t(189),p=function(e){function a(a){var t;return(t=e.call(this,a)||this).toggle=t.toggle.bind(d()(d()(t))),t.state={isOpen:!1},t}E()(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return l.a.createElement("header",{className:"fixed-top"},l.a.createElement("nav",{className:"navbar navbar-toggleable navbar-expand-lg navbar-dark w-100"},l.a.createElement(s.Link,{className:"navbar-brand",to:"/"},l.a.createElement("div",{className:"roraimalogo"},l.a.createElement("img",{className:"img-fluid w-100",src:Object(s.withPrefix)("img/headerBrand.jpg"),alt:"Roraima Logo"}))),l.a.createElement(f.h,{onClick:this.toggle},l.a.createElement("i",{className:"fas fa-bars fa-lg",style:{color:"white"}})),l.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(f.e,{className:"navbar-nav ml-auto"},l.a.createElement(f.f,{className:"text-center"},l.a.createElement(f.g,{href:"/"},"HOME")),l.a.createElement(f.i,{nav:!0,inNavbar:!0},l.a.createElement(f.d,{className:"nav-link text-center",nav:!0,caret:!0},"SERVICES"),l.a.createElement(f.c,{right:!0},l.a.createElement(f.b,{href:"/regionalTimetable",className:"dropdown-item text-center"},"REGIONAL"),l.a.createElement(f.b,{href:"/internationalTimetable/",className:"dropdown-item text-center"},"INTERNATIONAL"))),l.a.createElement(f.i,{nav:!0,inNavbar:!0},l.a.createElement(f.d,{className:"nav-link text-center",nav:!0,caret:!0},"THE COMPANY"),l.a.createElement(f.c,{right:!0},l.a.createElement(f.b,{href:"/history/",className:"dropdown-item text-center"},"HISTORY"),l.a.createElement(f.b,{href:"/staff/",className:"dropdown-item text-center"},"STAFF"),l.a.createElement(f.b,{href:"/fleet/",className:"dropdown-item text-center"},"FLEET"),l.a.createElement(f.b,{href:"/globalone/",className:"dropdown-item text-center"},"GLOBALONE"),l.a.createElement(f.b,{href:"/vatsim/",className:"dropdown-item text-center"},"VATSIM"),l.a.createElement(f.b,{href:"/fundaroraima/",className:"dropdown-item text-center"},"FUNDAROARAIMA"))),l.a.createElement(f.i,{nav:!0,inNavbar:!0},l.a.createElement(f.d,{className:"nav-link text-center",nav:!0,caret:!0},"WORK"),l.a.createElement(f.c,{right:!0},l.a.createElement(f.b,{href:"/joinus/",className:"dropdown-item text-center"},"JOIN US"),l.a.createElement(f.b,{href:"/careers/",className:"dropdown-item text-center"},"CAREERS"))),l.a.createElement(f.i,{nav:!0,inNavbar:!0},l.a.createElement(f.d,{className:"nav-link text-center",nav:!0,caret:!0},"RORAIMA GROUP"),l.a.createElement(f.c,{right:!0},l.a.createElement(f.b,{href:"/roraima-group/",className:"dropdown-item text-center"},"ABOUT US"),l.a.createElement(f.b,{href:"/tucan-airway/",className:"dropdown-item text-center"},"TUCAN AIRWAYS"),l.a.createElement(f.b,{href:"/roraima-cargo/",className:"dropdown-item text-center"},"RORAIMA CARGO"))),l.a.createElement(f.f,{className:"text-center"},l.a.createElement(f.g,{href:"/contact/"},"CONTACT"))))))},a}(l.a.Component),b=function(){return l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-12 col-md-auto borderR"},l.a.createElement("a",{href:"home.php"},l.a.createElement("img",{src:Object(s.withPrefix)("img/roraimafooter.png"),alt:"Roraima"})),l.a.createElement("p",null,l.a.createElement("br",null),"Email Us:",l.a.createElement("br",null),"erujano@flyroraima.com",l.a.createElement("br",null),l.a.createElement("br",null),"Virtual HQ:",l.a.createElement("br",null),"Simón Bolívar International Airport,",l.a.createElement("br",null),"Vargas, Venezuela (CCS/SVMI)")),l.a.createElement("div",{className:"col-sm-4 col-lg-2"},l.a.createElement("a",{href:"home.php#services"},l.a.createElement("h3",null,"SERVICES")),l.a.createElement("a",{href:"regionalTimetable.php"},"Regional Timetables"),l.a.createElement("br",null),l.a.createElement("a",{href:"internationalTimetable.php"},"International Timetables"),l.a.createElement("br",null)),l.a.createElement("div",{className:"col-sm-4 col-lg-2"},l.a.createElement("a",{href:"home.php#thecompany"},l.a.createElement("h3",null,"THE COMPANY")),l.a.createElement("a",{href:"history.php"},"History"),l.a.createElement("br",null),l.a.createElement("a",{href:"staff.php"},"Staff"),l.a.createElement("br",null),l.a.createElement("a",{href:"fleet.php"},"Fleet"),l.a.createElement("br",null),l.a.createElement("a",{href:"globalone.php"},"GlobalOne"),l.a.createElement("br",null),l.a.createElement("a",{href:"vatsim.php"},"Vatsim"),l.a.createElement("br",null),l.a.createElement("a",{href:"fundaroraima.php"},"Fundaroraima"),l.a.createElement("br",null)),l.a.createElement("div",{className:"col-sm-4 col-lg-2 borderR"},l.a.createElement("a",{href:"careers.php"},l.a.createElement("h3",null,"CAREERS")),l.a.createElement("a",{href:"joinus.php"},"Join Us"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"roraima-group.php"},l.a.createElement("h3",null,"RORAIMA GROUP")),l.a.createElement("a",{href:"tucan-airways.php"},"Tucan Airways"),l.a.createElement("br",null),l.a.createElement("a",{href:"roraima-cargo.php"},"Roraima Cargo"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"contact.php"},l.a.createElement("h3",null,"CONTACT")),l.a.createElement("a",{href:"https://www.instagram.com/flyroraima_va/?hl=es"},"Instagram"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://twitter.com/FlyroraimaVa"},"Twitter"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.facebook.com/RoraimaVA/"},"Facebook"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"privacy.php"},l.a.createElement("h3",null,"PRIVACY AND POLICY"))))},g=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("small",{style:{fontSize:"15px"}},"© 2018 all rights reserved. flyroraima.com")))},v=function(){return l.a.createElement("section",{id:"footer"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(b,null),l.a.createElement(g,null)))},N=(t(184),t(186),t(165),t(188),function(e){var a=e.children;return l.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Roraima Virtual Airline"},{name:"keywords",content:"roraima, airline"}]},l.a.createElement("html",{lang:"en"}),l.a.createElement("link",{rel:"icon",href:Object(s.withPrefix)("img/favicom.png")}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:400,500",rel:"stylesheet"})),l.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",null,a),l.a.createElement(v,null))},data:r})});N.propTypes={children:i.a.node.isRequired};a.a=N},163:function(e,a,t){var r;e.exports=(r=t(177))&&r.default||r},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Roraima"}}}}},177:function(e,a,t){"use strict";t.r(a);t(39);var r=t(0),n=t.n(r),l=t(4),c=t.n(l),i=t(74),m=t(1),o=function(e){var a=e.location,t=m.default.getResourcesForPathnameSync(a.pathname);return n.a.createElement(i.a,Object.assign({key:a.pathname,location:a,pageResources:t},t.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},184:function(e,a,t){},186:function(e,a,t){}}]);
//# sourceMappingURL=1-2834aba2a2322427e51b.js.map