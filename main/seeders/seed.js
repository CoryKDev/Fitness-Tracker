let mongoose = require("mongoose");
// let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let workoutSeed = [
    {
        day: new Date(new Date().setDate(new Date().getDate() - 10)),
        exercises: [
            {
                type: "Pull",
                name: "Bicep Curl",
                weight: 30,
                reps: 8,
                sets: 5
                
            }
        ]
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 9)),
        exercises: [
            {
                type: "Pull",
                name: "Lat Pull Downs",
                weight: 110,
                reps: 10-12,
                sets: 5
                
            }
        ]
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 8)),
        exercises: [
            {
                type: "Push",
                name: "Incline DB Press",
                weight: 60,
                reps: 8,
                sets: 5
                
            }
        ]
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 7)),
        exercises: [
            {
                type: "Push",
                name: "Tricep Close Grip Pressdown",
                weight: 30,
                reps: 8,
                sets: 5
                
            }
        ]
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 6)),
        exercises: [
            {
                type: "Pull",
                name: "Pull Ups",
                weight: 150,
                reps: 10,
                sets: 5
                
            }
        ]
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 5)),
        exercises: [
            {
                type: "Pull",
                name: "Bent over row",
                weight: 40,
                reps: 8,
                sets: 5
                
            }
        ]
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 4)),
        exercises: [
            {
                type: "Push",
                name: "Leg Extentions",
                weight: 280,
                reps: 7,
                sets: 5
                
            }
        ]
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 3)),
        exercises: [
            {
                type: "Push",
                name: "Squat",
                weight: 185,
                reps: 6,
                sets: 5
                
            }
        ]
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 2)),
        exercises: [
            {
                type: "Pull",
                name: "DeadLift",
                weight: 225,
                reps: 8,
                sets: 5
                
            }
        ]
    }
];

