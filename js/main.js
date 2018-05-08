$('h1').click(function() {
	alert("clicked");
});






let employeeArr = [];
let modalArr = [];

let newHTML = '';
let modalHTML = '';

let modalChild = "";

$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    employees = data.results;
	$.each(employees, function (i, employee) { 

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

		modalHTML += '<div id="modal' + i + '" class="modal">';
		modalHTML += '<div class="modal-content">';
		modalHTML += '<div class="modal-header">';
		modalHTML += '<span class="close">&times;</span>';
		modalHTML += '<img class="employee-img" src="' + employee.picture.large + '" alt="employee image">';
		modalHTML += '<h2 class= emp-modal-name>' + employee.name.first + ' ' + employee.name.last + '</h2>';
		modalHTML += '</div';
		modalHTML += '<div class="modal-body">';
		modalHTML += '<p>Employee Info</p>';
		modalHTML += '</div></div></div>';

		modalArr.push(employee);

	});
	$('.grid-container').html(newHTML);
	
		// $.each(employees, function(i, employee) {
		// 	modalHTML += '<div id="modal' + i + '" class="modal">';
		// 	modalHTML += '<div class="modal-content">';
		// 	modalHTML += '<div class="modal-header">';
		// 	modalHTML += '<span class="close">&times;</span>';
		// 	modalHTML += '<img class="employee-img" src="' + employee.picture.large + '" alt="employee image">';
		// 	modalHTML += '<h2 class= emp-modal-name>' + employee.name.first + ' ' + employee.name.last + '</h2>';
		// 	modalHTML += '</div';
		// 	modalHTML += '<div class="modal-body">';
		// 	modalHTML += '<p>Employee Info</p>';
		// 	modalHTML += '</div></div></div>';
			
		// });
		$('.modal-container').html(modalHTML);
		//$('.modal').hide();
		$('.container').on('click', function (event) {
				console.log(event.currentTarget.id);
				let newId = 'modal' + event.currentTarget.id;
				let displayModal = $('#' + newId);
				let displayMod = document.querySelector('#' + newId);
				//displayModal.style.display = 'block';
				console.log(displayModal);
				console.log(displayMod);
				//$('.modal-container').style.display = "block";
				//displayModal.style.display = 'block'; 
				console.log(newId);
				displayMod.style.display = "block";

	});
		
	

	// $('.container').on('click', function() {

	// 	let modal = $(this).data('id');
	// 	console.log(modal);
	// });

	// modalChild = $('.modal-container').children('div');
	// $('.container').click(function(e) {
	// 	let target = e.currentTarget.id;
	// 	let targetID = "modal" + target;


	// 	console.log(targetID);
		// for (let i = 0; i < modalArr; i++) {
		// 	console.log(i);
		// }
	// 	for (let i = 0; i < modalChildren.length; i++) {
	// 		if (target === modalChildren[i].id) {
	// 			modalChildren[i].style.display = 'block';
	// 			console.log();
	// 		}
	// 	}
	 // });

	// $('.container').click(function (e) {
	// 	for (let i = 0; i < employeeArr.length; i++) {
	// 		let modalID = 'modal' + $(this).id;
	// 		console.log(modalID);
	// 		break;
			
	// 	}
		
	// });
  }
});


// ------ Modal Variables ------- //



// $.each(employeeArr, function(i, emp) {
// 	$('.container').click(function () {
// 		alert('clicked' + emp.id);
// 	})
// });






















