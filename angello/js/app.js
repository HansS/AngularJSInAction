var myModule = angular.module('Angello', []);

myModule.controller('MainCtrl', 
	function($scope, angelloModel, angelloHelper) { 
		$scope.currentStory;
		$scope.types = angelloModel.getTypes();
		$scope.statuses = angelloModel.getStatuses();
		$scope.stories = angelloModel.getStories();
		$scope.typesIndex = angelloHelper.buildIndex($scope.types, 'name');
		$scope.statusesIndex = angelloHelper.buildIndex($scope.statuses, 'name');
		$scope.currentStatus;
		$scope.currentType;
		
		$scope.setCurrentStory = function(story) {
			$scope.currentStory = story;
			$scope.currentStatus = $scope.statusesIndex[story.status];
			$scope.currentType = $scope.typesIndex[story.type];
		};

		$scope.setCurrentStatus = function(status) {
			if(typeof $scope.currentStory !== 'undefined') {
				$scope.currentStory.status = status.name;
			}
		};		

		$scope.setCurrentType = function(type) {
			if(typeof $scope.currentStory !== 'undefined') {
				$scope.currentStory.type = type.name;
			}
		};		

		$scope.createStory = function() {
			$scope.stories.push({
				title:'New story',
				description:'Description pending.'
			});
		};

	}
);
