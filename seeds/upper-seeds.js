const { Upper } = ("../models");

const upperBodyData = [
  {
    work_out: "Bench Press",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Incline Bench Press",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Lateral Raises",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Front Raises",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Bent Over Barball Row",
    sets: 4,
    reps: 20,
  },
  {
    work_out: "Dips",
    sets: 4,
    reps: 20,
  }, 
];


const seedUpper = () => Upper.bulkCreate(upperBodyData);

module.exports = seedUpper;