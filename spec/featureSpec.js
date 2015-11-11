
// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plan to land at
//   an airport and confirm that it has landed

describe ('feature test',function(){

var plane;
var airport;

beforeEach( function (){
  plane = new Airplane();
  airport = new Airport();
});

  it('I can instruct a plane to land at an airport', function (){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
