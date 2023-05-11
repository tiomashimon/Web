const subjects = [
    { name: "mathematics", image: "https://th.bing.com/th/id/R.e539a2e02bd8b8667b06689b3eb83d38?rik=CElf6HFMNBKcnA&pid=ImgRaw&r=0" },
    { name: "physics", image: "https://th.bing.com/th/id/R.63c6ff86b42346482cab5281aad8eb13?rik=LTwVcuzk9175YA&riu=http%3a%2f%2fbuzz2fone.com%2fwp-content%2fuploads%2fphysics.jpg&ehk=zNyEIEd3lFQo1pJNa6U0KxXtk0CYBmtIb9ZIOP%2bw9sY%3d&risl=&pid=ImgRaw&r=0" },
    { name: "chemistry", image: "https://cdn.mos.cms.futurecdn.net/PLcixwv9qrPXCp99jdzw57-1200-80.jpg" },
];

function searchSubject() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // clear previous results

    const subject = subjects.find(s => s.name.toLowerCase() === searchInput);
    if (subject) {
        const img = document.createElement("img");
        img.src = subject.image;
        img.alt = subject.name;
        resultDiv.appendChild(img);
    } else {
        resultDiv.textContent = "Subject not found.";
    }
}
