describe ('Feature Test:', function(){

  var plane;
  var airport;

  beforeEach(function (){
    plane = new Plane();
    airport = new Airport();
  });

  // As an air traffic controller
  // To get passengers to a destination
  // I want to instruct a plan to land at
  // an airport and confirm that it has landed
  it('I can instruct a plane to land at an airport', function (){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  // As an air traffic controller
  // So planes can take off safely from my airport
  // I would like to instruct a plane to take off
  it('I can instruct a plane to take off', function() {
    plane.land(airport);
    plane.takeOff();
    expect(airport.planes()).not.toContain(plane);
  });

  //   As an air traffic controller
  // To ensure safety
  // I want to prevent takeoff when weather is stormy

  it('stops planes from taking off when the weather is stormy', function() {
    plane.land(airport);
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });

});
