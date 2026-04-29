# JavaScript Studies Repository

Este repositório serve como um caderno de estudos e exemplos práticos sobre diversos tópicos fundamentais e modernos do JavaScript. Cada pasta representa uma área de foco, com código que ilustra os conceitos abordados.

## Tópicos Abordados:

### 1. Asynchronous JavaScript (JavaScript Assíncrono)
- Explora o mundo das operações assíncronas em JavaScript, essencial para interações com a web.
- **APIs**: Exemplos de como buscar dados de APIs externas (como informações de países e geolocalização) usando `fetch`.
- **Promises**: Entendimento de Promises, incluindo `Promise.all` para executar múltiplas operações assíncronas em paralelo.
- **Async/Await**: Demonstração da sintaxe `async/await` para escrever código assíncrono de forma mais legível e síncrona.

### 2. Constructor Functions (Funções Construtoras)
- Estudo das funções construtoras tradicionais do JavaScript.
- **Criação de Objetos**: Como usar `new` para instanciar objetos a partir de funções construtoras.
- **Protótipos**: Conceitos de protótipos (`.prototype` e `__proto__`) e como adicionar métodos para serem compartilhados entre instâncias.

### 3. ES6 Functions (Funções ES6 e Classes)
- Introdução às funcionalidades de funções e classes introduzidas no ECMAScript 2015 (ES6).
- **Classes**: Utilização da sintaxe `class` como "açúcar sintático" para funções construtoras e protótipos.
- **`Object.create()`**: Uma alternativa para criação de objetos e implementação de herança prototípica.

### 4. Inheritance between Classes (Herança entre Classes)
- Detalha as diferentes maneiras de implementar herança em JavaScript.
- **Herança com Funções Construtoras**: Como herdar propriedades e métodos entre funções construtoras usando `call()` e `Object.create()` para vincular protótipos.

### 5. Modern JS Development (Desenvolvimento JavaScript Moderno)
- Foca em práticas e recursos essenciais para o desenvolvimento JavaScript contemporâneo.
- **ES Modules**: Exploração do sistema de módulos (`import` e `export`) para organizar e reutilizar código de forma eficiente.
- **Exports**: Exemplos de exportações nomeadas (`export const ...`) e exportações padrão (`export default function ...`).
- **Top-level Await**: Uso de `await` fora de funções `async` em módulos, permitindo o carregamento assíncrono de recursos no início do script.