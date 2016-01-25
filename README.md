#koa-rest-api

A single resource REST app using [Koa](http://koajs.com/).

A Code Fellows 401 Project by [Joshua Ho](https://github.com/ricecreamdude), [James Mason](https://github.com/JHM90) and [Sabrina Tee](https://github.com/sabbyt/).


#Routes

[GET] (/api/pokemon)
Lists all pokemon stored in the database

[POST] (/api/pokemon) {name:string , type:string }
Adds a new pokemon to the database. Sets new pokemon's attributes to a provided JSON object or sets as a default.

[PUT] (/api/pokemon:id) {name:string , type:string } 
Updates attributes of pokemon with provided ID. Requires a JSON object.

[DELETE] (/api/pokemon:id)
Deletes pokemon matching provided ID.
