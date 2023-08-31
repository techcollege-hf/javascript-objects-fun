


//Opgave 1: brug javascript til at oprette en ny array med alle ansatte over 30 år  log resultatet til konsollen som table






//Opgave 2: brug javascript til at oprette en ny array med alle ansatte under 20 år  log resultatet til konsollen som table




//Opgave 3: brug javascript til at oprette en ny array med alle kvindelige ansatte over 30 år  log resultatet til konsollen som table




//Opgave 4: brug javascript til at oprette en ny array med alle ikke-binære ansatte over 20 år  log resultatet til konsollen som table


// data array

const myEmployees=[
    { navn: 'Alice', alder: 25, køn: 'Kvinde' },
    { navn: 'Bob', alder: 32, køn: 'Mand' },
    { navn: 'Charlie', alder: 19, køn: 'Mand' },
    { navn: 'David', alder: 45, køn: 'Mand' },
    { navn: 'Emma', alder: 28, køn: 'Kvinde' },
    { navn: 'Freja', alder: 21, køn: 'Kvinde' },
    { navn: 'Gustav', alder: 37, køn: 'Mand' },
    { navn: 'Hannah', alder: 40, køn: 'Kvinde' },
    { navn: 'Ida', alder: 23, køn: 'Kvinde' },
    { navn: 'Jacob', alder: 56, køn: 'Mand' },
    { navn: 'Klara', alder: 49, køn: 'Kvinde' },
    { navn: 'Lars', alder: 33, køn: 'Mand' },
    { navn: 'Mia', alder: 30, køn: 'Kvinde' },
    { navn: 'Nikolaj', alder: 27, køn: 'Mand' },
    { navn: 'Olivia', alder: 22, køn: 'Kvinde' },
    { navn: 'Peter', alder: 51, køn: 'Mand' },
    { navn: 'Quinn', alder: 24, køn: 'Ikke-binær' },
    { navn: 'Rasmus', alder: 38, køn: 'Mand' },
    { navn: 'Sofia', alder: 29, køn: 'Kvinde' },
    { navn: 'Theo', alder: 35, køn: 'Mand' },
    { navn: 'Ulla', alder: 46, køn: 'Kvinde' },
    { navn: 'Viggo', alder: 42, køn: 'Mand' },
    { navn: 'Wilma', alder: 20, køn: 'Kvinde' },
    { navn: 'Xander', alder: 64, køn: 'Mand' },
    { navn: 'Yrsa', alder: 39, køn: 'Kvinde' },
    { navn: 'Zara', alder: 31, køn: 'Kvinde' },
    { navn: 'Adam', alder: 22, køn: 'Mand' },
    { navn: 'Bella', alder: 37, køn: 'Kvinde' },
    { navn: 'Casper', alder: 42, køn: 'Mand' },
    { navn: 'Dorthe', alder: 56, køn: 'Kvinde' },
    { navn: 'Erik', alder: 29, køn: 'Mand' },
    { navn: 'Fie', alder: 31, køn: 'Kvinde' },
    { navn: 'Gert', alder: 24, køn: 'Mand' },
    { navn: 'Helle', alder: 50, køn: 'Kvinde' },
    { navn: 'Ivan', alder: 34, køn: 'Mand' },
    { navn: 'Johanne', alder: 26, køn: 'Kvinde' },
    { navn: 'Karl', alder: 55, køn: 'Mand' },
    { navn: 'Lene', alder: 47, køn: 'Kvinde' },
    { navn: 'Mikkel', alder: 30, køn: 'Mand' },
    { navn: 'Nina', alder: 33, køn: 'Kvinde' },
    { navn: 'Ole', alder: 41, køn: 'Mand' },
    { navn: 'Pia', alder: 19, køn: 'Kvinde' },
    { navn: 'Quentin', alder: 27, køn: 'Mand' },
    { navn: 'Rikke', alder: 23, køn: 'Kvinde' },
    { navn: 'Søren', alder: 45, køn: 'Mand' },
    { navn: 'Tina', alder: 36, køn: 'Kvinde' },
    { navn: 'Uffe', alder: 57, køn: 'Mand' },
    { navn: 'Vibeke', alder: 22, køn: 'Kvinde' },
    { navn: 'William', alder: 40, køn: 'Mand' },
    { navn: 'Xenia', alder: 31, køn: 'Kvinde' },
    { navn: 'Yannick', alder: 24, køn: 'Mand' },
    { navn: 'Zenia', alder: 29, køn: 'Kvinde' }
  ]

  // må gerne slettes
  console.table(myEmployees);