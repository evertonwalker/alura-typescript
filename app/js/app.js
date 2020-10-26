const controller = new NegociocaoController();
document.querySelector('form')
    .addEventListener('submit', controller.adiciona.bind(controller));
