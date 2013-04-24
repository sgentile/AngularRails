function MoviesCtrl($scope, Movies) {
    "use strict";
    $scope.movies = Movies.index();
}

function MovieShowCtrl($scope, $location, $routeParams, $dialog, Movie) {"use strict";
    $scope.movie = Movie.show({
        movie_id : $routeParams.movie_id
    });

    $scope.remove = function(id) {
        var title = 'Delete Movie?', msg = 'Are you sure you want to delete this movie?', btns = [{
            result : 'cancel',
            label : 'Cancel'
        }, {
            result : 'ok',
            label : 'OK',
            cssClass : 'btn-primary'
        }];

        $dialog.messageBox(title, msg, btns).open().then(function(result) {
            if (result === 'ok') {
                Movie.destroy({
                    movie_id : id
                }, function() {
                    $location.path('/movies');
                });
            }
        });
    };
    
    $scope.convertBoolean = function(val) {
        return val ? 'Yes' : 'No';
    };
}

function MovieAddCtrl($scope, $location, Movies, Movie) {
    "use strict";
    $scope.movie = {};
    $scope.create = function(movie) {
        var movieService = new Movies(movie);
        movieService.$create(function(movie) {
            $location.path('/movies/' + movie.id);
        });
    }
}

function MovieEditCtrl($scope, $routeParams, $location, Movie) {
    "use strict";
    
    $scope.master = {};
    var movie_id = $routeParams.movie_id;
    $scope.movie = Movie.show({
        movie_id : movie_id
    }, function(resource) {
        $scope.master = angular.copy(resource);
    });

    $scope.update = function(movie) {
        movie.$update({
            movie_id : movie_id
        }, function(updatedMovie) {
            $location.path('/movies/' + updatedMovie.id);
        });
    }
}

