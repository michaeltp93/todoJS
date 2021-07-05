import Alert from './alert.js';

export default class AddTodo {
	constructor() {
		this.addBtn = document.getElementById('add');
		this.title = document.getElementById('title');
		this.description = document.getElementById('description');

		this.alert = new Alert('alert');
	}

	onClick(callback) {
		this.addBtn.addEventListener('click', () => {
			if (!this.title.value || !this.description.value) {
				this.alert.show('Title and Description are required');
				return;
			}
			this.alert.hide();
			callback(this.title.value, this.description.value);
		});
	}
}
