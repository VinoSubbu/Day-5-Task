const resumeData = {
  "personalInformation": {
    "name": "Vinoth Kumar",
    "email": "vinothkumarsubburaman@gmail.com",
    "phone": 9344757468,
    "address": "123 Main Street, velachery, chennai, 600001"
  },
  "education": 
    {
      "degree": "Bachelor of Arts in English Literature",
      "institute": "Madurai Kamaraj university",
      "graduationYear": 2020
    }
  ,
  "experience": 
    {
      "position": "Charge department",
      "company": "Scyo decision management",
      "startDate": "August 2023",
      "endDate": "November 2023",
      "responsibilities": [
        "Checking and maintaining Charge bills",
        "Collaborating with Insurance verififcation team",
        "Creating Iv sheet if needed"
      ]
    },
  
  "skills": {
      "1" : "JavaScript",
      "2" : "React.js",
      "3" : "Node.js",
      "4" : "HTML/CSS",
      "5" : "Git",
      "6" : "SQL",
      "7" : "Problem Solving",
      "8" : "Team Collaboration"
  },

  "languages": {"1" : "English (Fluent)", 
  "2" : "Tamil (Good)"},

  "certifications": {
     "1" : "Certified Web Developer (Guvi Certification)" ,
     "2" : "DSA (Guvi Certification)"
  }
    
  ,
  "projects 1": 
    {
      "title": "E-commerce Website",
      "description": "Built a fully functional e-commerce website using React and Node.js.",
      "link": "https://example.com/ecommerce"
    },
    "projects 2": 
    {
      "title": "Task Management App",
      "description": "Developed a task management application with real-time collaboration features.",
      "link": "https://example.com/taskapp"
    }
  
};

// ---------------------------------------- FOR LOOP ---------------------------------------------------------------
// Get the keys of the resumeData object
const keys = Object.keys(resumeData);
// Iterate through the personal information using a for loop
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = resumeData[key];

  if (typeof value === 'object') {
    // If the property is an object, iterate through its properties
    console.log(`${key.toUpperCase()}:`);
    const subKeys = Object.keys(value);
    for (let j = 0; j < subKeys.length; j++) {
      const subKey = subKeys[j];
      console.log(`- ${subKey}: ${value[subKey]}`);
    }
  } else if (Array.isArray(value)) {
    // If the property is an array, iterate through its elements
    console.log(`${key.toUpperCase()}:`);
    for (let j = 0; j < value.length; j++) {
      console.log(`- ${value[j]}`);
    }
  } else {
    // For simple properties, just print the key and value
    console.log(`${key.toUpperCase()}: ${value}`);
  }
}


// ---------------------------------------- FOR EACH LOOP ---------------------------------------------------------------
// Iterate through the personal information using forEach
Object.keys(resumeData).forEach(key => {
  const value = resumeData[key];

  if (typeof value === 'object') {
    // If the property is an object, iterate through its properties
    console.log(`${key.toUpperCase()}:`);
    Object.keys(value).forEach(subKey => {
      console.log(`- ${subKey}: ${value[subKey]}`);
    });
  } else if (Array.isArray(value)) {
    // If the property is an array, iterate through its elements
    console.log(`${key.toUpperCase()}:`);
    value.forEach(item => {
      console.log(`- ${item}`);
    });
  } else {
    // For simple properties, just print the key and value
    console.log(`${key.toUpperCase()}: ${value}`);
  }
});

// ---------------------------------------- FOR IN LOOP ---------------------------------------------------------------

// iterate the JSON data over for loop
for (const section in resumeData) {
  console.log(`\n${section.toUpperCase()}:`);

  if (Array.isArray(resumeData[section])) {
    // Handle array data
    for (let i = 0; i < resumeData[section].length; i++) {
      const item = resumeData[section][i];
      console.log(`  ${i + 1}. ${item.position || item.degree}`);
      if (item.company) console.log(`     Company: ${item.company}`);
      if (item.school) console.log(`     School: ${item.school}`);
    }
  } else if (typeof resumeData[section] === 'object') {
    // Handle object data
    for (const key in resumeData[section]) {
      console.log(`  ${key}: ${resumeData[section][key]}`);
    }
  } else {
    // Handle other data types
    console.log(`  ${resumeData[section]}`);
  }
}

// ---------------------------------------- FOR OF LOOP ---------------------------------------------------------------

// Iterate through the personal information using for...of loop
for (const [key, value] of Object.entries(resumeData)) {
  if (typeof value === 'object') {
    // If the property is an object, iterate through its properties
    console.log(`${key.toUpperCase()}:`);
    for (const [subKey, subValue] of Object.entries(value)) {
      console.log(`- ${subKey}: ${subValue}`);
    }
  } else if (Array.isArray(value)) {
    // If the property is an array, iterate through its elements
    console.log(`${key.toUpperCase()}:`);
    for (const item of value) {
      console.log(`- ${item}`);
    }
  } else {
    // For simple properties, just print the key and value
    console.log(`${key.toUpperCase()}: ${value}`);
  }
}

