describe('Service: angelloModel', function() {
	beforeEach(module('Angello'));

	var modelService;

	beforeEach(inject(function (angelloModel) {
		modelService = angelloModel;
	}));

	describe('#getStatuses', function() {
		it('should return 7 statuses', function () {
			expect(modelService.getStatuses().length).toBe(7);
		});

		it('should have a status named "To Do"', function () {
			expect(modelService.
				getStatuses().
				map(function (status) {
					return status.name;
				})).
				toContain('To Do');
		});
	});

	describe('#getTypes', function() {
		it('should return 4 types', function () {
			expect(modelService.getTypes().length).toBe(4);
		});

		it('should have a type named "Bug"', function() {
			expect(modelService.getTypes().
				map(function(type) {
					return type.name;
				})).
				toContain('Bug');
		});
	});

	describe('#getStories', function() {
		it('should return 3 stories', function () {
			expect(modelService.getStories().length).toBe(3);
		});

		it('should return stories that have a description property', function() {
			modelService.getStories().forEach(function (story) {
				expect(story.description).toBeDefined();
			})
		})
	});

});
