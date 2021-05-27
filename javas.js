function mostrarQuadrado() {
            var input = document.querySelector("input");
            var numero = input.value;
            numero = parseInt(numero);
            var resultado = numero * numero;

            alert("O número "+numero+" ao quadrado é "+resultado);
        }

        var botao = document.querySelector("button");
        botao.onclick = mostrarQuadrado;