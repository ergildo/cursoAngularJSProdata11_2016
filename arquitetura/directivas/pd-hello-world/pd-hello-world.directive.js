(function () {
    'use strict';

    angular
        .module('pdAppArquitetura')
        .directive('pdHelloWorld', pdHelloWorld);

    /* @ngInject */
    function pdHelloWorld() {
        return {
            restrict: 'E',
            template: '<div> Esse é meu primeiro componente</div>'
        };
    }
})();

