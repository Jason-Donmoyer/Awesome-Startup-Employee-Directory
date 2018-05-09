
// Arrays to store ajax info

let employeeArr = [];
let modalArr = [];

// HTML to populate the main container

let newHTML = '';
let modalHTML = '';

// Main AJAX function

$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    employees = data.results;
	$.each(employees, function (i, employee) { 

		// populate the HTML

		newHTML += '<div id="' + i + '" class="container">';
		newHTML += '<div class="employee-img-container">';
		newHTML += '<img class="employee-img" src="' + employee.picture.large + '" alt="employee image">';
		newHTML += '</div>';
		newHTML += '<div class="employee-info-container">';
		newHTML += '<h3 class="employee-name">' + employee.name.first + ' ' + employee.name.last + '</h3>';
		newHTML += '<p class="employee-email">' + employee.email + '</p>';
		newHTML += '<p class="employee-location">' + employee.location.city + ', ' + employee.location.state + '</p>';
		newHTML += '</div></div></div></div>';

		employeeArr.push(employee);

		// Populate the modals

		modalHTML += '<div id="modal' + i + '" class="modal">';
		modalHTML += '<div class="modal-content">';
		modalHTML += '<div class="modal-header">';
		modalHTML += '<span class="close">&times;</span>';
		modalHTML += '<img class="employee-img" src="' + employee.picture.large + '" alt="employee image">';
		modalHTML += '<h2 class= emp-modal-name>' + employee.name.first + ' ' + employee.name.last + '</h2>';
		modalHTML += '</div';
		modalHTML += '<div class="modal-body">';
		modalHTML += '<p>' + employee.login.username + '</p>';
		modalHTML += '<p>' + employee.email + '</p>';
		modalHTML += '<p>' + employee.cell + '</p>';
		modalHTML += '<p class="emp-modal-info">' + employee.location.street + '</p>';
		modalHTML += '<p class="emp-modal-info">' + employee.location.city + '</p>';
		modalHTML += '<p class="emp-modal-info">' + employee.location.state + '</p>';
		modalHTML += '<p>' + employee.location.postcode + '</p>';
		modalHTML += '<p>' + employee.dob + '</p>';
		modalHTML += '</div></div></div>';

		modalArr.push(employee);

	});
	$('.grid-container').html(newHTML);
	
	$('.modal-container').html(modalHTML);

	// event listener to call the modal for each employee

		$('.container').on('click', function (event) {
				
				let newId = 'modal' + event.currentTarget.id;
				let displayMod = document.querySelector('#' + newId);
				
				// displays the modal
				$(displayMod).fadeIn(1000);

				// closes the modal
				$('.close').on('click', function () {
					$(displayMod).fadeOut(1000);;
				});

	});
		
	
  }
});
























