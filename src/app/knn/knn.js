angular.module( 'machineLearning.knn', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'knn', {
    url: '/knn',
    views: {
      "main": {
        controller: 'KnnCtrl',
        templateUrl: 'knn/knn.tpl.html'
      }
    },
    data:{ pageTitle: 'K-Nearest-Neighbour' }
  });
})

.controller( 'KnnCtrl', function KnnCtrl( $scope ) {

  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
