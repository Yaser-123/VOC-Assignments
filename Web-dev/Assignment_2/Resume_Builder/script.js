// Elements
const form = document.getElementById('resume-form');
const generateBtn = document.getElementById('generate-resume');
const resumeName = document.getElementById('resume-name');
const resumeEmail = document.getElementById('resume-email');
const resumePhone = document.getElementById('resume-phone');
const resumeBio = document.getElementById('resume-bio');
const resumeSkills = document.getElementById('resume-skills');
const resumeExperience = document.getElementById('resume-experience');
const resumeEducation = document.getElementById('resume-education');
const resumeAchievements = document.getElementById('resume-achievements');
const resumePreview = document.getElementById('resume-preview');

// Prevent form submission and prevent page reload
form.addEventListener('submit', (event) => {
    event.preventDefault();
});

// Event Listener for the generate resume button
generateBtn.addEventListener('click', () => {
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const bio = form.bio.value;
    const skills = form.skills.value;
    const experience = form.experience.value;
    const education = form.education.value;
    const achievements = form.achievements.value;

    // Update the resume preview
    resumeName.textContent = name;
    resumeEmail.textContent = `${email}`;
    resumePhone.textContent = `${phone}`;
    resumeBio.textContent = `${bio}`;
    resumeSkills.textContent = `${skills}`;
    resumeExperience.textContent = `${experience}`;
    resumeEducation.textContent = `${education}`;
    resumeAchievements.textContent = `${achievements}`;

    // Show the resume preview section
    resumePreview.style.display = 'block';
});

// Function to generate PDF resume
const generatePDF = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;

    // Get all resume data from the form
    const name = document.getElementById('resume-name').textContent;
    const email = document.getElementById('resume-email').textContent;
    const phone = document.getElementById('resume-phone').textContent;
    const bio = document.getElementById('resume-bio').textContent;
    const skills = document.getElementById('resume-skills').textContent;
    const experience = document.getElementById('resume-experience').textContent;
    const education = document.getElementById('resume-education').textContent;
    const project = document.getElementById('project').textContent;
    const achievements = document.getElementById('resume-achievements').textContent;

    // Set font for the document
    doc.setFont("helvetica");

    // Title - centered at the top
    const title = "Resume";
    const titleWidth = doc.getTextWidth(title);
    const centerX = (pageWidth - titleWidth) / 2;
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text(title, centerX, 20); // Title of the PDF

    let yPosition = 40;  // Starting position for the content
    const margin = 20;   // Page margin for all sides
    const maxWidth = pageWidth - 2 * margin; // Width for text content

    // Helper function to handle text with wrapping
    const addTextWithWrapping = (text, x, y, maxWidth) => {
        const wrappedText = doc.splitTextToSize(text, maxWidth); // Wrap text to fit within maxWidth
        doc.text(wrappedText, x, y);
        const textHeight = wrappedText.length * 8;  // Approximate height for wrapped text
        return textHeight;
    };

    // Function to add a section with title and content with padding and spacing
    const addSection = (title, content) => {
        // Set font for the title (heading)
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");

        // Add padding for the title
        const titlePadding = 12; // Padding after the title
        doc.text(title, margin, yPosition);

        // Move the yPosition after the title and add space
        yPosition += titlePadding;

        // Set font for the content (body)
        doc.setFont("helvetica", "normal");

        // Add content with wrapping and increase yPosition accordingly
        const contentHeight = addTextWithWrapping(content, margin + 10, yPosition, maxWidth);
        yPosition += contentHeight + 8; // Add space after the content

        // Check if we need to add a new page
        if (yPosition > pageHeight - margin) {
            doc.addPage();
            yPosition = 20; // Reset yPosition for new page
        }
    };

    // Add sections with professional spacing and no separators
    addSection("Name: ", name);
    addSection("Email: ", email);
    addSection("Phone: ", phone);
    addSection("Professional Summary: ", bio);
    addSection("Skills: ", skills);
    addSection("Project: ", project);
    addSection("Work Experience: ", experience);
    addSection("Education: ", education);
    addSection("Achievements: ", achievements);

    // Save the PDF
    doc.save("resume.pdf");
};



// Event Listener for the download PDF button
document.getElementById('download-pdf').addEventListener('click', generatePDF);
