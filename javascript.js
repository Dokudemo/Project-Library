const addBtn = document.querySelector('#open-dialog');
const dialog = document.querySelector('#manga-dialog');


addBtn.addEventListener('click', () => {
    dialog.showModal();
})

dialog.addEventListener('close', () => {
    console.log('Dialog result:', dialog.returnValue)
})


const gimli = {
    name: 'Gimli',
    race: 'dwarf',
    weapon: 'axe',
    'dmg per second': '35 DPS',
    greet: function() {
        return `Hi, my name is ${this.name}`
    },
    fight: function() {
        return `${this.name} take ${this.weapon} and make 1900 dmg`
    }
}

console.log(gimli.greet())

console.log(gimli)

console.log(gimli.fight())

console.log(gimli["dmg per second"])


gimli.age = 150;

console.log(gimli)

console.log(gimli.age)

gimli.weapon = 'battle axe';

console.log(gimli)

delete gimli.weapon

console.log(gimli)

for(let key in gimli) {
    console.log(gimli[key]);
}