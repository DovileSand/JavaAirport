describe ('Plane', function() {

  var plane;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding'], ['clearForTakeOff']);
    });

  it('lands at the airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('takes off from the airport', function() {
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});
