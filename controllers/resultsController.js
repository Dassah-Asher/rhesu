const Result = require("../models/resultsSchema");

//adding new results

const createResults=async (req,res)=>{
    const newResults= new Result({
        name: req.body.name,
        class: req.body.class,
        year:  req.body.year,
        subject: req.body.subject,
        classScore: req.body.classScore,
        examScore: req.body.examScore,
        grade:req.body.grade,
        remarks: req.body.remarks,
        attendance: req.body.attendance,
        interest: req.body.interest,
        teacherRemarks: req.body.teacherRemarks
    });

    await newResults.save();
    res.status(201).json(newResults);
};

//get all results
const getAllResults=async(req,res)=>{
    const results=await Result.find();
    res.json(results)
};

//get a result
const getSingleResult=async (req,res)=>{
    const results = await Result.findById(req.params._id); 
    res.json(results)
};

//get result by Id
const updateResult=async(req, res)=>{
    const foundResult=await Result.findById(req.params._id)
    if(foundResult){
        (foundResult.name=req.body.name ? req.body.name :foundResult.name),
        (foundResult.class=req.body.class ? req.body.class :foundResult.class),
        (foundResult.year=req.body.year ? req.body.year :foundResult.year),
        (foundResult.subject=req.body.subject ? req.body.subject :foundResult.subject),
        (foundResult.classScore=req.body.classScore ? req.body.classScore :foundResult.classScore),
        (foundResult.examScore=req.body.examScore ? req.body.examScore :foundResult.examScore),
        (foundResult.grade=req.body.grade ? req.body.grade :foundResult.grade),
        (foundResult.remarks=req.body.remarks ? req.body.remarks :foundResult.remarks),
        (foundResult.attendance=req.body.attendance ? req.body.attendance :foundResult.attendance),
        (foundResult.interest=req.body.interest ? req.body.interest :foundResult.interest),
        (foundResult.teacherRemarks=req.body.teacherRemarks ? req.body.teacherRemarks :foundResult.teacherRemarks)

        const updatedResult=await foundResult.save();
        res.json({updatedResult});
    }
        
    
};

  //delete a result
  const deleteResult=async(req,res)=>{
      const foundResult=await Result.findById(req.params._id);
      if (foundResult) {
          foundResult.remove()
          res.json({message:`foundResult.name:${foundResult} removed`})

      } else{
          res.status(404).json({error:`result not found`});
      }
  }


module.exports={
    createResults,
    getAllResults,
    getSingleResult,
    updateResult,
    deleteResult
};
    
