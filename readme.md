# Curiosidades sobre typescript

O typescript é um superset do javascript, é um facilitador para escrita de códigos Js, com um padrão tipado.
precisamos instalar sua dependência e pra isso é preciso ter um projeto em node onde podemos específicar os arquivos de leitura e onde será a 
saída..

para instalar o Typescript use: npm install typescript@2.3.2 --save-dev

E depois para configurar a transpilação ( Cpnversão dos .ts para .js), você precisa do tsconfig.json na raiz do seu projeto

{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true     
    },
    "include": [
        "app/ts/**/*"
    ]
}

Esse exemplo, diz o tipo de saída da compilação e o diretório de entrada e a saída.
 "noEmitOnError": true  = Diz que não pode fazer a transpilação sem erros de linguagem sintática, ou seja, sem erros de compilação. 
 "noImplicitAny": true = Diz que não pode transpilar sem os atributos do projetos estarem tipados

- No typescript se você criar uma variável do tipo string ou number, ela irá receber um auto-boxing, é uma expressão pra dizer que 
ela será do tipo primitivo mas funcionará como se tivesse sido criada como um objeto do tipo String ou Number com todas suas respectivas funções.

# Casting Explicito

É você força uma conversão de um tipo mais genêrico em algo mais específico, pois você não pode passar um valor genêrico para um tipo específico, 
apenas o contrario pode acontecer e pra isso você pode usar algo como:

<HtmlInputEvent>.document.querySelect("#teste"); -> Aqui estamos fazendo um casting explicito.

Exemplo de tipo específico em genêrico: 

let x: Element;
let y: HTMLInputElement;
x = y; // funciona!

E ao contrário: 

let x: Element;
let y: HTMLInputElement;
y = x; // erro