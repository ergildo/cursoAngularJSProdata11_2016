(function () {
    angular.module('pdApp')
        .controller('CadastroCarroController', CadastroCarroController);

    CadastroCarroController.$inject = ['AlertService'];

    function CadastroCarroController(AlertService) {
        var vm = this;

        vm.entidade = {};

        vm.sexo = [
            {valor:'M', descricao:'Masculino'},
            {valor:'F', descricao:'Feminino'}
        ];

        vm.tipoPessoa = [
            {tipo:'F', nome:'Física'},
            {tipo:'J', nome:'Jurídica'}
        ];

        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.excluir = excluir;

        function salvar() {
            AlertService.success('Registro salvo com sucesso!');
        }

        function limpar() {
            vm.entidade = {};
        }

        function excluir() {
            AlertService.error('Registro excluido com sucesso!');
        }
    }
})();
