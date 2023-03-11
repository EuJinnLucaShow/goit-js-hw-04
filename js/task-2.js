const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action.bind(inventory)(itemName);
};

invokeInventoryAction('Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']

/*Помилок в консолі немає, але для запуску скрипта потрібно виправити наступне:

Функція invokeInventoryAction потребує, щоб другим аргументом була функція, а не метод об'єкта. Це можна виправити, обгорнувши метод add та remove в функцію, яка повертає їх як замикання.

Потрібно передати метод inventory.add та inventory.remove як метод об'єкта inventory з використанням методу bind().*/
