const controller = new NegociacaoController();

document.querySelector('.form').addEventListener('submit', controller.add.bind(controller));
