fileUpload.addEventListener("change", async (event) => {
    const files = event.target.files;
  
    Array.from(files).forEach(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
  
      // Send file to the server
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log("File uploaded successfully:", data);
  
        // Display uploaded file as an icon
        const fileIcon = document.createElement("div");
        fileIcon.classList.add("icon");
  
        const fileImage = document.createElement("img");
        fileImage.src = "file-icon.png"; // Replace with your file icon
        fileIcon.appendChild(fileImage);
  
        const fileName = document.createElement("span");
        fileName.textContent = file.name;
        fileIcon.appendChild(fileName);
  
        // Add icon to the desktop area
        desktopArea.appendChild(fileIcon);
  
        // Add right-click listener to the icon
        fileIcon.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          selectedIcon = fileIcon;
  
          // Show the context menu at mouse position
          contextMenu.style.top = `${e.clientY}px`;
          contextMenu.style.left = `${e.clientX}px`;
          contextMenu.style.display = "block";
        });
      } else {
        console.error("Failed to upload file:", data.error);
      }
    });
  
    // Reset file input
    fileUpload.value = "";
  });