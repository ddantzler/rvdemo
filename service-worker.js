"use strict";var precacheConfig=[["/rvdemo/index.html","472d56ba86d238757555ff893be0e42e"],["/rvdemo/static/css/main.3c4ce080.css","c7537abe57a1aaa58b826509d93bd073"],["/rvdemo/static/js/main.694663e6.js","ad0a70caafca8815bade96b8d816786a"],["/rvdemo/static/media/open-sans-v15-latin-300.521d17bc.woff","521d17bc9f3526c690e8ada6eee55bec"],["/rvdemo/static/media/open-sans-v15-latin-300.60c86674.woff2","60c866748ff15f5b347fdba64596b1b1"],["/rvdemo/static/media/open-sans-v15-latin-300italic.06bbd318.woff2","06bbd3188b34820cd83a0e0b3d0a6f57"],["/rvdemo/static/media/open-sans-v15-latin-300italic.8a648ff3.woff","8a648ff38ded89ea15916e84529d62d3"],["/rvdemo/static/media/open-sans-v15-latin-600.1cd5320f.woff","1cd5320f8937d337b61d5117cf9d7b28"],["/rvdemo/static/media/open-sans-v15-latin-600.223a277b.woff2","223a277bd88d8a90c8cdf24cda0ad5f5"],["/rvdemo/static/media/open-sans-v15-latin-600italic.318ea1ad.woff","318ea1ada4102c0704a0637228dcad03"],["/rvdemo/static/media/open-sans-v15-latin-600italic.4950a720.woff2","4950a7205f0b5cefe41fc03ac346e236"],["/rvdemo/static/media/open-sans-v15-latin-700.623e3205.woff","623e3205570002af47fc2b88f9335d19"],["/rvdemo/static/media/open-sans-v15-latin-700.d08c09f2.woff2","d08c09f2f169f4a6edbcf8b8d1636cb4"],["/rvdemo/static/media/open-sans-v15-latin-700italic.72e19cbb.woff","72e19cbb0e38c6773a7751156752cec4"],["/rvdemo/static/media/open-sans-v15-latin-700italic.c02f5da6.woff2","c02f5da6e82e1efe0b45841bfd49ce37"],["/rvdemo/static/media/open-sans-v15-latin-800.aaeffaf2.woff2","aaeffaf205b9bbb09920089a14dbe9e8"],["/rvdemo/static/media/open-sans-v15-latin-800.c6aa0c4a.woff","c6aa0c4a601fb6ac66f8253fa594dff5"],["/rvdemo/static/media/open-sans-v15-latin-800italic.6b3973ff.woff2","6b3973ffe02bb6a8be0f8453506ec032"],["/rvdemo/static/media/open-sans-v15-latin-800italic.79b58175.woff","79b58175343190550489efe46a7f1138"],["/rvdemo/static/media/open-sans-v15-latin-italic.987032ea.woff2","987032ea5d57c93d8da215678eae3b86"],["/rvdemo/static/media/open-sans-v15-latin-italic.db70d0b9.woff","db70d0b9cb27ada1a260a2b35e756b8b"],["/rvdemo/static/media/open-sans-v15-latin-regular.bf2d0783.woff","bf2d0783515b7d75c35bde69e01b3135"],["/rvdemo/static/media/open-sans-v15-latin-regular.cffb686d.woff2","cffb686d7d2f4682df8342bd4d276e09"],["/rvdemo/static/media/pool-pros-logo-footer.9b024fbb.png","9b024fbb6e563a6cbc79b843fed50377"],["/rvdemo/static/media/pool-pros-logo.5b885281.png","5b8852815ba8b125dd7c0cbabe00ca75"],["/rvdemo/static/media/ss-pika.0b2cc683.svg","0b2cc683696912226d490919898396b0"],["/rvdemo/static/media/ss-pika.1fcaa4ac.woff","1fcaa4ac54baaca933141dfc7652c0d6"],["/rvdemo/static/media/ss-pika.974aca06.ttf","974aca06c9be1fc5804191117dad73fd"],["/rvdemo/static/media/ss-pika.bf10b224.eot","bf10b22424dd12059cb140e89718e334"],["/rvdemo/static/media/water-image.e1d0671f.png","e1d0671ff946cad4da18a2b538534a74"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/rvdemo/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});