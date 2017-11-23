module.exports = function (java){

  return {
    get: function (req, res) {

      java.classpath.push("TextToSpeech.jar");  //Needs to be on the root of the project

      var pessoas = java.newInstanceSync("Teste");

      pessoas.teste(3, function (error,data) {
        
        return res.json({sucess: data});

      });

    }
  }
}