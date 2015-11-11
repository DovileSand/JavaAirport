describe ('Plane', function() {

  var plane;
  beforeEach(function(){
    plane = new Plane();
    });

  it('lands at the airport', function() {
    expect(plane.land).toBeDefined();
  });
});
