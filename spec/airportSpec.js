describe ('Airport', function(){

  var airport;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for taking off', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can check for stormy conditions', function(){
    expect(airport.isStormy()).toBeFalsy();
  });
});
