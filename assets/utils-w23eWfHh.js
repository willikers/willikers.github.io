var M=function(t,r){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},M(t,r)};function g(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");M(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}function Et(t,r,e,n){function i(o){return o instanceof e?o:new e(function(u){u(o)})}return new(e||(e=Promise))(function(o,u){function s(l){try{c(n.next(l))}catch(d){u(d)}}function a(l){try{c(n.throw(l))}catch(d){u(d)}}function c(l){l.done?o(l.value):i(l.value).then(s,a)}c((n=n.apply(t,r||[])).next())})}function tt(t,r){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,u=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return u.next=s(0),u.throw=s(1),u.return=s(2),typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(c){return function(l){return a([c,l])}}function a(c){if(n)throw new TypeError("Generator is already executing.");for(;u&&(u=0,c[0]&&(e=0)),e;)try{if(n=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,i=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){e.label=c[1];break}if(c[0]===6&&e.label<o[1]){e.label=o[1],o=c;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(c);break}o[2]&&e.ops.pop(),e.trys.pop();continue}c=r.call(t,e)}catch(l){c=[6,l],i=0}finally{n=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function A(t){var r=typeof Symbol=="function"&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function O(t,r){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var n=e.call(t),i,o=[],u;try{for(;(r===void 0||r-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(s){u={error:s}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(u)throw u.error}}return o}function P(t,r,e){if(e||arguments.length===2)for(var n=0,i=r.length,o;n<i;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return t.concat(o||Array.prototype.slice.call(r))}function I(t){return this instanceof I?(this.v=t,this):new I(t)}function xt(t,r,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e.apply(t,r||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",u),i[Symbol.asyncIterator]=function(){return this},i;function u(f){return function(y){return Promise.resolve(y).then(f,d)}}function s(f,y){n[f]&&(i[f]=function(v){return new Promise(function(x,m){o.push([f,v,x,m])>1||a(f,v)})},y&&(i[f]=y(i[f])))}function a(f,y){try{c(n[f](y))}catch(v){p(o[0][3],v)}}function c(f){f.value instanceof I?Promise.resolve(f.value.v).then(l,d):p(o[0][2],f)}function l(f){a("next",f)}function d(f){a("throw",f)}function p(f,y){f(y),o.shift(),o.length&&a(o[0][0],o[0][1])}}function _t(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t[Symbol.asyncIterator],e;return r?r.call(t):(t=typeof A=="function"?A(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(o){e[o]=t[o]&&function(u){return new Promise(function(s,a){u=t[o](u),i(s,a,u.done,u.value)})}}function i(o,u,s,a){Promise.resolve(a).then(function(c){o({value:c,done:s})},u)}}function h(t){return typeof t=="function"}function B(t){var r=function(n){Error.call(n),n.stack=new Error().stack},e=t(r);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var R=B(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,i){return i+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function L(t,r){if(t){var e=t.indexOf(r);0<=e&&t.splice(e,1)}}var T=function(){function t(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var r,e,n,i,o;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var s=A(u),a=s.next();!a.done;a=s.next()){var c=a.value;c.remove(this)}}catch(v){r={error:v}}finally{try{a&&!a.done&&(e=s.return)&&e.call(s)}finally{if(r)throw r.error}}else u.remove(this);var l=this.initialTeardown;if(h(l))try{l()}catch(v){o=v instanceof R?v.errors:[v]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var p=A(d),f=p.next();!f.done;f=p.next()){var y=f.value;try{Q(y)}catch(v){o=o??[],v instanceof R?o=P(P([],O(o)),O(v.errors)):o.push(v)}}}catch(v){n={error:v}}finally{try{f&&!f.done&&(i=p.return)&&i.call(p)}finally{if(n)throw n.error}}}if(o)throw new R(o)}},t.prototype.add=function(r){var e;if(r&&r!==this)if(this.closed)Q(r);else{if(r instanceof t){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(r)}},t.prototype._hasParent=function(r){var e=this._parentage;return e===r||Array.isArray(e)&&e.includes(r)},t.prototype._addParent=function(r){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(r),e):e?[e,r]:r},t.prototype._removeParent=function(r){var e=this._parentage;e===r?this._parentage=null:Array.isArray(e)&&L(e,r)},t.prototype.remove=function(r){var e=this._finalizers;e&&L(e,r),r instanceof t&&r._removeParent(this)},t.EMPTY=function(){var r=new t;return r.closed=!0,r}(),t}(),et=T.EMPTY;function rt(t){return t instanceof T||t&&"closed"in t&&h(t.remove)&&h(t.add)&&h(t.unsubscribe)}function Q(t){h(t)?t():t.unsubscribe()}var nt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},it={setTimeout:function(t,r){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];return setTimeout.apply(void 0,P([t,r],O(e)))},clearTimeout:function(t){var r=it.delegate;return((r==null?void 0:r.clearTimeout)||clearTimeout)(t)},delegate:void 0};function ot(t){it.setTimeout(function(){throw t})}function D(){}function C(t){t()}var q=function(t){g(r,t);function r(e){var n=t.call(this)||this;return n.isStopped=!1,e?(n.destination=e,rt(e)&&e.add(n)):n.destination=Pt,n}return r.create=function(e,n,i){return new U(e,n,i)},r.prototype.next=function(e){this.isStopped||this._next(e)},r.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(e){this.destination.next(e)},r.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(T),It=Function.prototype.bind;function F(t,r){return It.call(t,r)}var At=function(){function t(r){this.partialObserver=r}return t.prototype.next=function(r){var e=this.partialObserver;if(e.next)try{e.next(r)}catch(n){k(n)}},t.prototype.error=function(r){var e=this.partialObserver;if(e.error)try{e.error(r)}catch(n){k(n)}else k(r)},t.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(e){k(e)}},t}(),U=function(t){g(r,t);function r(e,n,i){var o=t.call(this)||this,u;if(h(e)||!e)u={next:e??void 0,error:n??void 0,complete:i??void 0};else{var s;o&&nt.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=function(){return o.unsubscribe()},u={next:e.next&&F(e.next,s),error:e.error&&F(e.error,s),complete:e.complete&&F(e.complete,s)}):u=e}return o.destination=new At(u),o}return r}(q);function k(t){ot(t)}function Ot(t){throw t}var Pt={closed:!0,next:D,error:Ot,complete:D},G=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function z(t){return t}function Tt(t){return t.length===0?z:t.length===1?t[0]:function(e){return t.reduce(function(n,i){return i(n)},e)}}var b=function(){function t(r){r&&(this._subscribe=r)}return t.prototype.lift=function(r){var e=new t;return e.source=this,e.operator=r,e},t.prototype.subscribe=function(r,e,n){var i=this,o=kt(r)?r:new U(r,e,n);return C(function(){var u=i,s=u.operator,a=u.source;o.add(s?s.call(o,a):a?i._subscribe(o):i._trySubscribe(o))}),o},t.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(e){r.error(e)}},t.prototype.forEach=function(r,e){var n=this;return e=W(e),new e(function(i,o){var u=new U({next:function(s){try{r(s)}catch(a){o(a),u.unsubscribe()}},error:o,complete:i});n.subscribe(u)})},t.prototype._subscribe=function(r){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(r)},t.prototype[G]=function(){return this},t.prototype.pipe=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return Tt(r)(this)},t.prototype.toPromise=function(r){var e=this;return r=W(r),new r(function(n,i){var o;e.subscribe(function(u){return o=u},function(u){return i(u)},function(){return n(o)})})},t.create=function(r){return new t(r)},t}();function W(t){var r;return(r=t??nt.Promise)!==null&&r!==void 0?r:Promise}function jt(t){return t&&h(t.next)&&h(t.error)&&h(t.complete)}function kt(t){return t&&t instanceof q||jt(t)&&rt(t)}var Ct=B(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),ut=function(t){g(r,t);function r(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return r.prototype.lift=function(e){var n=new K(this,this);return n.operator=e,n},r.prototype._throwIfClosed=function(){if(this.closed)throw new Ct},r.prototype.next=function(e){var n=this;C(function(){var i,o;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var u=A(n.currentObservers),s=u.next();!s.done;s=u.next()){var a=s.value;a.next(e)}}catch(c){i={error:c}}finally{try{s&&!s.done&&(o=u.return)&&o.call(u)}finally{if(i)throw i.error}}}})},r.prototype.error=function(e){var n=this;C(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=e;for(var i=n.observers;i.length;)i.shift().error(e)}})},r.prototype.complete=function(){var e=this;C(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var n=e.observers;n.length;)n.shift().complete()}})},r.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(r.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),r.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},r.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},r.prototype._innerSubscribe=function(e){var n=this,i=this,o=i.hasError,u=i.isStopped,s=i.observers;return o||u?et:(this.currentObservers=null,s.push(e),new T(function(){n.currentObservers=null,L(s,e)}))},r.prototype._checkFinalizedStatuses=function(e){var n=this,i=n.hasError,o=n.thrownError,u=n.isStopped;i?e.error(o):u&&e.complete()},r.prototype.asObservable=function(){var e=new b;return e.source=this,e},r.create=function(e,n){return new K(e,n)},r}(b),K=function(t){g(r,t);function r(e,n){var i=t.call(this)||this;return i.destination=e,i.source=n,i}return r.prototype.next=function(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,e)},r.prototype.error=function(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,e)},r.prototype.complete=function(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)},r.prototype._subscribe=function(e){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&i!==void 0?i:et},r}(ut);function Lt(t){return h(t==null?void 0:t.lift)}function S(t){return function(r){if(Lt(r))return r.lift(function(e){try{return t(e,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}var H=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function ct(t){return h(t==null?void 0:t.then)}function at(t){return h(t[G])}function st(t){return Symbol.asyncIterator&&h(t==null?void 0:t[Symbol.asyncIterator])}function lt(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Ut(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ft=Ut();function ht(t){return h(t==null?void 0:t[ft])}function vt(t){return xt(this,arguments,function(){var e,n,i,o;return tt(this,function(u){switch(u.label){case 0:e=t.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,I(e.read())];case 3:return n=u.sent(),i=n.value,o=n.done,o?[4,I(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,I(i)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function dt(t){return h(t==null?void 0:t.getReader)}function E(t){if(t instanceof b)return t;if(t!=null){if(at(t))return Vt(t);if(H(t))return Rt(t);if(ct(t))return Ft(t);if(st(t))return pt(t);if(ht(t))return Mt(t);if(dt(t))return Dt(t)}throw lt(t)}function Vt(t){return new b(function(r){var e=t[G]();if(h(e.subscribe))return e.subscribe(r);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Rt(t){return new b(function(r){for(var e=0;e<t.length&&!r.closed;e++)r.next(t[e]);r.complete()})}function Ft(t){return new b(function(r){t.then(function(e){r.closed||(r.next(e),r.complete())},function(e){return r.error(e)}).then(null,ot)})}function Mt(t){return new b(function(r){var e,n;try{for(var i=A(t),o=i.next();!o.done;o=i.next()){var u=o.value;if(r.next(u),r.closed)return}}catch(s){e={error:s}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}r.complete()})}function pt(t){return new b(function(r){Yt(t,r).catch(function(e){return r.error(e)})})}function Dt(t){return pt(vt(t))}function Yt(t,r){var e,n,i,o;return Et(this,void 0,void 0,function(){var u,s;return tt(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),e=_t(t),a.label=1;case 1:return[4,e.next()];case 2:if(n=a.sent(),!!n.done)return[3,4];if(u=n.value,r.next(u),r.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=a.sent(),i={error:s},[3,11];case 6:return a.trys.push([6,,9,10]),n&&!n.done&&(o=e.return)?[4,o.call(e)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return r.complete(),[2]}})})}function w(t,r,e,n,i){return new Bt(t,r,e,n,i)}var Bt=function(t){g(r,t);function r(e,n,i,o,u,s){var a=t.call(this,e)||this;return a.onFinalize=u,a.shouldUnsubscribe=s,a._next=n?function(c){try{n(c)}catch(l){e.error(l)}}:t.prototype._next,a._error=o?function(c){try{o(c)}catch(l){e.error(l)}finally{this.unsubscribe()}}:t.prototype._error,a._complete=i?function(){try{i()}catch(c){e.error(c)}finally{this.unsubscribe()}}:t.prototype._complete,a}return r.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;t.prototype.unsubscribe.call(this),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},r}(q);function qt(t){return S(function(r,e){var n=!1,i=null,o=null,u=!1,s=function(){if(o==null||o.unsubscribe(),o=null,n){n=!1;var c=i;i=null,e.next(c)}u&&e.complete()},a=function(){o=null,u&&e.complete()};r.subscribe(w(e,function(c){n=!0,i=c,o||E(t(c)).subscribe(o=w(e,s,a))},function(){u=!0,(!n||!o||o.closed)&&e.complete()}))})}var Gt=function(t){g(r,t);function r(e,n){return t.call(this)||this}return r.prototype.schedule=function(e,n){return this},r}(T),Y={setInterval:function(t,r){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];return setInterval.apply(void 0,P([t,r],O(e)))},clearInterval:function(t){var r=Y.delegate;return((r==null?void 0:r.clearInterval)||clearInterval)(t)},delegate:void 0},zt=function(t){g(r,t);function r(e,n){var i=t.call(this,e,n)||this;return i.scheduler=e,i.work=n,i.pending=!1,i}return r.prototype.schedule=function(e,n){var i;if(n===void 0&&(n=0),this.closed)return this;this.state=e;var o=this.id,u=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(u,o,n)),this.pending=!0,this.delay=n,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(u,this.id,n),this},r.prototype.requestAsyncId=function(e,n,i){return i===void 0&&(i=0),Y.setInterval(e.flush.bind(e,this),i)},r.prototype.recycleAsyncId=function(e,n,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return n;n!=null&&Y.clearInterval(n)},r.prototype.execute=function(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(e,n);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(e,n){var i=!1,o;try{this.work(e)}catch(u){i=!0,o=u||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),o},r.prototype.unsubscribe=function(){if(!this.closed){var e=this,n=e.id,i=e.scheduler,o=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,L(o,this),n!=null&&(this.id=this.recycleAsyncId(i,n,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},r}(Gt),Ht={now:function(){return Date.now()},delegate:void 0},X=function(){function t(r,e){e===void 0&&(e=t.now),this.schedulerActionCtor=r,this.now=e}return t.prototype.schedule=function(r,e,n){return e===void 0&&(e=0),new this.schedulerActionCtor(this,r).schedule(n,e)},t.now=Ht.now,t}(),$t=function(t){g(r,t);function r(e,n){n===void 0&&(n=X.now);var i=t.call(this,e,n)||this;return i.actions=[],i._active=!1,i}return r.prototype.flush=function(e){var n=this.actions;if(this._active){n.push(e);return}var i;this._active=!0;do if(i=e.execute(e.state,e.delay))break;while(e=n.shift());if(this._active=!1,i){for(;e=n.shift();)e.unsubscribe();throw i}},r}(X),j=new $t(zt),Jt=j;function yt(t){return t&&h(t.schedule)}function Qt(t){return t instanceof Date&&!isNaN(t)}function $(t,r,e){t===void 0&&(t=0),e===void 0&&(e=Jt);var n=-1;return r!=null&&(yt(r)?e=r:n=r),new b(function(i){var o=Qt(t)?+t-e.now():t;o<0&&(o=0);var u=0;return e.schedule(function(){i.closed||(i.next(u++),0<=n?this.schedule(void 0,n):i.complete())},o)})}function me(t,r){return r===void 0&&(r=j),qt(function(){return $(t,r)})}function bt(t){return t[t.length-1]}function Wt(t){return yt(bt(t))?t.pop():void 0}function Kt(t,r){return typeof bt(t)=="number"?t.pop():r}function _(t,r,e,n,i){n===void 0&&(n=0),i===void 0&&(i=!1);var o=r.schedule(function(){e(),i?t.add(this.schedule(null,n)):this.unsubscribe()},n);if(t.add(o),!i)return o}function mt(t,r){return r===void 0&&(r=0),S(function(e,n){e.subscribe(w(n,function(i){return _(n,t,function(){return n.next(i)},r)},function(){return _(n,t,function(){return n.complete()},r)},function(i){return _(n,t,function(){return n.error(i)},r)}))})}function wt(t,r){return r===void 0&&(r=0),S(function(e,n){n.add(t.schedule(function(){return e.subscribe(n)},r))})}function Xt(t,r){return E(t).pipe(wt(r),mt(r))}function Zt(t,r){return E(t).pipe(wt(r),mt(r))}function Nt(t,r){return new b(function(e){var n=0;return r.schedule(function(){n===t.length?e.complete():(e.next(t[n++]),e.closed||this.schedule())})})}function te(t,r){return new b(function(e){var n;return _(e,r,function(){n=t[ft](),_(e,r,function(){var i,o,u;try{i=n.next(),o=i.value,u=i.done}catch(s){e.error(s);return}u?e.complete():e.next(o)},0,!0)}),function(){return h(n==null?void 0:n.return)&&n.return()}})}function St(t,r){if(!t)throw new Error("Iterable cannot be null");return new b(function(e){_(e,r,function(){var n=t[Symbol.asyncIterator]();_(e,r,function(){n.next().then(function(i){i.done?e.complete():e.next(i.value)})},0,!0)})})}function ee(t,r){return St(vt(t),r)}function re(t,r){if(t!=null){if(at(t))return Xt(t,r);if(H(t))return Nt(t,r);if(ct(t))return Zt(t,r);if(st(t))return St(t,r);if(ht(t))return te(t,r);if(dt(t))return ee(t,r)}throw lt(t)}function ne(t,r){return r?re(t,r):E(t)}function gt(t,r){return S(function(e,n){var i=0;e.subscribe(w(n,function(o){n.next(t.call(r,o,i++))}))})}var ie=Array.isArray;function oe(t,r){return ie(r)?t.apply(void 0,P([],O(r))):t(r)}function ue(t){return gt(function(r){return oe(t,r)})}function ce(t,r,e,n,i,o,u,s){var a=[],c=0,l=0,d=!1,p=function(){d&&!a.length&&!c&&r.complete()},f=function(v){return c<n?y(v):a.push(v)},y=function(v){c++;var x=!1;E(e(v,l++)).subscribe(w(r,function(m){r.next(m)},function(){x=!0},void 0,function(){if(x)try{c--;for(var m=function(){var V=a.shift();u||y(V)};a.length&&c<n;)m();p()}catch(V){r.error(V)}}))};return t.subscribe(w(r,f,function(){d=!0,p()})),function(){}}function J(t,r,e){return e===void 0&&(e=1/0),h(r)?J(function(n,i){return gt(function(o,u){return r(n,o,i,u)})(E(t(n,i)))},e):(typeof r=="number"&&(e=r),S(function(n,i){return ce(n,i,t,e)}))}function ae(t){return t===void 0&&(t=1/0),J(z,t)}function we(t,r){return r===void 0&&(r=j),S(function(e,n){var i=null,o=null,u=null,s=function(){if(i){i.unsubscribe(),i=null;var c=o;o=null,n.next(c)}};function a(){var c=u+t,l=r.now();if(l<c){i=this.schedule(void 0,c-l),n.add(i);return}s()}e.subscribe(w(n,function(c){o=c,u=r.now(),i||(i=r.schedule(a,t),n.add(i))},function(){s(),n.complete()},void 0,function(){o=i=null}))})}var se=new b(function(t){return t.complete()});function Se(){return S(function(t,r){t.subscribe(w(r,D))})}function ge(t,r){return S(function(e,n){var i=0;e.subscribe(w(n,function(o){return t.call(r,o,i++)&&n.next(o)}))})}var le=B(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}}),Ee=function(t){g(r,t);function r(e){var n=t.call(this)||this;return n._value=e,n}return Object.defineProperty(r.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),r.prototype._subscribe=function(e){var n=t.prototype._subscribe.call(this,e);return!n.closed&&e.next(this._value),n},r.prototype.getValue=function(){var e=this,n=e.hasError,i=e.thrownError,o=e._value;if(n)throw i;return this._throwIfClosed(),o},r.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},r}(ut);function xe(t,r){return r===void 0&&(r=j),$(t,t,r)}function _e(t,r,e){var n=h(t)||r||e?{next:t,error:r,complete:e}:t;return n?S(function(i,o){var u;(u=n.subscribe)===null||u===void 0||u.call(n);var s=!0;i.subscribe(w(o,function(a){var c;(c=n.next)===null||c===void 0||c.call(n,a),o.next(a)},function(){var a;s=!1,(a=n.complete)===null||a===void 0||a.call(n),o.complete()},function(a){var c;s=!1,(c=n.error)===null||c===void 0||c.call(n,a),o.error(a)},function(){var a,c;s&&((a=n.unsubscribe)===null||a===void 0||a.call(n)),(c=n.finalize)===null||c===void 0||c.call(n)}))}):z}function fe(t,r){return S(function(e,n){var i=r??{},o=i.leading,u=o===void 0?!0:o,s=i.trailing,a=s===void 0?!1:s,c=!1,l=null,d=null,p=!1,f=function(){d==null||d.unsubscribe(),d=null,a&&(x(),p&&n.complete())},y=function(){d=null,p&&n.complete()},v=function(m){return d=E(t(m)).subscribe(w(n,f,y))},x=function(){if(c){c=!1;var m=l;l=null,n.next(m),!p&&v(m)}};e.subscribe(w(n,function(m){c=!0,l=m,!(d&&!d.closed)&&(u?x():v(m))},function(){p=!0,!(a&&c&&d&&!d.closed)&&n.complete()}))})}function Ie(t,r,e){r===void 0&&(r=j);var n=$(t,r);return fe(function(){return n},e)}function Ae(t,r){return new Promise(function(e,n){var i=new U({next:function(o){e(o),i.unsubscribe()},error:n,complete:function(){n(new le)}});t.subscribe(i)})}var he=["addListener","removeListener"],ve=["addEventListener","removeEventListener"],de=["on","off"];function Z(t,r,e,n){if(h(e)&&(n=e,e=void 0),n)return Z(t,r,e).pipe(ue(n));var i=O(be(t)?ve.map(function(s){return function(a){return t[s](r,a,e)}}):pe(t)?he.map(N(t,r)):ye(t)?de.map(N(t,r)):[],2),o=i[0],u=i[1];if(!o&&H(t))return J(function(s){return Z(s,r,e)})(E(t));if(!o)throw new TypeError("Invalid event target");return new b(function(s){var a=function(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];return s.next(1<c.length?c:c[0])};return o(a),function(){return u(a)}})}function N(t,r){return function(e){return function(n){return t[e](r,n)}}}function pe(t){return h(t.addListener)&&h(t.removeListener)}function ye(t){return h(t.on)&&h(t.off)}function be(t){return h(t.addEventListener)&&h(t.removeEventListener)}function Oe(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=Wt(t),n=Kt(t,1/0),i=t;return i.length?i.length===1?E(i[0]):ae(n)(ne(i,e)):se}export{Ee as B,b as O,ut as S,me as a,Ie as b,ge as c,we as d,Se as e,Ae as f,Oe as g,Z as h,xe as i,gt as m,_e as t};
