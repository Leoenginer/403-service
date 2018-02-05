angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, NinjasService, $state) {
//nao esqueca de declarar o nome do service aqui ^

    $scope.ninjas = NinjasService.listarNinjas(); //aqui estamos chamando o metodo listarNinjas, que retorna o vetor de ninjas,
                                                  //e salvando esse vetor na $scope.ninjas, para que possamos exibir eles no html

    $scope.selecionarPerfil = (ninja) =>{
        NinjasService.escolherNinja(ninja); //aqui estamos passando o objeto inteiro do ninja para que,
                                            //la no servico, possamos armazena-lo como ninjaEscolhido

        $state.go('perfil');
    }
})

.controller('PerfilCtrl', function($scope, NinjasService, $state) {
//nao esqueca de declarar o nome do service aqui ^

    $scope.ninja =  NinjasService.mostrarNInja();

    //NAO SE ASSUTEM COM ESSA FUNCAO AQUI!!!!!
    $scope.$on( "$ionicView.enter", function( scopes, states ) { // essa funcao é usada pra que sempre quando voce entrar na pagina,
        if( states.fromCache && states.stateName == 'perfil' ) { // o controller execute novamente o  codigo abaixo e atualize a $scope.ninja
                                                    // ^ aqui entre aspas simples, voces colocam o state da pagina, no caso, essa é perfil

            $scope.ninja =  NinjasService.mostrarNInja();//aqui estamos chamando o metodo mostrarNinja, que retorna o objeto ninjaEscolhido,
                                                          //e salvando esse objeto na $scope.ninja, para que possamos exibir as informacoes dele
            console.log($scope.ninja);
        }
    });

    $scope.voltar = () =>{
        $state.go('tab.chats');
    }
});
