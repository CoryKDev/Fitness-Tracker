init();

async function init() {
    if (location.search.split('=')[1] === undefined) {
        const workout = await ApplicationCache.getLastWorkout();
        if (workout)  {
            location.search = "?id" + workout._id;
        } else {
            document.querySelector("#continue-btn").classList.add("d-none")
        }
    }
}