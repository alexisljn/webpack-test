(self.webpackChunkwebpack_tutorial=self.webpackChunkwebpack_tutorial||[]).push([[599],{6599:function(e,t,n){"use strict";function r(e,t,n,r,u,o,c){try{var a=e[o](c),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(r,u)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(u,o){var c=e.apply(t,n);function a(e){r(c,u,o,a,s,"next",e)}function s(e){r(c,u,o,a,s,"throw",e)}a(void 0)}))}}n.r(t),n.d(t,{getUsers:function(){return c}});var o="https://jsonplaceholder.typicode.com/users/";function c(){return a.apply(this,arguments)}function a(){return(a=u(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o);case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);