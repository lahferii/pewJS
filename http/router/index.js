import http from "http"

export default class RouteHandling{
  #routes = []
  #server = null

  constructor(){  
    this.#server = http.createServer((request, response) => {
      const passedRoute = this.#routes.find((r) => {
        return r.url == request.url && r.method == request.method
      })
      
      if(passedRoute){
        passedRoute.controller(request, response)
      } else {
        response.statusCode = 404
        response.end("Url Not Found")
      }
    })

    this.#server.listen(process.env.PORT)
  }

  get(url, controller){
    this.#routes.push({
      url: url,
      method: "GET",
      controller: controller
    })
  }

  post(url, controller){
    this.#routes.push({
      url: url,
      method: "POST",
      controller: controller
    })
  }

  put(url, controller){
    this.#routes.push({
      url: url,
      method: "PUT",
      controller: controller
    })
  }

  delete(url, controller){
    this.#routes.push({
      url: url,
      method: "DELETE",
      controller: controller
    })
  }
}