const teamMentor = [
	{
		name: 'Dr. Chinmai Shetty',
		role: 'Professor',
		institute: 'NMAM Institute of Technology',
		imgSrc: '/static/images/team/chinmayi_maam.jpg',

		linkedinLink: 'https://www.linkedin.com/in/chinmai-shetty-481072140',
	},
	{
		name: 'Dr. Malathi',
		role: 'Professor',
		institute: 'KLE Technological University',
		imgSrc: '/static/images/team/maam-removebg-preview.jpg',
		linkedinLink:
			'https://www.linkedin.com/in/malati-sy-23bbaa157',
	},
	// Add more members as objects here
];

const teamContainer = document.getElementById('team-container');

teamMentor.forEach((member) => {
	const cardHTML = `
    <div class="col-md-4 d-flex align-items-center justify-content-center ">
        <div class="card hover-card bg-transparent rounded mt-3 bg-transparent" style="width: 16rem; border: none; ">
            <div class="position-relative">
                <img src="${member.imgSrc}" class="card-img-top rounded-circle" alt="${member.name}" style="object-fit: cover; height: 100%;">
                <div class="card-body text-center  hover-details rounded-circle">
                    <h1 class="card-title text-white" style="font-size: 1.75rem; font-weight: bold; color: #333;">${member.name}</h1>
                    <h6 style="color: #6c757d; margin-bottom: 0.25rem;" class="text-white">${member.role}</h6>
                    <h6 style="color: #6c757d; margin-bottom: 1rem;"  class="text-white">${member.institute}</h6>
                    <div class="d-flex justify-content-center">
                     
                        <a href="${member.linkedinLink}" class="btn mx-2"><i class="fa-brands fa-linkedin fa-2xl" style="color: #0077b5;"></i></a>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>`;

	teamContainer.innerHTML += cardHTML;
});

const teamMembers = [
	{
		name: 'Shankar Prabhu',
		title: 'Information Science and Engineering',
		image: '/static/images/team/shankar.jpg',

		linkedinLink: 'https://in.linkedin.com/in/shankar-prabhu-s-13261922b',
		githubLink: 'https://github.com/shankarprabhu-s',
	},
	{
		name: 'Sharan S Shetty',
		title: 'Information Science and Engineering',
		image: '/static/images/team/sharan.jpg',

		linkedinLink: 'https://in.linkedin.com/in/sharan-shetty-787371261',
		githubLink: 'https://github.com/SharanShetty11',
	},
	{
		name: 'Shashank B',
		title: 'Information Science and Engineering',
		image: '/static/images/team/shashank.jpg',

		linkedinLink: 'https://in.linkedin.com/in/shashank-b-942917229',
		githubLink: 'https://github.com/ShashankBadekila',
	},
	{
		name: 'Shishir Wagle K',
		title: 'Information Science and Engineering',
		image: '/static/images/team/shishir.jpg',

		linkedinLink: 'https://in.linkedin.com/in/shishir-wagle-k-763379261',
		githubLink: 'https://github.com/shishirwaglek',
	},
	// Add more team members as needed
];
const teamMemberContainer = document.getElementById('team-member-container');

teamMembers.forEach((member) => {
	const cardHTML = ` <div class="card bg-transparent hover-card mt-5 my-5 "  style="width: 18rem; position: relative; overflow: hidden;">
                <div class="position-relative "> 
                    <img src="${member.image}" class="card-img-top " alt="${member.name}" style="object-fit: cover; height: 100%;">
                    <div class="card-body hover-details text-center">
                        <h5 class="card-title text-white">${member.name}</h5>
                        <h6 class="text-white">${member.title}</h6>
                        <div class="d-flex justify-content-center">
            
                            <a href="${member.linkedinLink}" class="btn mx-2"><i class="fa-brands fa-linkedin fa-2xl" style="color: #0077b5;"></i></a>
                            <a href="${member.githubLink}" class="btn mx-2"><i class="fa-brands fa-github fa-2xl"></i></a>
              
                        </div>
                    </div>
                </div>
            </div>
        `;
	teamMemberContainer.innerHTML += cardHTML;
});
