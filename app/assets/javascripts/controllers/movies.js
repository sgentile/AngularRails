function MoviesCtrl($scope, Movies){
    $scope.movies = Movies.index();
};

function MovieShowCtrl($scope, $location, $routeParams, $dialog, Movie){
  console.log($routeParams);
  $scope.movie = Movie.show({movie_id:$routeParams.movie_id});

  $scope.remove = function(id){
    var title = 'Delete Movie?';
    var msg = 'Are you sure you want to delete this movie?';
    var btns = [{result:'cancel', label: 'Cancel'}, {result:'ok', label: 'OK', cssClass: 'btn-primary'}];

    $dialog.messageBox(title, msg, btns)
      .open()
      .then(function(result){
        if(result === 'ok'){
          new Movie.destroy({movie_id:id}, function(){
            $location.path('/movies');
          });
        }
      });
  }

  $scope.convertBoolean = function(val){
    return val ? 'Yes' : 'No';
  }
};

function MovieAddCtrl($scope, $location, Movies, Movie){
  $scope.movie = {};
  $scope.create = function(movie){
    var movieService = new Movies(movie);
    movieService.$create(function(movie){
      $location.path('/movies/' + movie.id);
    });
  }
};

function MovieEditCtrl($scope, $routeParams, $location, Movie){
  console.log('MovieEditCtrl');
  $scope.master = {};
  var movie_id = $routeParams.movie_id;
  $scope.movie = new Movie.show({movie_id:movie_id}, function(resource){
    $scope.master = angular.copy(resource);
  });

  $scope.update = function(movie){
    movie.$update({movie_id:movie_id}, function(updatedMovie){
      $location.path('/movies/' + updatedMovie.id);
    });
  }
}

