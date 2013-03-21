angular.module('moviesService', ['ngResource'])
  .factory('Movies', function($resource) {
    return $resource('movie.json', {}, {
      index: { method: 'GET', isArray: true},
      create: { method: 'POST' }
    });
  })
  .factory('Movie', function($resource){
    return $resource('movie/:movie_id.json', {}, {
      show: { method: 'GET' },
      update: { method: 'PUT' },
      destroy: { method: 'DELETE' }
    });
  });
