#Koa vs. Vanilla Node & Express

[Koa.js](http://koajs.com/) (when compared to [Express](http://expressjs.com/) and [Vanilla Node](https://nodejs.org/en/)) aims to be a smaller and more expressive foundation for web applications and APIs. Broadly, Koa generators allow us to remove callbacks WITHIN code and write cleaner and more legible code (with the use of ES6 generator functions).

The file, api_router.js, demonstrates how Koa can be used to set up a HTTP server. Like Express, Koa allows us to write routes much easier and quicker than in traditional Node.

Our team believes that Koa deviates the most from Express by how it handles HTTP requests. Express explicitly defines response and request arguments for its routes, but Koa takes these arguments and turns them into attributes on a Koa object (refered to as Context) - adding several other methods in the process. This allows the programmer to add in response or request handlers as they are needed, without having to constantly define them like in Express.

Next Koa leans heavily on its 'yield' method, which it uses to make simple calls to middleware. Yield works like a callback to a specified location, but unlike Express, which only allows you to call a single callback, Koa allows us to call as many as we would like without writing tons of inline code.

Our team finds Koa to be a refreshing approach to server writing. The Express framework is straight forward and very easy to understand as a beginner, while Koa does a great job of reducing Express' rigidity and allows for an easy-to-read final product. That said, Koa does have its downside - for example, the docs provided are not as easy to understand as Express, and Koa requires separate middleware that need to be included with an additional npm install. Many of the separate middleware are not maintained by the Koa team which can affect its reliability. 
