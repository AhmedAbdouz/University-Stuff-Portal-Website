const app = require('./index.js');
const express = require('express');
const Router = new express.Router();
const mongoose = require('mongoose');
const hr = require("./hr.js");
const Ac = require('./AcMember.js');
const locations = require('./locations.js');
const faculty = require('./faculty.js');
const department = require('./department.js');
const course = require('./course.js');
const bcryptjs = require('bcryptjs');
const AcMem = require('./AcMember.js');
const e = require('express');
const jwt = require("jsonwebtoken");


Router.use(express.json());

const check = (x) => {
  // return true;
  return x.substring(0, 2) === 'hr';
}

//tested
//location Section/////////////////////////////////////////////////////////////////////////////////////////////

//Location adding fucntion

function authanticateToken(req, res, next) {
  // return next();
  //const token = authHeader && authHeader.split(" ")[1];
  const token = req.cookies.token;
  if (token == null) {
    console.log("test");
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err)
      return res.sendStatus(403);
    req.userID = user.id;
    next();
  });
};

Router.post('/addlocation', authanticateToken, async function (req, res) {
  // console.log("Working");
  // res.send("HERE");
  if (!check(req.userID)) {
    res.send("Not HR");
    return;
  }
  if (!req.body.name || !req.body.capcity) {
    res.send("You are missing required data");
    return;
  }
  const loc = new locations({
    name: req.body.name,
    capcity: req.body.capcity,
    type: req.body.type
  });
  // console.log(loc);
  loc.save().then(() => {       // succfully added
    console.log("New loc");
    return res.send("New location added");
  }).catch(() => {              // error while adding 
    // console.log("err");
    return res.send("ERR");
  })
})

//location deleting
Router.post('/deletelocation', authanticateToken, async function (req, res) {

  if (!check(req.userID)) {
    res.send("Not HR");
    return;
  }
  if (!req.body.name) {
    res.send("You are missing required data");
    return;
  }
  await locations.deleteOne({ name: req.body.name }).then(() => {
    return res.send("Deleted");
  }).catch((err) => {
    return res.send("Err");
  })

})

