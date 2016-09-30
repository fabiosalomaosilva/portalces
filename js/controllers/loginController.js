angular.module("appCes").controller("loginController", function ($scope, $window, $location) {
    var ss = $scope;
    ss.Mensagem = "Deu tudo certo";

    $scope.autenticar = function (data) {
        //alert(data.login);
        var aa = auth.signInWithEmailAndPassword(data.login, data.senha);
        if (auth.currentUser != null) {
            var url = String(window.location);
            url = url.substr(0, String($window.location.href).indexOf("www") + 4);
            $window.location.href = url + "/"

        }
        console.log(aa);
    }
});

