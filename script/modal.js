document.addEventListener("DOMContentLoaded", function () {
    const botoesAbrir = document.querySelectorAll(".abrir-modal");
    const botoesFechar = document.querySelectorAll(".fechar-modal");
    const modais = document.querySelectorAll(".fundo-modal");

    botoesAbrir.forEach(botao => {
        botao.addEventListener("click", function () {
            const modalId = this.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.classList.add("ativo");
            document.body.classList.add("modal-open"); // Impede a rolagem
        });
    });

    botoesFechar.forEach(botao => {
        botao.addEventListener("click", function () {
            this.closest(".fundo-modal").classList.remove("ativo");
            document.body.classList.remove("modal-open"); // Restaura a rolagem
        });
    });

    modais.forEach(modal => {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.classList.remove("ativo");
                document.body.classList.remove("modal-open");
            }
        });
    });
});

