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
        points_possible: 50
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
    },
    {
      learner_id: 182,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 120
      }
    },
    {
      learner_id: 182,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-03-07",
        score: 135
      }
    }
  ];
  
 

  function getLearnerData(LearnerID, Avg, LearnerSubmissions){
// Helper function to validate the assignment group
  // If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. 
  console.log(`Course id in AssignmentGroup is ${AssignmentGroup.course_id}`)
  console.log(`Course id in Course info is ${CourseInfo.id}`)
  function validClass(AssignmentCourse_id, CourseInfoID){
   try{ 
    if(!AssignmentCourse_id)     throw `Missing AssignmentGroup Course ID`
    if(!CourseInfoID)     throw `Missing Course Info ID`
    if(AssignmentCourse_id !== CourseInfoID)  throw 'AssignmentGroup Course ID and Course Info ID not match'}
   catch(err){console.log(err);}
   }
  validClass(AssignmentGroup.course_id, CourseInfo.id)
  

//You should also account for potential errors in the data that your program receives. What if
// points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number isinstead a string?
  function validPoints(AssignmentGroupPoints){
    AssignmentGroup.assignments.forEach((AssignmentGroupPoints) => {//console.log(AssignmentGroupPoints);
    let points=AssignmentGroupPoints.points_possible;
    console.log(points)

    if (points === 0 ){
        console.error(`The Assignment points for ${AssignmentGroup.assignments[1].name} need to be a number more than zero`)}        
    if(typeof points === 'string' ){
      console.error(`The Assignment points for ${AssignmentGroup.assignments[1].name} should not be a string `)}   
  })}
  validPoints(AssignmentGroup.assignments[3])
  }

  // the ID of the learner for which this data has been collected
 //"id": number,  the learner’s total, weighted average, in which assignments
 // with more points_possible should be counted for more
 // e.g. a learner with 50/100 on one assignment and 190/200 on another
 // would have a weighted average score of 240/300 = 80%.
 console.log(LearnerSubmissions)
let LearnerId=[], LearnerIdAssignmentId=[], LearnerIdScore=[]
     for (let i = 0; i < LearnerSubmissions.length; i++) {
      LearnerId.push(LearnerSubmissions[i].learner_id)
      LearnerIdAssignmentId.push(LearnerSubmissions[i].assignment_id)  
      LearnerIdScore.push(LearnerSubmissions[i].submission.score)
    }
   console.log(LearnerId)
   console.log(LearnerIdAssignmentId)
   console.log(LearnerIdScore)
    for (let j=0; j<LearnerSubmissions.length; j++){
      if(LearnerId[j] !=LearnerId[j+1]){
        console.log(j);console.log(LearnerId[j+1]);
      };
      continue
    }
    
    console.log(LearnerId)
    console.log(LearnerIdAssignmentId)
    console.log(LearnerIdScore)
      
// <assignment_id>: number,
// if an assignment is not yet due, it should not be included in either
// the average or the keyed dictionary of scores

//const assignment = AssignmentsById[assignment_id];
//       const dueDate = new Date(assignment.due_at);
//       const submittedDate = new Date(submissionData.submitted_at);

//       // Skip assignments not yet due
//       if (dueDate > new Date()) {
//         continue;
//       }

//       // Calculate the score considering lateness
//       const score = calculateScore(submissionData.score, assignment.points_possible, submittedDate, dueDate);

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

//       const percentageScore = (score / assignment.points_possible) * 100;

//       // Save the percentage score for this assignment
//       learnerData[learner_id].assignments[assignment_id] = percentageScore;

//       // Update the learner's total weighted score and possible points
//       learnerData[learner_id].total_weighted_score += percentageScore * assignment.points_possible * AssignmentGroup.group_weight;
//       learnerData[learner_id].total_points_possible += assignment.points_possible * AssignmentGroup.group_weight;
//     }

//     // Step 4: Finalize the learner data
//     const result = [];

//     for (let learner_id in learnerData) {
//       const learner = learnerData[learner_id];
//       learner.avg = learner.total_weighted_score / learner.total_points_possible;

//       // Prepare final output
//       const learnerResult = {
//         id: learner.id,
//         avg: learner.avg,
//       };

//       for (let assignment_id in learner.assignments) {
//         learnerResult[assignment_id] = learner.assignments[assignment_id];
//       }

//       result.push(learnerResult);
//     }

//     return result;

//   } 

getLearnerData(1, 30, LearnerSubmissions)
// const result = getLearnerData(LeanerID, CourseInfo, Avg, [LearnerSubmissions]); 



