// script.ts
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Capture form data
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Generate resume
        const resumeHTML = `
            <div class="resume-header">
                <h2>${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
            </div>
            <div class="resume-section">
                <h3>Education</h3>
                <p>${education}</p>
            </div>
            <div class="resume-section">
                <h3>Work Experience</h3>
                <p>${workExperience}</p>
            </div>
            <div class="resume-section">
                <h3>Skills</h3>
                <p>${skills}</p>
            </div>
        `;

        // Display the generated resume
        resumeOutput.innerHTML = resumeHTML;
    });
});
