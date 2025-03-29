<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minimercado - Fase 2</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body id="topo">
    <!-- Cabeçalho -->
    <header class="text-white text-center p-4" style="background-color: #DAA520;">
        <h1>Minimercado Econômico</h1>
        <p class="lead">Produtos essenciais, com qualidade e economia para sua casa</p>
    </header>

    <!-- Menu de Navegação -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#topo">Início</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#produtos">Produtos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#cadastro">Cadastro</a></li>
                    <li class="nav-item"><a class="nav-link" href="#servicos">Serviços</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Carrossel Bootstrap -->
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="img/arroz.jpg" class="d-block w-100" alt="Promoção de arroz tipo 1, 1kg">
            </div>
            <div class="carousel-item">
                <img src="img/feijao.jpg" class="d-block w-100" alt="Oferta de feijão preto, 1kg">
            </div>
        </div>
    </div>

    <!-- Produtos -->
    <section id="produtos" class="container mt-5">
        <h2 class="text-center">Produtos</h2>
        <div class="row justify-content-center">
            <div class="col-md-3">
                <div class="card">
                    <img src="img/arroz.jpg" class="card-img-top" alt="Arroz tipo 1 1kg">
                    <div class="card-body text-center">
                        <h5 class="card-title">Arroz</h5>
                        <p class="card-text">R$10,00</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img src="img/feijao.jpg" class="card-img-top" alt="Feijão preto 1kg">
                    <div class="card-body text-center">
                        <h5 class="card-title">Feijão</h5>
                        <p class="card-text">R$8,50</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Formulário de Cadastro -->
    <section id="cadastro" class="container mt-5">
        <h2 class="text-center">Cadastro do Cliente</h2>
        <form id="formCliente">
            <div class="mb-3">
                <label for="nome" class="form-label">Nome completo:</label>
                <input type="text" class="form-control" id="nome" required placeholder="Digite seu nome">
            </div>
            <div class="mb-3">
                <label for="endereco" class="form-label">Endereço:</label>
                <input type="text" class="form-control" id="endereco" required>
            </div>
            <div class="mb-3">
                <label for="cpf" class="form-label">CPF:</label>
                <input type="number" class="form-control" id="cpf" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Sexo:</label><br>
                <input type="radio" name="sexo" value="masculino" required> Masculino
                <input type="radio" name="sexo" value="feminino" required> Feminino
            </div>
            <div class="mb-3">
                <label for="telefone" class="form-label">Telefone:</label>
                <input type="tel" class="form-control" id="telefone" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">E-mail:</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="observacoes" class="form-label">Observações:</label>
                <textarea class="form-control" id="observacoes"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Forma de retirada:</label><br>
                <input type="radio" name="retirada" value="entrega" required> Entrega em domicílio
                <input type="radio" name="retirada" value="local" required> Retirada no local
            </div>
            <div class="mb-3">
                <label for="data" class="form-label">Data:</label>
                <input type="date" class="form-control" id="data" required>
            </div>
            <div class="mb-3">
                <label for="hora" class="form-label">Hora:</label>
                <input type="time" class="form-control" id="hora" required>
            </div>
            <button type="submit" class="btn btn-success">Enviar</button>
            <button type="reset" class="btn btn-secondary">Limpar</button>
        </form>
    </section>

    <!-- Rodapé -->
    <footer class="bg-light text-center p-3 mt-5">
        <p>&copy; 2025 Minimercado Econômico. Desenvolvido por Carina Busi</p>
        <p id="dataHora"></p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
