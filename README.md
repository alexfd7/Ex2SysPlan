# Ex2SysPlan


<h2> Consideração 1 </h1>


O envio dos dados para a api "https://zeit-endpoint.brmaeji.now.sh/api/auth", funciona perfeitamenamente
via postman, conforme teste efetuado: "https://www.getpostman.com/collections/f572e1a1a636bc2f0d2f"

Quando adicionado no Angular, pela aplicação estar localmente está dando problema de CORS:

"Access to XMLHttpRequest at 'https://zeit-endpoint.brmaeji.now.sh/api/auth' from origin 'http://localhost:56371' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource."

Para contonar esse problema no back-end da API localizada em "https://zeit-endpoint.brmaeji.now.sh/api/auth", 
deve-se configurar/adicionar a seguinte regra "Access-Control-Allow-Origin: *".


<h2> Consideração 2 </h1>

Sobre esse item: "1a) Servir interface web composta de um index.html e um arquivo .js com a aplicação em Angular."

São tecnologias (engines) responsáveis por criarem o Front-End: Angular,React, Vue. Não faz sentido voce adotar uma tecnologia
que será responsável pela criação de todo o seu Front-End de forma isolada do Back-End e
 Consumir de uma API (Back-End) que te retorna arquivos .html e arquivos .js.



