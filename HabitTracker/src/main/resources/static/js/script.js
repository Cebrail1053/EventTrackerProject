window.addEventListener('load', function() {
	console.log('script.js loaded');
	init();
});

function init() {
	loadHabits();
	document.newHabitForm.submit.addEventListener('click', function(e) {
		e.preventDefault();
		let fm = document.getElementById('newHabitForm')
		let habit = {
			name: fm.name.value,
			description: fm.description.value,
			startDate: fm.startDate.value,
			updatedDate: fm.updatedDate.value
		};
		createHabit(habit);
	});
}

function loadHabits() {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/habits');

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200) {
				console.log('Request Successful');
				let habits = JSON.parse(xhr.responseText);
				countHabits(habits);
				displayHabits(habits);
			} else {
				console.error('Request failed: ' + xhr.status);
			}
		}
	};
	xhr.send();
}

function displayHabits(habits) {
	let table = document.getElementById('habitListTable');
	let tr = document.createElement('tr');
	let th = document.createElement('th');
	th.textContent = 'Name';
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = 'Description';
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = 'View Details';
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = 'Delete';
	tr.appendChild(th);
	table.appendChild(tr);
	for (const habit of habits) {
		tr = document.createElement('tr');
		let td = document.createElement('td');
		td.textContent = habit.name;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = habit.description;
		tr.appendChild(td);
		td = document.createElement('td');
		let btn = document.createElement('button');
		btn.textContent = 'View Details';
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			loadDetails(habit.id);
		});
		td.appendChild(btn);
		tr.appendChild(td);
		td = document.createElement('td');
		btn = document.createElement('button');
		btn.textContent = 'Delete';
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			deleteHabit(habit.id);
		});
		td.appendChild(btn);
		tr.appendChild(td);
		table.appendChild(tr);
	}
}

function createHabit(habit) {
	let xhr = new XMLHttpRequest();

	xhr.open('POST', 'api/habit');

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200) {
				console.log('Request Successful');
				console.log(xhr.responseText);
				let newHabit = JSON.parse(xhr.responseText);
				loadHabits();
				location.reload();
			} else {
				console.error('Request failed: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type','application/json');
	let habitJson = JSON.stringify(habit);
	xhr.send(habitJson);
}

function viewDetails(habit) {
	let div = document.getElementById('habitDetails');
	if(div.firstElementChild !== null) {
		div.firstElementChild.remove();
	}
	let fm = document.createElement('form');

	// Hidden ID Form Field
	let input = document.createElement('input');
	input.type = 'hidden';
	input.name = 'id';
	input.id = 'id';
	input.value = habit.id;
	fm.appendChild(input);

	// Name Form Field
	let label = document.createElement('label');
	label.for = 'name';
	label.textContent = 'Name:'
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'text';
	input.name = 'name';
	input.id = 'name';
	input.value = habit.name;
	fm.appendChild(input);
	let br = document.createElement('br');
	fm.appendChild(br);

	// Description Form Text Area
	label = document.createElement('label');
	label.for = 'description';
	label.textContent = 'Description:'
	fm.appendChild(label);
	br = document.createElement('br');
	fm.appendChild(br);
	input = document.createElement('textarea');
	input.name = 'description';
	input.id = 'description';
	input.textContent = habit.description;
	fm.appendChild(input);
	br = document.createElement('br');
	fm.appendChild(br);

	// Start Date Form Field
	label = document.createElement('label');
	label.for = 'startDate';
	label.textContent = 'Start Date:'
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'date';
	input.name = 'startDate';
	input.id = 'startDate';
	input.value = habit.startDate;
	fm.appendChild(input);
	br = document.createElement('br');
	fm.appendChild(br);

	// Updated Date Form Field
	label = document.createElement('label');
	label.for = 'updatedDate';
	label.textContent = 'Updated Date:'
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'date';
	input.name = 'updatedDate';
	input.id = 'updatedDate';
	input.value = habit.updatedDate;
	fm.appendChild(input);
	br = document.createElement('br');
	fm.appendChild(br);

	// Update Button
	let btn = document.createElement('button');
	btn.name = 'update';
	btn.textContent = 'Update';
	btn.addEventListener('click', function(e) {
		e.preventDefault();
		updateHabit(habit);
	});
	fm.appendChild(btn);

	div.appendChild(fm);
}

function loadDetails(id) {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', `api/habits/${id}`);

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200) {
				console.log('Request Successful');
				console.log(xhr.responseText);
				let habit = JSON.parse(xhr.responseText);
				viewDetails(habit);
			} else {
				console.error('Request failed: ' + xhr.status);
			}
		}
	};
	xhr.send();
}

function deleteHabit(id) {
	let xhr = new XMLHttpRequest();

	xhr.open('DELETE', `api/habits/${id}`);

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200) {
				console.log('Request Successful');
				let habit = JSON.parse(xhr.responseText);
				loadHabits();
				location.reload();
			} else {
				console.error('Request failed: ' + xhr.status);
			}
		}
	};
	xhr.send();
}

function updateHabit(habit) {
	let habitJson = {
		id: parseInt(document.getElementById('id').value),
		name: document.getElementById('name').value,
		description: document.getElementById('description').value,
		startDate: document.getElementById('startDate').value,
		updatedDate: document.getElementById('updatedDate').value
	}
	let xhr = new XMLHttpRequest();

	xhr.open('PUT', 'api/habit');

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200) {
				console.log('Request Successful');
				console.log(xhr.responseText);
				let updatedHabit = JSON.parse(xhr.responseText);
				console.log(updatedHabit);
				loadHabits();
				location.reload();
			} else {
				console.error('Request failed: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type','application/json');
	xhr.send(JSON.stringify(habitJson));
}

function countHabits(habits) {
	let count = 0;
	let div = document.getElementById('counts');
	for (const habit of habits) {
		count++;
	}
	let p = document.createElement('p');
	p.textContent = 'There are ' + count + ' Habits total!';
	div.appendChild(p);
}