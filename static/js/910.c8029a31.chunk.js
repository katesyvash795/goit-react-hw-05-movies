"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{910:function(e,t,n){n.r(t);var c=n(439),r=n(791),i=n(689),a=n(184);t.default=function(){var e=(0,r.useState)([]),t=(0,c.Z)(e,2),n=t[0],o=t[1],s=(0,r.useState)(!0),h=(0,c.Z)(s,2),f=h[0],l=h[1],u=(0,i.UO)().movieId;return(0,r.useEffect)((function(){var e="https://api.themoviedb.org/3/movie/".concat(u,"/credits?api_key=").concat("ff9d4b6887bcbf55a4828f854b70eb96");fetch(e).then((function(e){return e.json()})).then((function(e){o(e.cast),l(!1)})).catch((function(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0443:",e),l(!1)}))}),[u]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"\u0410\u043a\u0442\u043e\u0440\u0441\u044c\u043a\u0438\u0439 \u0441\u043a\u043b\u0430\u0434"}),f?(0,a.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f..."}):0===n.length?(0,a.jsx)("p",{children:"\u041d\u0430 \u0436\u0430\u043b\u044c, \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0430\u043a\u0442\u043e\u0440\u0456\u0432 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u044f."}):(0,a.jsx)("ul",{children:n.map((function(e){return(0,a.jsxs)("li",{children:[(0,a.jsx)("p",{children:e.name}),e.profile_path&&(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w185".concat(e.profile_path),alt:e.name})]},e.id)}))})]})}}}]);
//# sourceMappingURL=910.c8029a31.chunk.js.map