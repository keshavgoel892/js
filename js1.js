// Initial Inventory
let inventory = [
    { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
    { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
];

// Function to add a new item to the inventory
function addItem(inventory, item) {
    inventory.push(item);
    console.log("After adding item:", inventory);
}

// Function to update an item in the inventory
function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
        console.log(After updating item with id ${id}:, inventory);
    } else {
        console.log(Item with id ${id} not found.);
    }
}

// Function to delete an item from the inventory
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
        console.log(After deleting item with id ${id}:, inventory);
    } else {
        console.log(Item with id ${id} not found.);
    }
}

// Function to get an item by id
function getItem(inventory, id) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        console.log(Item with id ${id}:, item);
        return item;
    } else {
        console.log(Item with id ${id} not found.);
        return null;
    }
}

// Function to print the entire inventory
function printInventory(inventory) {
    console.log("Inventory:");
    inventory.forEach(item => {
        console.log(ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price});
    });
}

// Main Program Execution

console.log("Initial Inventory:");
printInventory(inventory);

// Adding a new item to the inventory
addItem(inventory, { id: 3, name: 'Orange', quantity: 15, price: 0.7 });

// Updating an item in the inventory
updateItem(inventory, 1, { quantity: 18, price: 0.5 });
updateItem(inventory, 2, { quantity: 30 });

// Deleting an item from the inventory
deleteItem(inventory, 2);

// Printing the inventory after changes
printInventory(inventory);
