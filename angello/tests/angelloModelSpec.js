describe('Service: angelloModel', function() {
	beforeEach(module('Angello'));
	var modelService;
	beforeEach(inject(function (angelloModel) {
		modelService = angelloModel;
	}));

	describe('#getStatuses', function() {
		// it('1+1 should equal 2', function() {
		// 	expect(1+1).toBe(2);
		// });
		it('should return 7 statuses', function () {
			expect(modelService.getStatuses().length).toBe(7);
		});
	});
});
