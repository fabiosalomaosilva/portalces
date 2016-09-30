angular.module("appCes").controller("homeController", function ($scope) {
    var ss = $scope;
    ss.Mensagem = auth.currentUser;

    var pessoasList = firebase.database().ref('pessoas/');
    starCountRef.on('value', function (snapshot) {
        pessoas = starCountRef(snapshot.val());
    });
});