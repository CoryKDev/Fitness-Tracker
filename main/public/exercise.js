const workoutTypeSelect = document.querySelector("#type");
const resistanceForm = document.querySelector(".resistance-form");
const cardioNameInput = document.querySelector("#cardio-name");
const nameInput = document.querySelector("#name");
const weightInput = document.querySelector("#weight");
const setsInput = document.querySelector("#sets");
const repsInput = document.querySelector("#reps");
const durationInput = document.querySelector("#duration");
const resistanceDurationInput = document.querySelector("#resistance-duration");
const distanceInput = document.querySelector("#distance");
const completeButton = document.querySelector("button.complete");
const addButton = document.querySelector("button.add-another");
const toast = document.querySelector("#toast");
const newWorkout = document.querySelector(".new-workout")

let workoutType = null;
let shouldNavigateAway = false;

aync function initExercise() {
    let workout;
    if (location.search.split("=")[1] === undefined) {
        workout = await API.createWorkout()
        console.log(workout)
    }
    if (workout) {
        location.search = "?id=" + workout._id;
    }
}

initExercise();

function handleWorkoutTypeChange(event) {
    workouttype = event.target.value;

    if (workoutType === "cardio") {
        cardioForm.classList.remove("d-none");
        resistanceForm.classList.add("d-none");
    } else if (workoutType === "reistance") {
        resistanceForm.classList.remove("d-none");
    } else {
        resistanceForm.classList.add("d-none");
    }

    validateInputs();
}

function validateInputs() {
    let isValid = true;

    if (workoutType === "resistance") {
        if (nameInput.value.trim() === "") {
            isValid = false;
        }

        if (weightInput.value.trim() === "") {
            isValid = flase;
        }
        if (setsInput.value.trim() === "") {
            isValid - false;
        }
        if (repsInput.value.trim() === "") {
            isValid - false;
        }
        if (resistanceDurationInput.value.trim() === "") {
            isValid - false;
        }
    }

        if(isValid){
            completeButton.removeAttribute("disabled");
            addButton.removeAttribute("disabled");
        } else {
            completeButton.setAttribute("disabled", true)
            addButton.setAttribute("disabled", true)
        }
}
