function calculateCGPA() {
    let gradeInputs = document.getElementsByClassName('grade-input');

    let totalCredits = 0;
    let totalWeightedGradePoints = 0;

    for (let i = 0; i < gradeInputs.length; i++) {
      let gradeInput = gradeInputs[i];
      let courseCode = gradeInput.getAttribute('data-course-code');
      let grade = gradeInput.value.toUpperCase();

      let course = course_details.courseDetails.find(course => course.code === courseCode);

      if (course) {
        let credits = parseFloat(course.credits);
        let gradeValue = grades_details[grade];

        if (!isNaN(credits) && !isNaN(gradeValue)) {
          totalCredits += credits;
          totalWeightedGradePoints += credits * gradeValue;
        }
      }
    }

    let cgpa = totalWeightedGradePoints / totalCredits;

    if (!isNaN(cgpa)) {
      document.getElementById('cgpa-result').textContent = 'Your CGPA is: ' + cgpa.toFixed(2);
    } else {
      document.getElementById('cgpa-result').textContent = 'Unable to calculate CGPA. Please enter valid grades.';
    }
  }

  // Function to generate course inputs dynamically
  function generateCourseInputs() {
    let numCourses = parseInt(document.getElementById('num-courses').value);
    let coursesContainer = document.getElementById('courses-container');
    coursesContainer.innerHTML = '';

    for (let i = 0; i < numCourses; i++) {
      let courseDiv = document.createElement('div');
      courseDiv.classList.add('course');

      // Course name input
      let nameLabel = document.createElement('label');
      nameLabel.textContent = 'Course ' + (i + 1) + ' Name:';
      let nameInput = document.createElement('input');
      nameInput.setAttribute('type', 'text');
      nameInput.setAttribute('name', 'courseName');
      nameInput.setAttribute('placeholder', 'Enter course name');
      courseDiv.appendChild(nameLabel);
      courseDiv.appendChild(nameInput);

      // Course code input
      let codeLabel = document.createElement('label');
      codeLabel.textContent = 'Course ' + (i + 1) + ' Code:';
      let codeInput = document.createElement('input');
      codeInput.setAttribute('type', 'text');
      codeInput.setAttribute('name', 'courseCode');
      codeInput.setAttribute('placeholder', 'Enter course code');
      courseDiv.appendChild(codeLabel);
      courseDiv.appendChild(codeInput);

      // Grade input
      let gradeLabel = document.createElement('label');
      gradeLabel.textContent = 'Grade:';
      let gradeInput = document.createElement('input');
      gradeInput.setAttribute('type', 'text');
      gradeInput.setAttribute('name', 'grade');
      gradeInput.setAttribute('placeholder', 'Enter grade');
      gradeInput.classList.add('grade-input');
      gradeInput.setAttribute('data-course-code', ''); // Will be set dynamically
      courseDiv.appendChild(gradeLabel);
      courseDiv.appendChild(gradeInput);

      coursesContainer.appendChild(courseDiv);
    }

    // Show calculate CGPA button
    document.getElementById('calculate-button').style.display = 'block';
  }