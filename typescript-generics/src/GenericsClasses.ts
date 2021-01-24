// Generic Classes
class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string | number>();
textStorage.addItem("Aldo");
textStorage.addItem("boetd");
textStorage.addItem(20);
textStorage.addItem(10);
//...
textStorage.removeItem(20);
console.log(textStorage.getItems());
// ==============================================
// for object are not allowed anymore
// const objStorage = new DataStorage<object>();
// const nameObj = { name: "cukil" };
// objStorage.addItem(nameObj);
// objStorage.addItem({ name: "cepot" });
// //...
// objStorage.removeItem(nameObj);
// console.log(objStorage.getItems());
