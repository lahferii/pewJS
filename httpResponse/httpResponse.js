class HttpResponse{
  #jsonFormat = {
    "meta": {
      "code": null,
      "status": null,
      "message": null,
    },
    "body": {
      "data": null
    }
  }

  httpSuccess(code, status, message, data){
    this.#jsonFormat.meta.code = code
    this.#jsonFormat.meta.status = status
    this.#jsonFormat.meta.message = message

    this.#jsonFormat.body.data = data

    return JSON.stringify(this.#jsonFormat)
  }
  
  httpError(code, status, message){
    this.#jsonFormat.meta.code = code
    this.#jsonFormat.meta.status = status
    this.#jsonFormat.meta.message = message
    
    return JSON.stringify(this.#jsonFormat)
  }
}

const htres = new HttpResponse()

export {htres, HttpResponse}