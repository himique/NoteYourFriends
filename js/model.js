let Database = {
  mainArray: [
    { name: "Artem", secondName: "Bondarenko", age: 22, emp: "CEO of Microsoft", id: 1, desc: "Im Prfossional photograder" },
    { name: "wwww", secondName: "Mueller", age: 43, emp: "CEO of Google", id: 2, desc: "Im Prfossional photograder" },
    
  ],

    removeObjectById(arr, IdFound) {
      const index = arr.findIndex(x => x.id === IdFound);
      if (index > -1) {
        arr.splice(index, 1);
      }
    },
    findObjectById(arr, idToFind) {
      const foundObject = arr.find(item => item.id === idToFind);
      if (foundObject === undefined) {
        console.log("Not found")
      }
      return foundObject; // Return the entire object or undefined if not found
    },

  update: {

    name(arr, productName, newCount) {
      const item = arr.find(item => item.id === productName);
      if (item) {
        item.name = newCount;
      }
    },

    secondName(arr, productName, newCount) {
      const item = arr.find(item => item.id === productName);
      if (item) {
        item.secondName = newCount;
      }
    },

    age(arr, productName, newCount) {
      const item = arr.find(item => item.id === productName);
      if (item) {
        item.age = newCount;
      }
    },

    avg(arr, productName, newCount) {
      const item = arr.find(item => item.id === productName);
      if (item) {
        item.avg = newCount;
      }
    },
  },

  iterate(arr) {
    const iterator = arr.keys();
    const a = [];
    for (const i of iterator) {
      a.push(i + 1);
    }
    return a
  },

  toEveryPart(arr) {
    const divorced = this.iterate(arr);
    divorced.forEach((element) => console.log(element));
  },

  setId(arr) {
    let iterated = this.iterate(arr);
    let id = (Math.max(...iterated)) + 1;
    if (arr.length === 0) {
      id = 1;
    }
    return id
  },

  prompt(name) {
    const entered = prompt(`Enter ${name}`);
    return entered
  },

  promptNumber(message) {
    let input = prompt(message);
    let number = Number(input);
    if (input <= 0) {
      alert("Invalid input. Please enter the number more than 0.");
      return this.promptNumber(message);
    }
    else if (isNaN(number)) {
      alert("Invalid input. Please enter a number.");
      return this.promptNumber(message);
    }
    return number;
  },
  
  add(name, secondName, age, emp, id, desc) {
    this.mainArray.push({ name: name, secondName: secondName, age: age, emp: emp, id: id, desc: desc });
  },

}


// Database.add("qwer", "qwe", 22, Database.setId(Database.mainArray), 2);
// Example of using prompts

// Database.findObjectById(Database.mainArray,2)
console.log(Database.mainArray);

