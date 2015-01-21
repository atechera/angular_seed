app.factory('DataService', function(){
  var getEmployee = function (id) {
    if (id == 123){
      return {
          id: 123,
          fullname: "Milton Waddams",
          notes: "The ideal employee. bla bla",
          department: "Administration",
          dateHired: "July 11 2014",
          breakTime: "July 11 2014 3:00 PM",
          isUnderNonCompete: true,
          nonCompeteNotes: "non-compete",
          perkCar: true,
          perkStock: false,
          perkSixWeeks: true,
          payrollType: "none"
      };
    }
    return undefined;
  };

  var insertEmployee = function (newEmployee){
    return true;
  };

  var updateEmployee = function (employee) {
    return true;
  };

  return {
      insertEmployee: insertEmployee,
      updateEmployee: updateEmployee,
      getEmployee: getEmployee
  };
});