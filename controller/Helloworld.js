import HttpResponse from "../http/response/HttpResponse.js"

export default class Helloworld{
  sayHello(req, res){
    const htres = new HttpResponse()

    res.write(
      htres.httpSuccess(200, "OK", "Hello World!", [
        {
          "id": 1,
          "name": "Peri Nurjaman"
        }
      ]))
      
    res.end()
  }
}