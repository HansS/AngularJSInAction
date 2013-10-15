var myModule = angular.module('Angello', []);

myModule.factory('angelloHelper', function() {
	
	var buildIndex = function(source, property) {
		var tempArray = [];
		for(var i = 0, len = source.length; i < len; ++i) {
			tempArray[source[i][property]] = source[i];
		}
		return tempArray;
	};

	return {
		buildIndex: buildIndex
	};

});

myModule.controller('MainCtrl', 
	function($scope, angelloHelper) { 

		$scope.statuses = [
			{name:'Back Log'},
			{name:'To Do'},
			{name:'In Progress'},
			{name:'Code Review'},
			{name:'QA Review'},
			{name:'Verified'},
			{name:'Done'}
		];

		$scope.types = [
			{name:'Feature'},
			{name:'Enhancement'},
			{name:'Bug'},
			{name:'Spike'}
		];

		// var buildIndex = function(source, property) {
		// 	var tempArray = [];
		// 	for(var i = 0, len = source.length; i < len; ++i) {
		// 		tempArray[source[i][property]] = source[i];
		// 	}
		// 	return tempArray;
		// };

		$scope.typesIndex = angelloHelper.buildIndex($scope.types, 'name');
		$scope.statusesIndex = angelloHelper.buildIndex($scope.statuses, 'name');
		$scope.currentStory;
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

		$scope.stories = [
			{
				title:'Story 00', 
				description:'Description pending.',
				criteria:'Criteria pending.',
				status:'To Do',
				type:'Feature',
				reporter:'Lukas Ruebbelke',
				assignee:'Brian Ford'
			},
			{
				title:'Story 01', 
				description:'Description pending.',
				criteria:'Criteria pending.',
				status:'In Progress',
				type:'Feature',
				reporter:'Lukas Ruebbelke',
				assignee:'Brian Ford'
			},
			{
				title:'Story 02', 
				description:'Description pending.',
				criteria:'Criteria pending.',
				status:'Code Review',
				type:'Bug',
				reporter:'Lukas Ruebbelke',
				assignee:'Brian Ford'
			}
		];
	}
);
