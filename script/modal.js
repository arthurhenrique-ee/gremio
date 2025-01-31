document.addEventListener("DOMContentLoaded", function () {
    const botoesAbrir = document.querySelectorAll(".abrir-modal"); // Todos os botões "Saber mais"
    const botoesFechar = document.querySelectorAll(".fechar-modal"); // Todos os botões de fechar
    const modais = document.querySelectorAll(".fundo-modal"); // Todos os modais

    // Abre o modal correspondente ao botão clicado
    botoesAbrir.forEach(botao => {
        botao.addEventListener("click", function () {
            const modalId = this.getAttribute("data-modal"); // Pega o ID do modal que deve abrir
            document.getElementById(modalId).style.display = "flex"; // Mostra o modal certo
        });
    });

    // Fecha o modal ao clicar no botão "X"
    botoesFechar.forEach(botao => {
        botao.addEventListener("click", function () {
            this.closest(".fundo-modal").style.display = "none"; // Esconde apenas o modal onde o botão foi clicado
        });
    });

    // Fecha o modal ao clicar fora dele
    modais.forEach(modal => {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) { // Garante que está clicando fora do conteúdo
                modal.style.display = "none";
            }
        });
    });
});
