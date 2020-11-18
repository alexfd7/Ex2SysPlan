# Ex2SysPlan


<h2> Consideração 1 </h1>


O envio dos dados para a api "https://zeit-endpoint.brmaeji.now.sh/api/auth", funciona perfeitamenamente
via postman, conforme teste efetuado: "https://www.getpostman.com/collections/f572e1a1a636bc2f0d2f"

Quando adicionado no Angular, pela aplicação estar localmente está dando problema de CORS:

"Access to XMLHttpRequest at 'https://zeit-endpoint.brmaeji.now.sh/api/auth' from origin 'http://localhost:56371' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource."

Para habilitar o envio eu teria que subir em uma máquina em produção, ou desabilitando o CORS no back-end da API localizada em "https://zeit-endpoint.brmaeji.now.sh/api/auth", 
deve-se configurar/adicionar a seguinte regra "Access-Control-Allow-Origin: *".


<h2> Consideração 2 </h1>

Sobre esse item: "1a) Servir interface web composta de um index.html e um arquivo .js com a aplicação em Angular."

O Vue.Js é uma tecnologia (uma engine) responsável por criar todo Front-End. Não faz sentido voce adotar esta tecnologia
responsável pela criação do FRONT-END de forma isolada do BACK-END  e consumir de uma API (BACK-END) retornos de arquivos .html e arquivos .js.



