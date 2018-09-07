console.log('Hello from sw.js')

//////////////////////////////////////////////////////////////////////////////
//		load workbox
//////////////////////////////////////////////////////////////////////////////
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')

if (workbox) {
	console.log(`Yay! Workbox is loaded 🎉`)
} else {
	console.log(`Boo! Workbox didn't load 😬`)
}

//////////////////////////////////////////////////////////////////////////////
//		set log level
//////////////////////////////////////////////////////////////////////////////
// The most verbose - displays all logs.
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug)

//////////////////////////////////////////////////////////////////////////////
//		register some routes
//////////////////////////////////////////////////////////////////////////////
// workbox.routing.registerRoute(
// 	new RegExp('.*\.js'),
// 	workbox.strategies.cacheFirst()
// )
// 
workbox.routing.registerRoute(
	new RegExp('index.html'),
	workbox.strategies.cacheFirst()
)

workbox.routing.registerRoute(
	new RegExp('/'),
	workbox.strategies.cacheFirst()
)
// 
// // TODO register / for index.html
// 
// //////////////////////////////////////////////////////////////////////////////
// //		precache and route
// //////////////////////////////////////////////////////////////////////////////
// 
// // TO BE FILLED BY ``````
// workbox.precaching.precacheAndRoute([])
