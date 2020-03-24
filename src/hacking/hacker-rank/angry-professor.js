//k: Minimum number of students to class start
//a: Time of arrive of each student: 
// a[i] < 0: on time
// a[i] = 0: on time
// a[i] > 0: late

// Complete the angryProfessor function below.
function angryProfessor(k, a) {
  if (k > a.length)  {
    return "NO"
  }
  let attendanceStudents = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      attendanceStudents += 1;
    }
  }

  if (k - attendanceStudents > 0) {
    return "YES";
  }
  return "NO";
}

console.log(angryProfessor(3, [-1, -3, 4, 2])) //YES 
console.log(angryProfessor(2, [0, -1, 2, 1])) //NO 
