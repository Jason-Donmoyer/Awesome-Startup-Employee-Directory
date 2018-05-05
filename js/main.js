$('h1').click(function() {
	alert("clicked");
});






let employeeArr = [];

let newHTML = '';
let modalHTML = '';

$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    employees = data.results;
	$.each(employees, function (i, employee) { 

		employeeArr.push(employee);

		newHTML += '<div class="employee">';
		newHTML += '<div class="employee-img src="' + employee.picture.large + '" alt="employee image"</div>';
	});
  }
});