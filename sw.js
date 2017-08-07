const VERSION = '@renanbastos93';

self.addEventListener('install', event => {
    event.waitUntil(new Promise((resolve, reject) => {
    	caches.open(VERSION).then(cache => {
    		return cache.addAll([
    			'./',
                '/index.html',
                '/js/content.js',
                '/js/modal.js',
    			'/img/eu.jpg',
    			'/css/style.css',
    			'/css/modal.css',
    			'/css/font-mfizz.css',
    			'/css/font-mfizz.eot',
    			'/css/font-mfizz.svg',
    			'/css/font-mfizz.ttf',
    			'/css/font-mfizz.woff'
    		]).then(_ => {
    			console.log('INSTALLED ' + VERSION);
        		resolve();
    		}).catch(err => {
    			console.log('Não deu!', err);
    		})
    	})
    }))
})

self.addEventListener('activate', event => {
    event.waitUntil(new Promise((resolve, reject) => {
        caches.keys().then(keysList => {
            return Promise.all(keysList.map(cacheKey => {
                if (cacheKey !== VERSION) {
                    return caches.delete(cacheKey)
                }
            })).then(_ => {
                console.log('ACTIVATED ' + VERSION)
                resolve()
            })
        })
    }))
})

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url)
    const errorPage = './404.html'
    console.log('Requisitou: ', event.request.url)

    return event.respondWith(
        caches.match(event.request).then(response => {
        	return response || fetch(event.request).then(response => {
        		if (response.ok) {
        			caches.open(VERSION).then(cache => {
        				cache.put(event.request, response)
        			})
        			return response.clone()
        		} else {
        			return caches.match(errorPage)
        		}
        	})
        })
    )
});







