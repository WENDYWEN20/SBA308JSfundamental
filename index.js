// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 0
           },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  




  


 
  const result = getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]);

  function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions){
  // If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. 
  console.log(AssignmentGroup.course_id !== CourseInfo.id)
  function validClass(AssignmentCourse_id, CourseInfoID){
   if (AssignmentCourse_id !== CourseInfoID ){
    console.error(`The assignment is not for Course ${CourseInfo['id']}`)}
  }
  validClass(AssignmentGroup.course_id, CourseInfo.id)


//You should also account for potential errors in the data that your program receives. What if
// points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number isinstead a string?
  function validPoints(AssignmentGroupPoints){

    AssignmentGroup.assignments.forEach((AssignmentGroupPoints) => {console.log(AssignmentGroupPoints);
      const points=AssignmentGroupPoints.points_possible;
      console.log(points)
      if (points === 0){
        console.error(`The Assignment points for ${AssignmentGroup.assignments[2]} should be more than zero`)} // there is an error here the console print out The Assignment points for [object Object] should be more than zeroc
        
    })}

  validPoints(AssignmentGroup.assignments.points_possible)


// //Assignment by id 
//   const assignmentsById = {};
//   for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
//     const assignment = AssignmentGroup.assignments[i];
//     assignmentsById[assignment.id] = assignment;
//   }
// //Learner Assignment id
//     const learnerData = {};
//     for (let i = 0; i < LearnerSubmissions.length; i++) {
//       const submission = LearnerSubmissions[i];
//       const { learner_id, assignment_id, submission: submissionData } = submission;

//       if (!(LearnerSubmissions.assignment_id in assignmentsById)) {
//         throw new Error(`Assignment ${LearnerSubmissions.assignment_id} does not exist in the provided AssignmentGroup.`);
//       }



//       const dueDate = new Date(AssignmentGroup.assignments.due_at);
//       const submittedDate = new Date(LearnerSubmissions.submission.submitted_at);

//       // Skip assignments not yet due
//       if (dueDate > new Date()) {
//         continue;
//       }

//       // Calculate the score considering lateness
//       const score = calculateScore(submissionData.score, AssignmentGroup.assignments.points_possible, submittedDate, dueDate);

//       // Initialize learner data if not present
//       if (!learnerData[learner_id]) {
//         learnerData[learner_id] = {
//           id: learner_id,
//           avg: 0,
//           total_weighted_score: 0,
//           total_points_possible: 0,
//           assignments: {}
//         };
//       }

//       const percentageScore = (submissionData.score /AssignmentGroup.assignments.points_possible) * 100;

//       // Save the percentage score for this assignment
//       learnerData[learner_id].assignments[assignment_id] = percentageScore;
//     }


}

 



