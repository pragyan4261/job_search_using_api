const job_section = document.getElementById('job_section');
const job_heading = document.getElementById("job_heading");
const job_description = document.getElementById("job_description");
const searchbtn = document.getElementById("searchbtn");
const jobsearch = document.getElementById("jobsearch");
// const job_cities = document.getElementById("job_cities");
// const employer_name = document.getElementById("employer_name");
// const employer_logo = document.getElementById("employer_logo");
// const job_title = document.getElementById("job_title");
// const job_employment_type = document.getElementById("job_employment_type");
// const job_publisher = document.getElementById("job_publisher");
// const job_apply_link = document.getElementById("job_apply_link");
// const job_area = document.getElementById("job_area");



const renderCard = (job) => {
    const card  = document.createElement("div");
    card.innerHTML = `
   
        <div class="w-11/12 h-56  mx-auto flex flex-row justify-around items-center rounded-2xl bg-indigo-600 mb-5">
            <div class="w-[30%] h-56 flex flex-col justify-center pl-10 items-center text-white">
                <img src="${job.employer_logo}" alt="job-image" class="w-[80%] h-16 mb-5 object-contain" id="employer_logo">
                <h1 class="text-2xl font-medium mb-3 text-center">${job.job_title}</h1>
                <div class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p class="text-lg font-medium" id="job_area">${job.job_city + ", " + job.job_country }</p>
                </div>
            </div> 
            <div class=" w-[65%] h-48 mr-5 space-y-2 p-3 text-white rounded-2xl shadow-md shadow-white bg-indigo-700">
                <h1 class="text-lg font-bold">Employer:<span class="ml-4 text-xl" id="employer_name">${job.employer_name}</span></h1>
                <h1 class="text-lg font-bold">Publisher:<span class="ml-4 text-xl" id="job_publisher">${job.job_publisher}</span></h1>
                <h1 class="text-lg font-bold">Type:<span class="ml-4 text-xl" id="job_employment_type">${job.job_employment_type}</span></h1>
                <a href="${job.job_apply_link}" id=""><button class=" w-56 h-10 mt-5 ml-80 rounded-md bg-white text-indigo-700 hover:shadow-sm hover:shadow-white hover:bg-indigo-700 hover:text-white hover:border hover:border-white">Click To Know More</button></a>
            </div>
        </div>
    `;
    return card;
}

const jobData = (query) =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f2cf62624emshb6c101e0523f571p1c4d63jsn71bdff42b70a',
            // 'X-RapidAPI-Key': '029682c2e3mshef09b9f9dec814ap1e959fjsn006a51ae10f9',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        }
    };

    fetch('https://jsearch.p.rapidapi.com/search?query=' + query, options)
         .then(response => response.json())
         .then((response) => {
            console.log(response);
           response.data.forEach((job) => {
            job_heading.innerHTML = "Job for " + query;
            // job_description.innerHTML = job.job_description;

            // job_employment_type.innerText = job.job_employment_type;
            // job_publisher.innerText = job.job_publisher;
            // job_title.innerText = job.job_title;
            // job_area.innerText = job.job_city + ", " + job.job_country ;
            // employer_name.innerText = job.employer_name;
            // employer_logo.src = job.employer_logo;
            // job_apply_link.href = job.job_apply_link;

            const card = renderCard(job);
            job_section.appendChild(card);


           })
            
         })
         .catch(err => console.error(err));

}
searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    job_section.innerHTML = " ";
    jobData(jobsearch.value);
})

