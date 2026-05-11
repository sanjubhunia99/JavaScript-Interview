// Show Marks Using the (Nullish Coalescing ??)
/*
Output:

Grade: 90
Grade: No Marks provided
Grade: 0
Grade: 40

*/

function showMarks(marks) {
    const msg = marks ?? "No Marks provided";
    console.log(`Grade: ${msg}`);
}
showMarks(90);
showMarks();
showMarks(0);
showMarks(40);


