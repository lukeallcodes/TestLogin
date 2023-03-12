function uploadResume() {
  const file = document.getElementById('resume-input').files[0];
  if (!file) {
    console.error('No file selected');
    // add code to display error message to user
    return;
  }
  const storageRef = firebase.storage().ref();
  const resumeRef = storageRef.child('resumes/' + file.name);
  resumeRef.put(file).then(() => {
    console.log('Resume uploaded successfully');
    displayResume();
  }).catch(error => {
    console.error('Error uploading resume:', error);
    // add code to display error message to user
  });
}

function displayResume() {
  const storageRef = firebase.storage().ref();
  const resumeRef = storageRef.child('resumes/resume.pdf'); // replace with your own file path
  resumeRef.getDownloadURL().then(url => {
    const resumeDisplay = document.getElementById('resume-display');
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', url);
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '800px');
    resumeDisplay.appendChild(iframe);
  }).catch(error => {
    console.error('Error retrieving resume:', error);
    // add code to display error message to user
  });
}
