#koa-rest-api

A single resource REST app using [Koa](http://koajs.com/).

A Code Fellows 401 Project by [Joshua Ho](https://github.com/ricecreamdude), [James Mason](https://github.com/JHM90) and [Sabrina Tee](https://github.com/sabbyt/).


#Routes

[GET] (/api/pokemon)
Lists all pokemon stored in the database

[POST] (/api/pokemon) {name: , type: }
Adds a new pokemon to the database. Accpets a JSON object or sets as default.

[PUT] (/api/pokemon:id) {name: , type: } 
Updates attributes of pokemon with provided ID. Requires a JSON object.

[DELETE] (/api/pokemon:id)
Deletes pokemon matching provided ID.
