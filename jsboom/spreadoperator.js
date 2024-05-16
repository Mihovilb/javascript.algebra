/*function ispisiImena (prvo, drugo, trece) {
    console.log(prvo);
}
const x = ['Ivan', 'Marija', 'David'];
ispisiImena(...x);
*/
// rest operator
function ispisiImena (...imena) {
    console.log(imena);
}
const x = ["Ivan", "Marija", "David"];
ispisiImena(x[0], x[1], x[2]);