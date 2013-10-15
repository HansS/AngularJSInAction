describe('Service: angelloModel', function() {
	beforeEach(module('Angello'));
	var modelService;
	beforeEach(inject(function (angelloModel) {
		modelService = angelloModel;
	}));

	describe('#getStatuses', function() {
		it('should return 3 statuses', function () {
			expect(modelService.getStatuses().length).toBe(3);
		});
	});
});