// location update
Router.put('/updatelocation', authanticateToken, async function (req, res) {

  if (!check(req.userID)) {
    res.send("Not HR");
    return;
  }
  if (!req.body.name) {
    res.send("You are missing requierd data");
    return;
  }
  let upd = {};
  if (!req.body.new_name)
    upd.name = req.body.name;
  else upd.name = req.body.new_name
  if (req.body.capcity)
    upd.capcity = req.body.capcity;
  if (req.body.type)
    upd.type = req.body.type;

  console.log(upd);
  await locations.findOneAndUpdate({ name: req.body.name }, upd).then(() => {
    res.send("Updated");
  }).catch((err) => {
    res.send("Cannot update");
  })

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//tested
//Faculty Section //////////////////////////////////////////////////////////////////////////////////////////

//faculty adding fuction
Router.post('/addfaculty', authanticateToken, async function (req, res) {
  console.log(req);
  if (!check(req.userID)) {
    res.send("Not HR");
    return;
  }
  if (!req.body.name)
    return res.send("Invalid data");

  const fac = new faculty({
    name: req.body.name,
    departments: [],
  });

  fac.save().then(() => {       // succfully added
    console.log("New fac");
    res.send("New faculty added.");
  }).catch(() => {              // error while adding 
    console.log("err");
    res.send("ERR");
  })
})

//faculty deleting
Router.post('/deletefaculty', authanticateToken, async function (req, res) {

  if (!check(req.userID)) {
    res.send("Not HR");
    return;
  }
  console.log(req.body);
  if (!req.body.name)
    return res.send("You are missing required data");

  const fac = await faculty.findOne({ name: req.body.name });
  fac.remove().then(() => {
    res.send('Deleted');
  }).catch((err) => {
    res.send('err');
  })
  // await faculty.findOneAndRemove({ name: req.body.name }).then(() => {
  //   res.send("deleted");
  // }).catch((err) => {
  //   res.send("cannot delete");
  // })

})

// faculty update
Router.put('/updatefaculty', authanticateToken, async function (req, res) {

  if (!check(req.userID)) {
    res.send("Not HR");
    return;
  }
  if (!req.body.name)
    return res.send("You are missing required data");
  let upd = {};
  upd.name = req.body.name;
  if (req.body.new_name)
    upd.name = req.body.new_name;

  // console.log(upd.name);
  await faculty.findOneAndUpdate({ name: req.body.name }, upd).then(() => {
    department.updateMany({ faculty: req.body.name }, { faculty: upd.name }).then(() => {
      res.send("Updated");
    });
  }).catch((err) => {
    res.send("cannot update");
  })

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Department Section ///////////////////////////////////////////////////////////////////////////////////////

//Department adding function
Router.post('/addDepartment', authanticateToken, async function (req, res) {

  if (!check(req.userID)) {
    res.send("Not HR");
    return;
  }
  if (!req.body.name || !req.body.faculty)
    return res.send("You are missing required data");

  let fac;
  await faculty.find({ name: req.body.faculty }, (err, result) => {
    if (err || result.length === 0) {
      res.send("Please insert right faculty");// no faculty 
      return;
    }
    fac = result[0];
    const dep = new department({
      name: req.body.name,
      faculty: req.body.faculty,
      head: req.body.head
    });

    dep.save().then(async () => {       // succfully added
      console.log("New dep");
      const tp = fac.departments;
      tp.push(dep.name);
      console.log(tp)
      await faculty.updateOne({ name: fac.name }, { departments: tp });
      res.send("New department added");
    }).catch(() => {              // error while adding 
      // console.log("err");
      res.send("ERR");
    })
  })
});




//department deleting
Router.post('/deletedepartment', authanticateToken, async function (req, res) {

  if (!check(req.userID)) {
    res.send("Not HR");
    return;
  }
  if (!req.body.name)
    return res.send("You are missing required data");

  await department.findOneAndRemove({ name: req.body.name }, async (err, obj) => {
    if (err || !obj) {
      res.send("Worng Department Name");
      return;
    }
    // console.log(obj);
    faculty.updateOne({ name: obj.faculty }, { $pull: { "departments": req.body.name } }, (err) => {
      if (err) {
        res.send("ERR Deleteing")
      }
      course.updateMany({ "departments": req.body.name }, { $pull: { "departments": req.body.name } }, async (err) => {
        if (err) {
          res.send('err');
        }
        res.send("Deleted")
      });
    });
  })

})

// depratment update 
Router.put('/updatedepartment', authanticateToken, async function (req, res) {

  if (!check(req.userID)) {
    res.send("Not HR");
    return;
  }
  if (!req.body.name)
    return res.send("You are missing required data");

  let upd = {};

  if (req.body.new_name)
    upd.name = req.body.new_name;
  else upd.name = req.body.name;

  if (req.body.new_faculty)
    upd.faculty = req.body.new_faculty;


  if (req.body.head)
    upd.head = req.body.head;

  console.log(upd);
  // console.log(req.body);
  await department.findOne({ name: req.body.name }, async (err, obj) => {
    if (err) {
      res.send("err");
    }
    if (upd.head) {
      if (obj.head) {
        await AcMem.updateOne({ id: obj.head }, { head: false });
      }
      await AcMem.updateOne({ id: upd.head }, { head: true });
    }
    console.log(obj);
    faculty.updateOne({ name: obj.faculty }, { $pull: { "departments": req.body.name } }, async (err) => {
      if (err) {
        return res.send("ERR")
      }
      if (!upd.faculty)
        upd.faculty = obj.faculty;
      let ff = await faculty.findOne({ name: upd.faculty });
      let dps = ff.departments;
      dps.push(upd.name);
      ff.departments = dps;
      ff.save().then(() => {

        course.updateMany({ "departments": req.body.name }, { $pull: { "departments": req.body.name } }, async (err) => {
          if (err) {
            res.send('err');
          }
          course.updateMany({ name: { $in: obj.courses } }, { $push: { "departments": upd.name } }, async (err) => {
            if (err)
              return res.send('err');
            department.updateOne({ name: req.body.name }, upd, (err) => {
              if (err)
                return res.send('err');
              return res.send("Updated")

            })
          })
        })
      })
    });
  });
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Course section //////////////////////////////////////////////////////////////////////////////////////////
Router.post('/addcourse', authanticateToken, async function (req, res) {

  if (!check(req.userID)) {
    res.send("Not HR");
    return;
  }

  if (!req.body.name || !req.body.department)
    return res.send("you are missing required data");

  let dep;
  await department.find({ name: req.body.department }, (err, result) => {
    if (err || result.length === 0) {
      res.send("please entre right department");// no dep 
      return;
    }
    dep = result[0];
  });

  const dds = [];
  dds.push(req.body.department);
  const cor = new course({
    name: req.body.name,
    departments: dds
  });
  // console.log(cor);
  // console.log(dep);
  // await cor.department.push( department.findOne({ name: req.body.name }));
  cor.save().then(async () => {       // succfully added
    console.log("New course");
    const tp = dep.courses;
    tp.push(cor.name);
    console.log(tp);
    // console.log(tp)
    await department.updateOne({ name: dep.name }, { courses: tp });
    return res.send("New course added");
  }).catch(() => {              // error while adding 
    console.log("err");
    return res.send("ERR");
  })
})

//Course deleting
Router.post('/deletecourse', authanticateToken, async function (req, res) {

  if (!check(req.userID)) {
    res.send("Not HR");
    return;
  }

  if (!req.body.name)
    return res.send("You are missing required data");


  await course.findOneAndRemove({ name: req.body.name }, async (err, obj) => {
    if (err || !obj) {
      res.send("Wrong Course Name");
      return;
    }
    department.updateMany({ "courses": req.body.name }, { $pull: { "courses": req.body.name } }, (err) => {
      if (err) {
        res.send("ERR Deleteing")
      }
      res.send("Deleted")
    });
  })

})

//course update
Router.put('/updatecourse', authanticateToken, async function (req, res) {

  if (!check(req.userID)) {
    res.send("Not HR");
    return;
  }
  if (!req.body.name)
    return res.send("You are missimg required data");
  let upd = {};

  if (!req.body.new_name)
    upd.name = req.body.name;
  else upd.name = req.body.new_name;


  await course.findOneAndUpdate({ name: req.body.name }, upd, async (err, obj) => {
    if (err) {
      return res.send("err");
    }


    await department.updateMany({ "courses": req.body.name }, { $pull: { "courses": req.body.name } }, async (err) => {
      if (err) {
        res.send("ERR Updating");
      }
      await course.findOne({ name: upd.name }, async (err, obj2) => {
        if (err)
          return res.send("ERR upd");

        let dd = obj2.departments;
        if (req.body.new_department) {
          let cc = await department.findOne({ name: req.body.new_department });
          if (!cc) {
            return res.send("ERRnew");
          }
          console.log(req.body.new_department);
          cc.courses.push(upd.name);
          cc.save();
          dd.push(req.body.new_department);
          // add it to the department
        }

        if (req.body.remove_department) {
          dd = dd.filter(el => el !== req.body.remove_department);
        }
        obj2.departments = dd;

        obj2.save().then(() => {
          department.updateMany({ name: { $in: dd } }, { $push: { "courses": upd.name } }, async (err) => {

            return res.send("Updated");
          });
        })

      });
    });
  });
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//stuff members/////////////////////////////////////////////////////////////////////////////////////////////

//tested
//delete stuff
Router.post('/deletestuff', authanticateToken, async (req, res) => {
  if (!check(req.userID))
    res.send("NOTHR");

  if (!req.body.id) {
    return res.send('You are missing required data');
  }
  const id = req.body.id;
  if (id.substring(0, 2) === 'hr') {//hr
    hr.deleteOne({ id: req.body.id }, (err) => {
      if (err)
        res.send("err");
      res.send("Deleted");
    });
  } else {
    Ac.deleteOne({ id: req.body.id }, (err) => {
      if (err)
        res.send("err");
      res.send("Deleted");
    });
  }
});

Router.put('/updatestuff', authanticateToken, async (req, res) => {
  if (!check(req.userID))
    return res.send("NOTHR");

  const id = req.body.id;
  if (!id)
    return res.send("You are missing required data");

  let upd = {};
  if (req.body.name)
    upd.name = req.body.name;

  if (req.body.email)
    upd.email = req.body.email;

  if (req.body.dayOff)
    upd.dayOff = req.body.dayOff;

  if (req.body.office)//name / cap
    upd.office = req.body.office;

  if (req.body.annual_leave_balance)
    upd.annual_leave_balance = req.body.annual_leave_balance;

  // if (req.body.annual_leave_balance)
  //   upd.annual_leave_balance = req.body.annual_leave_balance;

  if (req.body.password) {
    const salt = await bcryptjs.genSalt();
    const hashedpass = await bcryptjs.hash(req.body.password, salt);
    upd.password = hashedpass;
  }
  /// head ??

  if (id.substring(0, 2) === 'hr') {//hr
    upd.dayOff = 'Saturday';
    hr.updateOne({ id: req.body.id }, upd, (err) => {
      if (err)
        return res.send("err");
      return res.send("Updated");
    });
  } else {
    Ac.updateOne({ id: req.body.id }, upd, (err) => {
      if (err)
        return res.send("err");
      return res.send("Updated");
    });
  }
});

//tested
//get stuff attendace record.

Router.post('/stuffattendance', authanticateToken, (req, res) => {
  if (!check(req.userID))
    res.send("NOTHR");

  if (!req.body.id) {
    return res.send("You are missing required data");
  }
  const id = req.body.id;

  if (id.substring(0, 2) === 'hr') {//hr
    hr.findOne({ id: req.body.id }, (err, obj) => {
      if (!obj || err) {
        return res.send("Worng User ID");
      }
      let ret = [];
      ret.push(obj.id);
      ret.push(obj.dayinfo);
      return res.send(ret);
    });
  } else {
    Ac.findOne({ id: req.body.id }, (err, obj) => {
      if (!obj || err)
        return res.send("err");
      let ret = [];
      ret.push(obj.id);
      ret.push(obj.dayinfo);
      return res.send(ret);
    });
  }

})


//add sign in/out record.

Router.post('/addsign', authanticateToken, (req, res) => {
  if (!check(req.userID))
    return res.send("NOTHR");

  const id = req.body.id;
  let rec = {};
  if (!id || req.userID === id)/// or with it's the same HR
    return res.send("ERR");
  console.log(req.body.date);
  rec.date = req.body.date;
  rec.type = req.body.type;
  if (!rec.date || !rec.type)
    return res.send("ERR");
  rec.date = new Date(rec.date);
  console.log(rec);
  if (id.substring(0, 2) === 'hr') {//hr
    hr.findOne({ id: req.body.id }, (err, obj) => {
      if (!obj || err)
        return res.send("err");
      obj.attendance.push(rec);
      obj.save().then(() => {
        res.send("New record Added");
      })
      // res.send(obj.attendance);
    });
  } else {
    Ac.findOne({ id: req.body.id }, (err, obj) => {
      if (err)
        return res.send("err");
      obj.attendance.push(rec);
      obj.save().then(() => {
        res.send("DONE");
      })
      // res.send(obj.attendance);
    });
  }

})


//get stuff with missing hours/days.

// not tested  conflict
Router.get('/stuffmissing', authanticateToken, async (req, res) => {
  if (!check(req.userID))
    res.send("NOTHR");

  let ans = {};
  let sol = [];

  ans.HRs = await hr.find({ $or: [{ hours: { $gt: 0 } }, { missingdays: { $gt: 0 } }] });

  ans.HRs = ans.HRs.map((el) => {
    sol.push({ id: el.id, hours: el.hours, missingdays: el.missingdays });
    return
  })

  ans.Acs = await Ac.find({ $or: [{ hours: { $gt: 0 } }, { missingdays: { $gt: 0 } }] });

  ans.Acs = ans.Acs.map((el) => {
    sol.push({ id: el.id, hours: el.hours, missingdays: el.missingdays });
    return
  })
  console.log(sol);

  return res.send(sol);

})

Router.put('/updatesalary', authanticateToken, async (req, res) => {
  if (!check(req.userID))
    return res.send("NOTHR");


  const id = req.body.id;
  let rec = {};
  if (!id)/// or with it's the same HR
    return res.send("You are missing required data");

  rec.salary = req.body.salary;
  if (!rec.salary)
    return res.send("You are missing required data");
  if (id.substring(0, 2) === 'hr') {//hr
    hr.findOne({ id: req.body.id }, (err, obj) => {
      if (err)
        return res.send("err");
      obj.salary = rec.salary;
      obj.save().then(() => {
        res.send("Updated");
      })
      // res.send(obj.attendance);
    });
  } else {
    Ac.findOne({ id: req.body.id }, (err, obj) => {
      if (err)
        return res.send("err");
      obj.salary = rec.salary;
      obj.save().then(() => {
        res.send("Updated");
      })
      // res.send(obj.attendance);
    });
  }

})

module.exports = Router;

