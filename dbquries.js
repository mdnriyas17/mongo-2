//---------------------------------------------------------Design database for Zen class programme


//--------------------------------------Find all the topics and tasks which are thought in the month of October

      db.Topics.find({topicDate: "Oct 2022"}) 
      db.Tasks.find({taskDate :{$regex :"Oct"}})

//------------------------------------Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

      db.Company_Drives.find({driveDate:{$gt:"Oct 15",$lt:"Oct 31"}})

//--------------------------------------Find all the company drives and students who are appeared for the placement.

      db.Company_Drives.find()
      db.Attendance.find({attendedPlacement:true})


//-----------------------------------------------Find the number of problems solved by the user in codekata

      db.Codekata.find({progress:"Solved"}).count()
      db.Codekata.find({progress:"Solved"})

//--------------------------------------------Find all the mentors with who has the mentee's count more than 15

      db.Mentors.find({"mentees" :{$gt:15}})

//---------------------------Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

       db.Attendance.find({isPresent:false})


//SCREENSHOTS ADDED UNDER WIKI TAB INSIDED THIS REPOSITORY
