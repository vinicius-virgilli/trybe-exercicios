let note = 95;

if (note < 0 || note > 100) {
    console.log('A nota é inválida!');
} else if (note >= 90) {
    note = 'A';
} else if (note >= 80) {
    note = 'B';
} else if (note >= 70) {
    note = 'C';
} else if (note >= 60) {
    note = 'D';
} else if (note >= 50) {
    note = 'E';
} else if (note < 50) {
    note = 'F';
}

console.log(note);













