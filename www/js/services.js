angular.module('starter.services', [])

.service('NinjasService', function() {

    // dentro de um service nós NAO usamos $scope para declarar variáveis
    let ninjas = [
        {
            nome: 'Caique',
            img: 'https://scontent.frao1-1.fna.fbcdn.net/v/t1.0-9/24232525_10213175365572349_7106922173801280283_n.jpg?oh=585faf7e661343edcc87b4d740323841&oe=5B209C30',
            descricao: 'CEO da Mauá Jr'
        },
        {
            nome: 'Giselle',
            img: 'https://scontent.frao1-1.fna.fbcdn.net/v/t31.0-8/23826260_1760180397617296_8904301672250938402_o.jpg?oh=6b003e02eb0fc6939f8c77e514284132&oe=5AE5B50D',
            descricao: 'Fo fi nhosssss'
        },
        {
            nome: 'Daniel',
            img: 'https://scontent.frao1-1.fna.fbcdn.net/v/t1.0-9/17021741_1364391600248055_2950396897780646506_n.jpg?oh=90a366425804d7216ab29582e3064334&oe=5ADFC329',
            descricao: 'Ele é muito universitário'
        }
    ];


    let servico = {}; //o objeto servico é quem possui os metodos/funçoes para informar a lista dos NinjasService
                      //e qual perfil foi selecionado pra ver

    //aqui estamos declarando que a funcao listarNinjas é um atributo do objeto servico
    servico.listarNinjas = () =>{
        return ninjas; //essa funcao, que pertence ao objeto servico, retorna a lista de todos os ninjas quando chamada
    }


    let ninjaEscolhido = {}; // essa é uma variavel local, que ira armazenar as informacoes do perfil do ninja que for escolhido


    //aqui estamos declarando que a funcao escolherNinja é um atributo do objeto servico
    servico.escolherNinja = (ninja) =>{ //essa funcao precisa de parametro, pois ela ira definir qual ninja que voce quer ver o perfil

        ninjaEscolhido = ninja; //nessa linha estamos passando as informacoes do ninja, que veio como parametro do controller, e armazenando como ninjaEscolhido
    }

    //aqui estamos declarando que a funcao mostrarNInja é um atributo do objeto servico
    servico.mostrarNInja = () =>{
        return ninjaEscolhido; //essa funcao retorna para o controller as informacoes do ninjaEscolhido
    }

    return servico; // o objeto servico é retornado, pois assim podemos acessar seus metodos/funcoes através dos controllers
});
