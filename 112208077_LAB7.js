document.addEventListener("DOMContentLoaded", () => {
    const gradeForm = document.getElementById("gradeForm");
    const gradeTableBody = document.getElementById("gradeTable").querySelector("tbody");
    const mathAverageCell = document.getElementById("mathAverage");
    const englishAverageCell = document.getElementById("englishAverage");
    const overallAverageCell = document.getElementById("overallAverage");

    let grades = [];

    gradeForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get input values
        const mathGrade = parseFloat(document.getElementById("mathGrade").value);
        const englishGrade = parseFloat(document.getElementById("englishGrade").value);

        // Calculate row average
        const average = ((mathGrade + englishGrade) / 2).toFixed(2);

        // Add to grades array
        grades.push({ math: mathGrade, english: englishGrade, average: parseFloat(average) });

        // Add row to table
        const row = gradeTableBody.insertRow();
        const rowIndex = grades.length;
        row.innerHTML = `
            <td>${rowIndex}</td>
            <td>${mathGrade}</td>
            <td>${englishGrade}</td>
            <td>${average}</td>
        `;

        // Clear input fields
        gradeForm.reset();

        // Update averages
        updateAverages();
    });

    function updateAverages() {
        let mathSum = 0;
        let englishSum = 0;
        let totalAverage = 0;

        grades.forEach((grade) => {
            mathSum += grade.math;
            englishSum += grade.english;
            totalAverage += grade.average;
        });

        const rowCount = grades.length;

        mathAverageCell.textContent = (mathSum / rowCount).toFixed(2);
        englishAverageCell.textContent = (englishSum / rowCount).toFixed(2);
        overallAverageCell.textContent = (totalAverage / rowCount).toFixed(2);
    }
});
