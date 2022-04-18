const express = require("express");
const mysql = require("mysql");
const bodyParser=require('body-parser')
const cors=require('cors')
const multer=require('multer')
const path=require('path')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.static("./server"))
app.use('/images', express.static('images'));
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    user:"root",
    password:"",
    database:"project"
});

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './images/')    
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
});

app.post('/register', (req, res)=>{

    const username= req.body.uname
    const password= req.body.pass
    const values=[[username,password]]
    const sql="insert into usermst (username, password) values ?";

    db.query(sql,[values],(err, result)=>{
        if(err) throw err;
        console.log("Data Added SucessFully")
        res.send("Data Added")
    });
});
app.get('/show',(req,res)=>{
    db.query("SELECT * FROM usermst",(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.post('/appoint',(req,res)=>{
    const hosp=req.body.hospname;
    const name=req.body.name;
    const doctor=req.body.dname;
    const date=req.body.date;
    const gender=req.body.gender;
    const email=req.body.email;
    const phone=req.body.phone;
    const address=req.body.add;

    const values=[[hosp,name,doctor,date,gender,email,phone,address]]
    const sql="INSERT INTO appointment (hospital_name,name,doctor,date,gender,email,phone,address) VALUES ?";
    db.query(sql,[values],(err,result)=>{
        if(err) throw err;
        res.redirect("http://localhost:3000/")
        

    })
    
})

app.get("/delete/:id",(req,res)=>{
    const id=req.params.id
    const sql="DELETE FROM appointment WHERE id=?";
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        console.log("deleteted Sucessfulyy")
        
    })
})

app.post("/login",(req,res)=>{
    const username=req.body.uname;
    const password=req.body.pass;
    const value=[[password]]
    const sql="SELECT * FROM usermst WHERE username =? AND  password =?";
    db.query(sql,[username,password],(err,result)=>{
        if(err) throw err;
        
        
        if(result.length>0){
            res.redirect("http://localhost:3000/logged")
            
        
        }else{
            res.send("Wrong Passoe")
        }
    })
})
app.get('/data',(req,res)=>{
    db.query("SELECT * FROM appointment",(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.post('/genral',(req,res)=>{
    const hosp=req.body.hosp;
    const name=req.body.name;
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    const phone=req.body.phone;
    const address=req.body.add;
    const sql="INSERT INTO userregi (user,name,username,password,email,phone,address) VALUES ?";
    const values=[[hosp,name,username,password,email,phone,address]]

    db.query(sql,[values],(err,result)=>{
        if(err) throw err;
        res.send("Data Added")
    })
})
app.post("/doclogine",(req,res)=>{
    const uname=req.body.uname;
    const password=req.body.pass;
    const sql="SELECT * FROM registration WHERE username=? AND Password=? AND user='Hospital' ";
    db.query(sql,[uname,password],(err,result)=>{
         Object.keys(result).forEach(function(key){
            var rows=result[key]
            var id=rows.id
                if(result.length>0){
                    res.redirect(`http://localhost:3000/dochead/${id}`)
                }
                else{
                    res.send("error")
                }
            

    })

})
})
app.post("/doclogins",(req,res)=>{
    const uname=req.body.uname;
    const password=req.body.pass;
    const sql="SELECT * FROM registration WHERE username=? AND Password=? AND user='Hospital' ";
    db.query(sql,[uname,password],(err,result)=>{
        if(result){
            res.send(result)
        }
        else{
            res.send("error");
        }

    })

})

app.post("/lablogin",(req,res)=>{
    const uname=req.body.uname;
    const password=req.body.pass;
    const sql="SELECT * FROM registration WHERE username=? AND Password=? AND user='Laboratory' ";
    db.query(sql,[uname,password],(err,result)=>{
        if(result){
            res.send(result)
        }
        else{
            res.send("error");
        }

    })

})
app.post("/patlogin",(req,res)=>{
    const uname=req.body.uname;
    const password=req.body.pass;
    const sql="SELECT * FROM patient_info WHERE Username=? AND Password=?  ";
    db.query(sql,[uname,password],(err,result)=>{
        if(result){
            res.send(result)
        }
        else{
            res.send("error");
        }

    })

})
app.get("/getProfile/:id",(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM patient_info WHERE PatientId=? ",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.post('/logins',(req,res,next)=>{
    const username=req.body.uname;
    const password=req.body.pass;

    const sql="SELECT * FROM registration WHERE username=? AND password=? ";
    db.query(sql,[username,password],(err,result,fields)=>{
        if(err) throw err;
        
        Object.keys(result).forEach(function(key){
            var rows=result[key]
            var user=rows.user
            var passwords=rows.password
            

            if(result && user=="Laboratory"){
                res.send(result)
            }
            else if(result && user=="Hospital" ){
                res.send(result)
            }
            else if(!result){
                res.send("No User Found")
            }
            else{
                res.send("Invalid Details")
            }
           

        })
        
        
      
    
        
    })
})
app.post("/cases",(req,res)=>{
    const caseno=req.body.case;
    const date=req.body.date;
    const pres=req.body.prescription;
    const desc=req.body.desc;
    const requests=req.body.requests;
    const special=req.body.special;

    const sql="INSERT INTO case_details (CaseNo,Date,Prescription,Description,Report_Request,Special_Notes) VALUES ?";
    const values=[[caseno,date,pres,desc,requests,special]]
    db.query(sql,[values],(err,result)=>{
        if(err) throw err;
        res.redirect("http://localhost:3000/dochead")
    })

})
app.get("/getcase",(req,res)=>{
    db.query("SELECT * FROM case_details",(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get("/deletecase/:id",(req,res)=>{
    const id=req.params.id;
    db.query("DELETE FROM case_details WHERE CaseId=?",[id],(err,result)=>{
        if(err) throw err;
        res.redirect("")
    })
})
app.post("/image",(req,res)=>{
    const image=req.body.images;
    const values=[[image]]
    const sql="INSERT INTO image(image) VALUES ?"
    db.query(sql,[values],(err,result)=>{
        if(err) throw err;
        console.log("Image Saved")
        res.send("saved")
    })
})
app.post("/registration",(req,res)=>{
    const user=req.body.hosp;
    const name=req.body.name;
    const addr=req.body.add;
    const phone=req.body.phone;
    const email=req.body.email;
    const state=req.body.state;
    const city=req.body.city;
    const pincode=req.body.pincode;
    const type=req.body.type;
    const specal=req.body.special
    const username=req.body.uname;
    const password=req.body.pass;

    const values=[[user,name,type,specal,addr,phone,email,state,city,pincode,username,password]]
    const sql="INSERT INTO  registration(user,name,type,speciality,address,phone,email,state,city,pincode,username,password) VALUES ?"
    db.query(sql,[values],(err,result)=>{
        if(err) throw err;
        res.redirect('http://localhost:3000/add')
    })
})
app.get("/getalls",(req,res)=>{
    db.query("SELECT * FROM registration",(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get("/getall/:id",(req,res)=>{
    const id=req.params.id
    const values=[[id]]
    const sql="SELECT * FROM registration WHERE id= ?";
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)

    })

})
app.post("/update/:id",(req,res)=>{
    const id=req.params.id;
    const name=req.body.name;
    const addr=req.body.add;
    const phone=req.body.phone;
    const email=req.body.email;
    const username=req.body.uname;
    const password=req.body.pass;
    const sql="UPDATE registration SET name=? ,address=?,phone=?,email=?,username=?,password=? WHERE id=?";
    db.query(sql,[name,addr,phone,email,username,password],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get("/gethosp/:id",(req,res)=>{
    const id=req.params.id
    const hosp="Hospital"
    const sql="SELECT * FROM registration WHERE id=? AND user=?"
    db.query(sql,[id,hosp],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})
app.get("/getdoctors/:id",(req,res)=>{
    const id=req.params.id;
    db.query("SELECT * FROM doctor_info WHERE HospId=? ",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get("/getallhosp",(req,res)=>{
    const hosp="Hospital"
    db.query("SELECT * FROM registration WHERE user=?",[hosp],(err,result)=>{
        if(err) throw err;
        res.send(result)

    })
})
app.get("/getallpatients/:id",(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM patient_info WHERE HospId=?",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})
app.get("/getallpatientss",(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM patient_info ",[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})

app.get("/getprofiles/:id",(req,res)=>{
    const id=req.params.id
    const sql="SELECT * FROM registration WHERE id=?";
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get("/getapp/:id",(req,res)=>{
    const id=req.params.id
    const sql="SELECT * FROM appointment WHERE HospId = ?";
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get("/getcaseinfo/:id",(req,res)=>{
    const id=req.params.id
    const sql="SELECT * FROM case_details WHERE PatientId=?"
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })


})
app.get("/getcasedetail/:id",(req,res)=>{
    const id=req.params.id
    const sql="SELECT * FROM case_details WHERE CaseId=?"
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.post('/addpatient',(req,res)=>{
    const id=req.body.hospid
    const name=req.body.name
    const username=req.body.uname
    const password=req.body.pass
    const email=req.body.email
    const phone=req.body.phone
    const file="img/"+req.body.file

    const sql="INSERT INTO patient_info(PatientName,HospId,Username,Password,ContactNo,Email_ID,image) VALUES ?"
    const values=[[name,id,username,password,phone,email,file]]
    db.query(sql,[values],(err,result)=>{
        if(err) throw err;
        res.send("Data Saved")
    })
})
app.post("/caseupload", upload.single('image'), (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        const uname=req.body.uname
        const pid=req.body.pid
        const labname=req.body.labname
        
        const imgsrc = 'http://localhost:8001/images/' + req.file.filename
        const values=[[pid,uname,labname,imgsrc]]
        const insertData = "INSERT INTO test(PatientId,name,labname,img) VALUES ?"
        db.query(insertData, [values], (err, result) => {
            if (err) throw err
            console.log("file uploaded")
            res.send("Data Saved Sucessfully")
            
        })
    }
});
app.get("/getimage/:id",(req,res)=>{
    const id=req.params.id
    db.query("SELECT * FROM test WHERE PatientId=? ",[id],(err,result)=>{
        res.send(result)
    })
})

app.listen(8001, ()=>{
    console.log("successfully connected");
})
