// ================= SIDEBAR =================

function setActive(element){

    document.querySelectorAll(".sidebar nav a")
    .forEach(link => link.classList.remove("active"));

    element.classList.add("active");

    let page = element.getAttribute("data-page");

    openPage(page);
}

function toggleSidebar(){
    document.querySelector(".sidebar").classList.toggle("collapsed");
}


// ================= DATE =================

document.querySelectorAll("#dateNow").forEach(date=>{
    date.innerHTML = new Date().toLocaleString();
});


// ================= OPEN PAGE (FIXED SCROLL ISSUE) =================

function openPage(pageId){

    document.querySelectorAll(".page").forEach(p=>{
        p.style.display = "none";
        p.classList.remove("active");
    });

    let current = document.getElementById(pageId);

    if(current){
        current.style.display = "block";
        current.classList.add("active");
    }

    // FIX WHITE SPACE / SCROLL ISSUE
    window.scrollTo(0,0);

    document.querySelectorAll(".sidebar nav a")
    .forEach(link=>{
        link.classList.remove("active");

        if(link.getAttribute("data-page") === pageId){
            link.classList.add("active");
        }
    });
}


// ================= DASHBOARD DATA =================

const dashboardData = {
"2021-2022":{enrollment:"271",enrollmentChange:"",enrollmentNote:"",repeaters:"5",repeatersChange:"",repeatersNote:"",dropouts:"0",dropoutsChange:"",dropoutsNote:"",classrooms:"10",classroomsChange:"",classroomsNote:"",teachers:"10",teachersChange:"",teachersNote:""},
"2022-2023":{enrollment:"258",enrollmentChange:"-4.80%",enrollmentNote:"(vs S.Y 2021-2022)",repeaters:"2",repeatersChange:"-60%",repeatersNote:"(from 5 to 2)",dropouts:"0",dropoutsChange:"0%",dropoutsNote:"",classrooms:"11",classroomsChange:"10%",classroomsNote:"",teachers:"11",teachersChange:"10%",teachersNote:""},
"2023-2024":{enrollment:"274",enrollmentChange:"6.20%",enrollmentNote:"(vs S.Y 2022-2023)",repeaters:"4",repeatersChange:"100%",repeatersNote:"(from 2 to 4)",dropouts:"0",dropoutsChange:"0%",dropoutsNote:"",classrooms:"10",classroomsChange:"-9.09%",classroomsNote:"",teachers:"10",teachersChange:"-9.09%",teachersNote:""},
"2024-2025":{enrollment:"314",enrollmentChange:"14.60%",enrollmentNote:"(vs S.Y 2023-2024)",repeaters:"3",repeatersChange:"-25%",repeatersNote:"(from 4 to 3)",dropouts:"0",dropoutsChange:"0%",dropoutsNote:"",classrooms:"10",classroomsChange:"0%",classroomsNote:"",teachers:"10",teachersChange:"0%",teachersNote:""},
"2025-2026":{enrollment:"294",enrollmentChange:"-6.37%",enrollmentNote:"(vs S.Y 2024-2025)",repeaters:"4",repeatersChange:"33.33%",repeatersNote:"(from 3 to 4)",dropouts:"0",dropoutsChange:"0%",dropoutsNote:"",classrooms:"11",classroomsChange:"10%",classroomsNote:"",teachers:"11",teachersChange:"10%",teachersNote:""}
};


// ================= DASHBOARD YEAR SELECT =================

const yearSelect = document.getElementById("yearSelect");

if(yearSelect){

yearSelect.addEventListener("change", function(){

const year = this.value;
const d = dashboardData[year];

document.getElementById("schoolYearTitle").innerHTML = "School Year " + year;

document.getElementById("dashboard-totalEnrollment").innerHTML = d.enrollment;
document.getElementById("dashboard-repeaters").innerHTML = d.repeaters;
document.getElementById("dashboard-dropouts").innerHTML = d.dropouts;
document.getElementById("dashboard-classrooms").innerHTML = d.classrooms;
document.getElementById("dashboard-teachers").innerHTML = d.teachers;

["dashboard-year1","dashboard-year2","dashboard-year3","dashboard-year4","dashboard-year5"]
.forEach(id=>{
let el = document.getElementById(id);
if(el) el.innerHTML = "S.Y " + year;
});

document.getElementById("enrollmentChange").innerHTML =
`<i class="fa-solid fa-arrow-right"></i> Change from Previous Year:
<span class="red-text">${d.enrollmentChange}</span><br><i>${d.enrollmentNote}</i>`;

document.getElementById("repeatersChange").innerHTML =
`<i class="fa-solid fa-arrow-right"></i> Change from Previous Year:
<span class="orange-text">${d.repeatersChange}</span><br><i>${d.repeatersNote}</i>`;

document.getElementById("dropoutsChange").innerHTML =
`<i class="fa-solid fa-arrow-right"></i> Change from Previous Year:
<span class="green-text">${d.dropoutsChange}</span>`;

document.getElementById("classroomsChange").innerHTML =
`<i class="fa-solid fa-arrow-right"></i> Change from Previous Year:
<span class="green-text">${d.classroomsChange}</span>`;

document.getElementById("teachersChange").innerHTML =
`<i class="fa-solid fa-arrow-right"></i> Change from Previous Year:
<span class="green-text">${d.teachersChange}</span>`;

});

}


// ================= ENROLLMENT DATA =================

const enrollmentData = {
"2021-2022":{students:"271",male:"143",female:"128",repeaters:"6",studentChange:"",repeatPercent:"",repeatNote:"",grades:[40,40,31,53,35,33,39]},
"2022-2023":{students:"258",male:"136",female:"122",repeaters:"2",studentChange:"-4.80%",repeatPercent:"-60%",repeatNote:"(from 6 to 2)",grades:[45,50,38,33,27,33,32]},
"2023-2024":{students:"274",male:"141",female:"133",repeaters:"4",studentChange:"6.20%",repeatPercent:"100%",repeatNote:"(from 2 to 4)",grades:[45,48,46,43,32,29,31]},
"2024-2025":{students:"314",male:"158",female:"156",repeaters:"3",studentChange:"14.60%",repeatPercent:"-25%",repeatNote:"(from 4 to 3)",grades:[35,51,43,50,44,32,59]},
"2025-2026":{students:"294",male:"152",female:"142",repeaters:"4",studentChange:"-6.37%",repeatPercent:"33.33%",repeatNote:"(from 3 to 4)",grades:[50,36,50,45,53,43,34]}
};


// ================= ENROLLMENT SELECT =================

const enrollmentSelect = document.getElementById("enrollmentYearSelect");
const bars = document.querySelectorAll(".bar-fill");

if(enrollmentSelect){

enrollmentSelect.addEventListener("change", function(){

const year = this.value;
const d = enrollmentData[year];

document.getElementById("enrollment-totalStudents").innerHTML = d.students;
document.getElementById("enrollment-male").innerHTML = d.male;
document.getElementById("enrollment-female").innerHTML = d.female;
document.getElementById("enrollment-repeaters").innerHTML = d.repeaters;

document.getElementById("yearText").innerHTML = "SY " + year;

document.getElementById("gradeTitle").innerHTML =
"ENROLLMENT BY GRADE LEVEL (" + year + ")";

// FIXED STRING TEMPLATE (THIS WAS ERROR BEFORE)
document.getElementById("studentChange").innerHTML =
`<i class="fa-solid fa-arrow-right"></i> ${d.studentChange}<br><i>(vs Previous Year)</i>`;

document.getElementById("repeatPercent").innerHTML = d.repeatPercent;
document.getElementById("repeatNote").innerHTML = `<i>${d.repeatNote}</i>`;

// UPDATE BARS
bars.forEach((bar,index)=>{
let value = d.grades[index];
bar.style.height = (value * 2.5) + "px";
bar.parentElement.querySelector(".value").innerHTML = value;
});

});

}




// ================= FACILITIES DATA =================

const facilitiesData = {
"2021-2022":{classrooms:"10",usable:"10",capacity:"360",average:"27.1",overcap:"1",within:"90",near:"0",over:"10",classroomChange:"→ vs Previous S.Y.",usableChange:"→ vs Previous S.Y.",capacityChange:"→ vs Previous S.Y.",avgChange:"",overChange:"",grades:[40,20,31,27,35,33,39]},

"2022-2023":{classrooms:"11",usable:"11",capacity:"400",average:"23.5",overcap:"1",within:"82",near:"9",over:"9",classroomChange:"→ vs S.Y. 2021-2022",usableChange:"→ vs S.Y. 2021-2022",capacityChange:"→ vs S.Y. 2021-2022",avgChange:"-13.3%",overChange:"0%",grades:[45,25,19,33,13.5,33,32]},

"2023-2024":{classrooms:"10",usable:"10",capacity:"360",average:"30.4",overcap:"2",within:"70",near:"0",over:"30",classroomChange:"→ vs S.Y. 2022-2023",usableChange:"→ vs S.Y. 2022-2023",capacityChange:"→ vs S.Y. 2022-2023",avgChange:"29.4%",overChange:"50%",grades:[45,24,46,43,32,14.5,31]},

"2024-2025":{classrooms:"11",usable:"11",capacity:"400",average:"28.5",overcap:"3",within:"73",near:"0",over:"27",classroomChange:"→ vs S.Y. 2023-2024",usableChange:"→ vs S.Y. 2023-2024",capacityChange:"→ vs S.Y. 2023-2024",avgChange:"-6.2%",overChange:"33.33%",grades:[35,25.5,21.5,50,44,32,59]},

"2025-2026":{classrooms:"11",usable:"11",capacity:"400",average:"26.7",overcap:"2",within:"73",near:"9",over:"18",classroomChange:"→ vs S.Y. 2024-2025",usableChange:"→ vs S.Y. 2024-2025",capacityChange:"→ vs S.Y. 2024-2025",avgChange:"-6.3%",overChange:"-33.33%",grades:[50,18,25,45,26.5,43,34]}
};


// ================= FACILITIES UPDATE =================

const facilitiesSelect = document.getElementById("facilitiesYearSelect");

function updateFacilities(){

  if(!facilitiesSelect) return;

  const year = facilitiesSelect.value;
  const d = facilitiesData[year];

  document.getElementById("facilities-totalClassrooms").innerHTML = d.classrooms;
  document.getElementById("facilities-usableClassrooms").innerHTML = d.usable;
  document.getElementById("facilities-totalCapacity").innerHTML = d.capacity;
  document.getElementById("facilities-averageClassSize").innerHTML = d.average;
  document.getElementById("facilities-overCapacity").innerHTML = d.overcap;

  document.getElementById("yearLabel").innerHTML = "SY " + year;

  document.getElementById("averageChange").innerHTML = d.avgChange;
  document.getElementById("overcapChange").innerHTML = d.overChange;
  document.getElementById("classroomChange").innerHTML = d.classroomChange;
  document.getElementById("usableChange").innerHTML = d.usableChange;
  document.getElementById("capacityChange").innerHTML = d.capacityChange;

  document.getElementById("utilTitle").innerHTML =
  "CLASSROOM UTILIZATION RATE (SY " + year + ")";

  document.getElementById("barTitle").innerHTML =
  "AVERAGE CLASS SIZE BY GRADE LEVEL (SY " + year + ")";

  document.getElementById("within").innerHTML = d.within + "%";
  document.getElementById("near").innerHTML = d.near + "%";
  document.getElementById("over").innerHTML = d.over + "%";

  document.getElementById("utilPercent").innerHTML = d.within + "%";

  document.getElementById("donutChart").style.background =
  `conic-gradient(
    #14b8a6 0% ${d.within}%,
    #f59e0b ${d.within}% ${parseInt(d.within)+parseInt(d.near)}%,
    #ef4444 ${parseInt(d.within)+parseInt(d.near)}% 100%
  )`;

  document.getElementById("facilities-insight1").innerHTML =
  d.overcap + " classrooms are over capacity.";

  document.getElementById("facilities-insight2").innerHTML =
  "Average class size is " + d.average + " students.";

  document.getElementById("facilities-insight3").innerHTML =
  d.within + "% of classrooms are within recommended capacity.";

  for(let i=0;i<7;i++){
    let bar = document.getElementById("bar"+i);

    if(bar){
      let value = d.grades[i];

      bar.style.height = (value * 4.5) + "px";
      bar.querySelector(".bar-value").innerHTML = value;
    }
  }
}

if(facilitiesSelect){
  facilitiesSelect.addEventListener("change", updateFacilities);
  updateFacilities();
}










// ================= data over view =================

const overviewData = {
  "2021-2022": {
    enrollment: 271,
    teachers: 10,
    classrooms: 10,
    overcap: 3,
    grades: [40,40,31,53,35,33,39],
    within: 7,
    near: 0,
    over: 3
  },
  "2022-2023": {
    enrollment: 258,
    teachers: 11,
    classrooms: 11,
    overcap: 3,
    grades: [45,50,38,33,27,33,32],
    within: 8,
    near: 0,
    over: 3
  },
  "2023-2024": {
    enrollment: 274,
    teachers: 10,
    classrooms: 10,
    overcap: 3,
    grades: [45,48,46,43,32,29,31],
    within: 7,
    near: 0,
    over: 3
  },
  "2024-2025": {
    enrollment: 314,
    teachers: 11,
    classrooms: 11,
    overcap: 3,
    grades: [35,51,43,50,44,32,59],
    within: 8,
    near: 0,
    over: 3
  },
  "2025-2026": {
    enrollment: 294,
    teachers: 11,
    classrooms: 11,
    overcap: 2,
    grades: [50,36,50,45,53,43,34],
    within: 8,
    near: 2,
    over: 1
  }
};

const overviewYears = Object.keys(overviewData);

function percentChange(current, previous){
  if(!previous) return "—";
  let change = ((current - previous) / previous) * 100;
  return (change > 0 ? "+" : "") + change.toFixed(2) + "%";
}

function drawOverviewTrend(){
  const svg = document.getElementById("ovTrendChart");
  if(!svg) return;

  const values = overviewYears.map(y => overviewData[y].enrollment);
  const min = 200;
  const max = 340;

  let points = values.map((v, i) => {
    let x = 60 + i * 120;
    let y = 210 - ((v - min) / (max - min)) * 160;
    return `${x},${y}`;
  }).join(" ");

  let circles = values.map((v, i) => {
    let x = 60 + i * 120;
    let y = 210 - ((v - min) / (max - min)) * 160;
    return `
      <circle cx="${x}" cy="${y}" r="6" fill="#2563eb"></circle>
      <text x="${x - 12}" y="${y - 15}" font-size="14" font-weight="bold">${v}</text>
      <text x="${x - 35}" y="240" font-size="12">${overviewYears[i]}</text>
    `;
  }).join("");

  svg.innerHTML = `
    <line x1="40" y1="210" x2="560" y2="210" stroke="#cbd5e1" stroke-width="2"/>
    <polyline points="${points}" fill="none" stroke="#2563eb" stroke-width="4"/>
    ${circles}
    <text x="250" y="258" font-size="12" fill="#2563eb">Total Enrollment</text>
  `;
}

function updateOverview(){
  const select = document.getElementById("overviewYearSelect");
  if(!select) return;

  const year = select.value;
  const data = overviewData[year];
  const index = overviewYears.indexOf(year);
  const prevYear = overviewYears[index - 1];
  const prev = overviewData[prevYear];

  const avgClass = (data.enrollment / data.classrooms).toFixed(1);
  const ratio = (data.enrollment / data.teachers).toFixed();
  const utilization = Math.round((data.within / data.classrooms) * 100);

  document.getElementById("ovEnrollment").textContent = data.enrollment;
  document.getElementById("ovTeachers").textContent = data.teachers;
  document.getElementById("ovClassrooms").textContent = data.classrooms;
  document.getElementById("ovRatio").textContent = `1:${ratio}`;
  document.getElementById("ovAvgClass").textContent = avgClass;
  document.getElementById("ovOvercap").textContent = data.overcap;

  document.getElementById("ovEnrollmentChange").textContent = prev ? `vs SY ${prevYear}: ${percentChange(data.enrollment, prev.enrollment)}` : "Base year";
  document.getElementById("ovTeachersChange").textContent = prev ? `vs SY ${prevYear}: ${percentChange(data.teachers, prev.teachers)}` : "Base year";
  document.getElementById("ovClassroomChange").textContent = prev ? `vs SY ${prevYear}: ${percentChange(data.classrooms, prev.classrooms)}` : "Base year";
  document.getElementById("ovRatioChange").textContent = prev ? `vs SY ${prevYear}` : "Base year";
  document.getElementById("ovAvgChange").textContent = prev ? `vs SY ${prevYear}` : "Base year";
  document.getElementById("ovOvercapChange").textContent = prev ? `vs SY ${prevYear}: ${data.overcap - prev.overcap}` : "Base year";

  document.getElementById("ovGradeTitle").textContent = `ENROLLMENT BY GRADE LEVEL (SY ${year})`;

  const gradeNames = ["Kinder","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"];
  const maxGrade = Math.max(...data.grades);

  document.getElementById("ovGradeChart").innerHTML = data.grades.map((value, i) => `
    <div class="ov-bar-item">
      <div class="ov-bar" style="height:${(value / maxGrade) * 160}px;">
        <span>${value}</span>
      </div>
      <label>${gradeNames[i]}</label>
    </div>
  `).join("");

  document.getElementById("prevYearHead").textContent = prevYear ? `SY ${prevYear}` : "Previous SY";
  document.getElementById("currentYearHead").textContent = `SY ${year}`;

  document.getElementById("overviewTableBody").innerHTML = `
    <tr><td>Total Enrollment</td><td>${prev ? prev.enrollment : "—"}</td><td>${data.enrollment}</td><td>${prev ? percentChange(data.enrollment, prev.enrollment) : "—"}</td></tr>
    <tr><td>Total Teachers</td><td>${prev ? prev.teachers : "—"}</td><td>${data.teachers}</td><td>${prev ? percentChange(data.teachers, prev.teachers) : "—"}</td></tr>
    <tr><td>Teacher-Student Ratio</td><td>${prev ? "1:" + (prev.enrollment / prev.teachers).toFixed(1) : "—"}</td><td>1:${ratio}</td><td>—</td></tr>
    <tr><td>Total Classrooms</td><td>${prev ? prev.classrooms : "—"}</td><td>${data.classrooms}</td><td>${prev ? percentChange(data.classrooms, prev.classrooms) : "—"}</td></tr>
    <tr><td>Average Class Size</td><td>${prev ? (prev.enrollment / prev.classrooms).toFixed(1) : "—"}</td><td>${avgClass}</td><td>—</td></tr>
    <tr><td>Overcapacity Classrooms</td><td>${prev ? prev.overcap : "—"}</td><td>${data.overcap}</td><td>${prev ? data.overcap - prev.overcap : "—"}</td></tr>
  `;

  document.getElementById("facilityRate").textContent = `${utilization}%`;
  document.getElementById("withinText").textContent = `${data.within} classrooms`;
  document.getElementById("nearText").textContent = `${data.near} classrooms`;
  document.getElementById("overText").textContent = `${data.over} classroom${data.over > 1 ? "s" : ""}`;

  document.getElementById("facilityDonut").style.background =
    `conic-gradient(#16a34a 0% ${utilization}%, #f59e0b ${utilization}% ${utilization + 18}%, #ef4444 ${utilization + 18}% 100%)`;

  const highest = Math.max(...data.grades);
  const highestGrade = gradeNames[data.grades.indexOf(highest)];

  document.getElementById("insight1").textContent = prev
    ? `Enrollment changed by ${data.enrollment - prev.enrollment} students from last year.`
    : `Total enrollment is ${data.enrollment} students.`;

  document.getElementById("insight2").textContent = `Teacher-student ratio is 1:${ratio}.`;
  document.getElementById("insight3").textContent = `${highestGrade} has the highest enrollment with ${highest} students.`;
  document.getElementById("insight4").textContent = `${data.overcap} classrooms are over capacity.`;
  document.getElementById("insight5").textContent = `Overall facility utilization rate is at ${utilization}%.`;

  drawOverviewTrend();
}

document.addEventListener("DOMContentLoaded", function(){
  const overviewSelect = document.getElementById("overviewYearSelect");
  if(overviewSelect){
    updateOverview();
    overviewSelect.addEventListener("change", updateOverview);
  }
});














const issuesData = {
  "2021-2022": {
    enrollment: 271,
    teachers: 10,
    classrooms: 10,
    capacity: 280,
    repeaters: [0,2,0,0,1,1,0],
    grades: [40,40,31,53,35,33,39],
    overcap: 3
  },
  "2022-2023": {
    enrollment: 258,
    teachers: 11,
    classrooms: 11,
    capacity: 280,
    repeaters: [0,3,0,0,0,0,0],
    grades: [45,50,38,33,27,33,32],
    overcap: 3
  },
  "2023-2024": {
    enrollment: 274,
    teachers: 10,
    classrooms: 10,
    capacity: 280,
    repeaters: [0,3,0,0,0,1,0],
    grades: [45,48,46,43,32,29,31],
    overcap: 3
  },
  "2024-2025": {
    enrollment: 314,
    teachers: 11,
    classrooms: 11,
    capacity: 385,
    repeaters: [0,2,0,1,0,0,0],
    grades: [35,51,43,50,44,32,59],
    overcap: 3
  },
  "2025-2026": {
    enrollment: 294,
    teachers: 11,
    classrooms: 11,
    capacity: 385,
    repeaters: [0,3,1,0,0,0,0],
    grades: [50,36,50,45,53,43,34],
    overcap: 2
  }
};

const issuesYears = Object.keys(issuesData);

function drawIssuesTrend(){
  const svg = document.getElementById("issuesTrendChart");
  if(!svg) return;

  const values = issuesYears.map(y => issuesData[y].enrollment);
  const min = 200;
  const max = 340;

  let points = values.map((v, i) => {
    let x = 70 + i * 130;
    let y = 210 - ((v - min) / (max - min)) * 160;
    return `${x},${y}`;
  }).join(" ");

  let circles = values.map((v, i) => {
    let x = 70 + i * 130;
    let y = 210 - ((v - min) / (max - min)) * 160;
    return `
      <circle cx="${x}" cy="${y}" r="6" fill="#2563eb"></circle>
      <text x="${x - 12}" y="${y - 15}" font-size="14" font-weight="bold">${v}</text>
      <text x="${x - 38}" y="240" font-size="12">${issuesYears[i]}</text>
    `;
  }).join("");

  svg.innerHTML = `
    <line x1="45" y1="210" x2="610" y2="210" stroke="#cbd5e1" stroke-width="2"/>
    <polyline points="${points}" fill="none" stroke="#2563eb" stroke-width="4"/>
    ${circles}
    <text x="280" y="258" font-size="12" fill="#2563eb">Total Enrollment</text>
  `;
}

function updateIssues(){
  const select = document.getElementById("issuesYearSelect");
  if(!select) return;

  const year = select.value;
  const data = issuesData[year];
  const gradeNames = ["Kinder","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"];

  const totalRepeaters = data.repeaters.reduce((a,b) => a + b, 0);
  const grade1Repeaters = data.repeaters[1];
  const repeatPercent = totalRepeaters ? ((grade1Repeaters / totalRepeaters) * 100).toFixed(1) : 0;
  const avgClass = (data.enrollment / data.classrooms).toFixed(1);

  document.getElementById("issueRepeatPercent").textContent = `${repeatPercent}%`;
  document.getElementById("issueRepeatDesc").textContent = `of total repeaters are from Grade 1.`;
  document.getElementById("issueAvgClass").textContent = avgClass;
  document.getElementById("issueOvercap").textContent = data.overcap;
  document.getElementById("issueOvercapDesc").textContent = `${data.overcap} classrooms are over capacity.`;
  document.getElementById("repeatersChartTitle").textContent = `REPEATERS BY GRADE LEVEL (SY ${year})`;
  document.getElementById("facilityIssueTitle").textContent = `ENROLLMENT VS CLASSROOM CAPACITY (SY ${year})`;

  const maxRepeat = Math.max(...data.repeaters, 1);

  document.getElementById("repeatersIssueChart").innerHTML = data.repeaters.map((value, i) => `
    <div class="issue-bar-item">
      <div class="issue-bar" style="height:${(value / maxRepeat) * 150}px;">
        <span>${value}</span>
      </div>
      <label>${gradeNames[i]}</label>
    </div>
  `).join("");

  document.getElementById("repeatersInsight").textContent =
    totalRepeaters
      ? `Majority of repeaters are in Grade 1 (${repeatPercent}%), indicating difficulty in transition from Kindergarten to formal learning.`
      : `No repeaters recorded for this school year.`;

  const maxCapacityValue = Math.max(...data.grades, 25);

  document.getElementById("capacityIssueChart").innerHTML = data.grades.map((value, i) => `
    <div class="capacity-group">
      <div class="capacity-bar enrollment" style="height:${(value / maxCapacityValue) * 160}px;">
        <span>${value}</span>
      </div>
      <div class="capacity-bar capacity" style="height:${(25 / maxCapacityValue) * 160}px;">
        <span>25</span>
      </div>
      <label>${gradeNames[i]}</label>
    </div>
  `).join("");

  const overGrades = data.grades
    .map((v, i) => v > 25 ? gradeNames[i] : null)
    .filter(Boolean);

  document.getElementById("facilityIssueInsight").textContent =
    overGrades.length
      ? `${overGrades.join(", ")} exceed the recommended capacity of 25 students.`
      : `All grade levels are within the recommended class capacity.`;

  drawIssuesTrend();
}

document.addEventListener("DOMContentLoaded", function(){
  const issuesSelect = document.getElementById("issuesYearSelect");
  if(issuesSelect){
    updateIssues();
    issuesSelect.addEventListener("change", updateIssues);
  }
});



























const teachersData = {
  "2021-2022": {
    enrollment: 271,
    total: 10,
    gradeCounts: [1,1,2,2,1,2,1]
  },
  "2022-2023": {
    enrollment: 258,
    total: 11,
    gradeCounts: [1,2,2,2,2,1,1]
  },
  "2023-2024": {
    enrollment: 274,
    total: 10,
    gradeCounts: [1,1,2,2,2,1,1]
  },
  "2024-2025": {
    enrollment: 314,
    total: 11,
    gradeCounts: [1,2,2,2,2,1,1]
  },
  "2025-2026": {
    enrollment: 294,
    total: 11,
    gradeCounts: [1,2,2,2,2,1,1]
  }
};

const teacherList = [
  {
    name:"Mark Denver M. Dantes, PhD",
    position:"School Head",
    status:"Permanent",
    major:"BSEd - Elementary Education",
    assignment:"School Head",
    years:"—"
  },
  {
    name:"John Nicko M. Santiago",
    position:"Admin Officer II",
    status:"Permanent",
    major:"—",
    assignment:"Admin Office",
    years:"—"
  },
  {
    name:"Fe S. Carreon",
    position:"Master Teacher I",
    status:"Permanent",
    major:"BSEd - Elementary Education / MA Industrial Education",
    assignment:"Grade 2",
    years:28
  },
  {
    name:"Mildred C. Sunglao",
    position:"Teacher VI",
    status:"Permanent",
    major:"BSEd - Elementary Education",
    assignment:"Grade 6",
    years:26
  },
  {
    name:"Baby Lyn M. Maglaqui",
    position:"Teacher VI",
    status:"Permanent",
    major:"BSEd - Elementary Education General Education",
    assignment:"Grade 4",
    years:25
  },
  {
    name:"Lorna M. Pineda",
    position:"Teacher VI",
    status:"Permanent",
    major:"BS Industrial Education",
    assignment:"Grade 3",
    years:25
  },
  {
    name:"Liezl V. Larioza",
    position:"Teacher VI",
    status:"Permanent",
    major:"—",
    assignment:"Relieving Teacher",
    years:20
  },
  {
    name:"Gerame S. Roque",
    position:"Teacher VI",
    status:"Permanent",
    major:"BSEd - Elementary Education",
    assignment:"Kindergarten",
    years:16
  },
  {
    name:"Erish Mae S. Magtoto",
    position:"Teacher VI",
    status:"Permanent",
    major:"BSEd - Elementary Education",
    assignment:"Grade 2",
    years:9
  },
  {
    name:"Aileen C. Macapagal",
    position:"Teacher IV",
    status:"Permanent",
    major:"BSEd - Elementary Education Major in Science",
    assignment:"Grade 1",
    years:18
  },
  {
    name:"Conete Joyce S. Jimenez",
    position:"Teacher IV",
    status:"Permanent",
    major:"BSEd - Secondary Education Major in MAPEH",
    assignment:"Grade 5",
    years:7
  },
  {
    name:"Ma. Lordina N. Romero",
    position:"Teacher IV",
    status:"Permanent",
    major:"BSEd - Elementary Education Major in General Education",
    assignment:"Grade 3",
    years:7
  },
  {
    name:"Blessie D. Valenzuela",
    position:"Teacher III",
    status:"Permanent",
    major:"BSEd - Elementary Education",
    assignment:"Grade 1",
    years:12
  }
];

function updateTeachers(){
  const select = document.getElementById("teachersYearSelect");
  if(!select) return;

  const year = select.value;
  const data = teachersData[year];
  const years = Object.keys(teachersData);
  const index = years.indexOf(year);
  const prevYear = years[index - 1];
  const prev = teachersData[prevYear];

  const ratio = (data.enrollment / data.total).toFixed();

  document.getElementById("teacherTotal").textContent = data.total;
  document.getElementById("teacherRatio").textContent = `1:${ratio}`;
  document.getElementById("permanentTeachers").textContent = data.total;
  document.getElementById("contractualTeachers").textContent = 0;
  document.getElementById("majorTeachers").textContent = data.total;

  document.getElementById("teacherYear1").textContent = `SY ${year}`;
  document.getElementById("teacherYear2").textContent = `SY ${year}`;
  document.getElementById("permanentPercent").textContent = `100% of total`;
  document.getElementById("contractualPercent").textContent = `0% of total`;
  document.getElementById("majorPercent").textContent = `100% of total`;

  document.getElementById("teacherChange").textContent = prev
    ? `vs SY ${prevYear}: ${data.total - prev.total >= 0 ? "+" : ""}${data.total - prev.total}`
    : "Base year";

  document.getElementById("teachersGradeTitle").textContent = `TEACHERS BY GRADE LEVEL (SY ${year})`;
  document.getElementById("teachersPositionTitle").textContent = `TEACHERS BY POSITION (SY ${year})`;
  document.getElementById("teachersListTitle").textContent = `TEACHERS LIST (SY ${year})`;

  const gradeNames = ["Kinder","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"];
  const maxCount = Math.max(...data.gradeCounts);

  document.getElementById("teachersGradeChart").innerHTML = data.gradeCounts.map((value, i) => `
    <div class="teacher-bar-item">
      <div class="teacher-bar" style="height:${(value / maxCount) * 170}px;">
        <span>${value}</span>
      </div>
      <label>${gradeNames[i]}</label>
    </div>
  `).join("");

  const positionCounts = {};
  teacherList.forEach(t => {
    if(t.position !== "School Head" && t.position !== "Admin Officer II"){
      positionCounts[t.position] = (positionCounts[t.position] || 0) + 1;
    }
  });

  document.getElementById("teacherPositionLegend").innerHTML = Object.entries(positionCounts).map(([pos, count]) => `
    <p><span class="dot blue-dot"></span> ${pos} - <strong>${count}</strong></p>
  `).join("");

  document.getElementById("teacherDonutTotal").textContent = data.total;

  document.getElementById("teachersTableBody").innerHTML = teacherList.map((t, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${t.name}</td>
      <td>${t.position}</td>
      <td><span class="status-pill">${t.status}</span></td>
      <td>${t.major}</td>
      <td>${t.assignment}</td>
      <td>${t.years}</td>
    </tr>
  `).join("");

  document.getElementById("teacherInsight1").textContent = `Teacher-student ratio for SY ${year} is 1:${ratio}.`;
  document.getElementById("teacherInsight2").textContent = `Teacher VI has the highest number among teaching positions.`;
  document.getElementById("teacherInsight3").textContent = `Most teachers have education-related degrees.`;
  document.getElementById("teacherInsight4").textContent = `Teachers are assigned across Kinder to Grade 6.`;
}

document.addEventListener("DOMContentLoaded", function(){
  const teachersSelect = document.getElementById("teachersYearSelect");
  if(teachersSelect){
    updateTeachers();
    teachersSelect.addEventListener("change", updateTeachers);
  }
});

function updateLastUpdated(){
  const now = new Date();

  const formatted =
    now.toLocaleDateString("en-GB") +
    ", " +
    now.toLocaleTimeString();

  const elements = document.querySelectorAll("#lastUpdated");

  elements.forEach(el => {
    el.textContent = formatted;
  });
}

updateLastUpdated();






















const trendForecastData = {
  enrollment: {
    "2021-2022": 271,
    "2022-2023": 258,
    "2023-2024": 274,
    "2024-2025": 314,
    "2025-2026": 294
  },

  classSize: {
    "2021-2022": 27.1,
    "2022-2023": 23.5,
    "2023-2024": 27.4,
    "2024-2025": 28.5,
    "2025-2026": 26.7
  },

  gradeForecast: {
    "2021-2022": [40,40,31,53,35,33,39],
    "2022-2023": [45,50,38,33,27,33,32],
    "2023-2024": [45,48,46,43,32,29,31],
    "2024-2025": [35,51,43,50,44,32,59],
    "2025-2026": [50,36,50,45,53,43,34]
  },

  classrooms: {
    "2021-2022": 10,
    "2022-2023": 11,
    "2023-2024": 10,
    "2024-2025": 11,
    "2025-2026": 11
  },

  classroomNeed: {
    "2021-2022": 0,
    "2022-2023": 0,
    "2023-2024": 0,
    "2024-2025": 1,
    "2025-2026": 1
  }
};

function drawForecastLineChart(svgId, dataObj, selectedYear, color){
  const svg = document.getElementById(svgId);
  if(!svg) return;

  const years = Object.keys(dataObj);
  const values = years.map(y => dataObj[y]);

  const min = Math.min(...values) - 20;
  const max = Math.max(...values) + 20;

  let points = values.map((v, i) => {
    let x = 70 + i * 130;
    let y = 220 - ((v - min) / (max - min)) * 160;
    return `${x},${y}`;
  }).join(" ");

  let dots = values.map((v, i) => {
    let x = 70 + i * 130;
    let y = 220 - ((v - min) / (max - min)) * 160;
    let isSelected = years[i] === selectedYear;

    return `
      <circle cx="${x}" cy="${y}" r="${isSelected ? 8 : 6}" fill="${isSelected ? "#dc3545" : color}"></circle>
      <text x="${x - 14}" y="${y - 14}" font-size="13" font-weight="bold">${v}</text>
      <text x="${x - 35}" y="250" font-size="11">${years[i]}</text>
    `;
  }).join("");

  svg.innerHTML = `
    <line x1="45" y1="220" x2="650" y2="220" stroke="#cbd5e1" stroke-width="2"/>
    <polyline points="${points}" fill="none" stroke="${color}" stroke-width="4"/>
    ${dots}
  `;
}

function updateForecast(){
  const select = document.getElementById("forecastYearSelect");
  if(!select) return;

  const year = select.value;
  const enrollment = trendForecastData.enrollment[year];
  const classSize = trendForecastData.classSize[year];
  const need = trendForecastData.classroomNeed[year];
  const available = trendForecastData.classrooms[year];

  document.getElementById("forecastEnrollment").textContent = enrollment;
  document.getElementById("forecastClassSize").textContent = classSize;
  document.getElementById("forecastNeed").textContent = need;
  document.getElementById("availableClassrooms").textContent = available;
  document.getElementById("projectedClassrooms").textContent = available + need;

  document.getElementById("forecastEnrollmentNote").textContent = `Selected enrollment for SY ${year}`;
  document.getElementById("forecastClassNote").textContent = `Average class size for SY ${year}`;
  document.getElementById("forecastNeedNote").textContent =
    need === 0 ? "No additional classroom needed" : "Additional classroom monitoring needed";

  document.getElementById("shortageText").textContent =
    need === 0
      ? `No additional classroom needed for SY ${year}.`
      : `${need} additional classroom may be needed for SY ${year}.`;

  document.getElementById("forecastInsight1").textContent =
    `Enrollment trend reached ${enrollment} students for SY ${year}.`;

  document.getElementById("forecastInsight2").textContent =
    `Average class size is ${classSize} students per class for SY ${year}.`;

  document.getElementById("forecastInsight3").textContent =
    need === 0
      ? "No additional classroom is currently needed for the selected year."
      : `${need} additional classroom may be needed for SY ${year}.`;

  const gradeNames = ["Kinder","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"];
  const gradeYears = Object.keys(trendForecastData.gradeForecast);

  document.getElementById("forecastGradeTable").innerHTML = gradeNames.map((grade, i) => `
    <tr>
      <td>${grade}</td>
      ${gradeYears.map(y => `<td>${trendForecastData.gradeForecast[y][i]}</td>`).join("")}
    </tr>
  `).join("") + `
    <tr style="font-weight:bold;background:#f1f5f9;">
      <td>TOTAL</td>
      ${gradeYears.map(y => `<td>${trendForecastData.gradeForecast[y].reduce((a,b)=>a+b,0)}</td>`).join("")}
    </tr>
  `;

  drawForecastLineChart("forecastEnrollmentChart", trendForecastData.enrollment, year, "#2563eb");
  drawForecastLineChart("forecastClassChart", trendForecastData.classSize, year, "#8b5cf6");
}

document.addEventListener("DOMContentLoaded", function(){
  const forecastSelect = document.getElementById("forecastYearSelect");
  if(forecastSelect){
    updateForecast();
    forecastSelect.addEventListener("change", updateForecast);
  }
});







































const recommendationData = [
  {
    recommendation:"Implement Early Literacy Program for Kinder–Grade 1",
    category:"Academic Support",
    priority:"High",
    rationale:"Majority of repeaters are from Grade 1.",
    outcome:"Reduce Grade 1 repeaters and improve foundational skills.",
    timeline:"SY 2025-2026"
  },
  {
    recommendation:"Remedial Program for At-Risk Learners",
    category:"Academic Support",
    priority:"High",
    rationale:"Some learners need targeted support.",
    outcome:"Improve academic performance and reduce retention.",
    timeline:"SY 2025-2026"
  },
  /*
  {
    recommendation:"Strengthen Reading and Math Interventions",
    category:"Academic Support",
    priority:"Medium",
    rationale:"Key learning gaps in reading and math.",
    outcome:"Better mastery of essential skills.",
    timeline:"SY 2025-2026"
  }, */
  /*
  {
    recommendation:"Regular Progress Monitoring",
    category:"Academic Support",
    priority:"Medium",
    rationale:"Need to track and respond to learning gaps.",
    outcome:"Timely support for struggling learners.",
    timeline:"SY 2025-2026"
  },*/
  
  {
    recommendation:"Add 1–2 Classrooms for Congested Grade Levels",
    category:"Facility Improvement",
    priority:"High",
    rationale:"Classroom sizes are small, causing congestion.",
    outcome:"Reduce congestion and improve learning environment.",
    timeline:"SY 2026-2027"
  },
  {
    recommendation:"Optimize Classroom Utilization",
    category:"Facility Improvement",
    priority:"Medium",
    rationale:"Maximize available classroom resources.",
    outcome:"Efficient use of existing classrooms.",
    timeline:"SY 2025-2026"
  },
  {
    recommendation:"Maintain and Upgrade Learning Facilities",
    category:"Facility Improvement",
    priority:"Medium",
    rationale:"Ensure safe and conducive learning spaces.",
    outcome:"Better comfort and sustainability.",
    timeline:"SY 2025-2026"
  },
  /*
  {
    recommendation:"Improve Ventilation and Classroom Comfort",
    category:"Facility Improvement",
    priority:"Medium",
    rationale:"Learning spaces must support student comfort.",
    outcome:"Improved classroom environment.",
    timeline:"SY 2025-2026"
  },*/
  {
    recommendation:"Provide Training on Differentiated Instruction",
    category:"Teacher Development",
    priority:"Medium",
    rationale:"Equip teachers with strategies for diverse learners.",
    outcome:"Improved teaching quality and learner engagement.",
    timeline:"SY 2026-2027"
  },
  /*
  {
    recommendation:"Strengthen Assessment and Data Use for Instruction",
    category:"Teacher Development",
    priority:"Medium",
    rationale:"Assessment data helps identify learning needs.",
    outcome:"Better instructional planning.",
    timeline:"SY 2025-2026"
  },*/
  {
    recommendation:"Strengthen Parent Engagement Programs",
    category:"Community & Partnership",
    priority:"Low",
    rationale:"Parental support affects learner success.",
    outcome:"Stronger home-school partnership.",
    timeline:"SY 2025-2026"
  },
  {
    recommendation:"Collaborate with Stakeholders for Additional Support",
    category:"Community & Partnership",
    priority:"Low",
    rationale:"Additional resources can support learners.",
    outcome:"More programs and resources for student support.",
    timeline:"SY 2026-2027"
  }
];

function updateRecommendation(){
  const body = document.getElementById("recommendationTableBody");
  const select = document.getElementById("recommendationYearSelect");

  if(!body || !select) return;

  const year = select.value;

  document.getElementById("targetCompletion").textContent =
    year === "2025-2026" ? "SY 2026-2027" : `SY ${year}`;

  body.innerHTML = recommendationData.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${item.recommendation}</td>
      <td>${item.category}</td>
      <td><span class="priority-pill ${item.priority.toLowerCase()}">${item.priority}</span></td>
      <td>${item.rationale}</td>
      <td>${item.outcome}</td>
      <td>${item.timeline}</td>
    </tr>
  `).join("");
}

document.addEventListener("DOMContentLoaded", function(){
  const recommendationSelect = document.getElementById("recommendationYearSelect");

  if(recommendationSelect){
    updateRecommendation();
    recommendationSelect.addEventListener("change", updateRecommendation);
  }
});











const reportsData = {
  "2021-2022": {
    enrollment:271, male:143, female:128, repeaters:5,
    grades:[40,40,31,53,35,33,39]
  },
  "2022-2023": {
    enrollment:258, male:136, female:122, repeaters:2,
    grades:[45,50,38,33,27,33,32]
  },
  "2023-2024": {
    enrollment:274, male:141, female:133, repeaters:4,
    grades:[45,48,46,43,32,29,31]
  },
  "2024-2025": {
    enrollment:314, male:158, female:156, repeaters:3,
    grades:[35,51,43,50,44,32,59]
  },
  "2025-2026": {
    enrollment:294, male:152, female:142, repeaters:4,
    grades:[50,36,50,45,53,43,34]
  }
};

function drawReportTrend(){
  const svg = document.getElementById("reportTrendChart");
  if(!svg) return;

  const years = Object.keys(reportsData);
  const values = years.map(y => reportsData[y].enrollment);

  const min = 200;
  const max = 340;

  let points = values.map((v, i) => {
    let x = 70 + i * 130;
    let y = 210 - ((v - min) / (max - min)) * 160;
    return `${x},${y}`;
  }).join(" ");

  let dots = values.map((v, i) => {
    let x = 70 + i * 130;
    let y = 210 - ((v - min) / (max - min)) * 160;

    return `
      <circle cx="${x}" cy="${y}" r="6" fill="#2563eb"></circle>
      <text x="${x - 12}" y="${y - 15}" font-size="13" font-weight="bold">${v}</text>
      <text x="${x - 35}" y="240" font-size="11">${years[i]}</text>
    `;
  }).join("");

  svg.innerHTML = `
    <line x1="45" y1="210" x2="620" y2="210" stroke="#cbd5e1" stroke-width="2"/>
    <polyline points="${points}" fill="none" stroke="#2563eb" stroke-width="4"/>
    ${dots}
  `;
}

function updateReports(){
  const select = document.getElementById("reportsYearSelect");
  if(!select) return;

  const year = select.value;
  const data = reportsData[year];
  const gradeNames = ["Kindergarten","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"];

  document.getElementById("reportPreviewTitle").textContent = `REPORT PREVIEW — SY ${year}`;
  document.getElementById("repTotalEnrollment").textContent = data.enrollment;
  document.getElementById("repMale").textContent = data.male;
  document.getElementById("repFemale").textContent = data.female;
  document.getElementById("repRepeaters").textContent = data.repeaters;

  document.getElementById("reportGradeTable").innerHTML = data.grades.map((value, i) => `
    <tr>
      <td>${gradeNames[i]}</td>
      <td>${value}</td>
    </tr>
  `).join("");

  drawReportTrend();
}

function generateReportPreview(){
  alert("Report preview generated successfully.");
}

document.addEventListener("DOMContentLoaded", function(){
  const reportsSelect = document.getElementById("reportsYearSelect");

  if(reportsSelect){
    updateReports();
    reportsSelect.addEventListener("change", updateReports);
  }
});










function enableChartTooltips(){

  const tooltip = document.createElement("div");
  tooltip.className = "chart-tooltip";
  document.body.appendChild(tooltip);

  const charts = document.querySelectorAll(
    ".bar-fill, .bar, .ov-bar, .issue-bar, .capacity-bar, .teacher-bar, .teacher-donut, .facility-donut, .report-donut, .donut"
  );

  charts.forEach(chart => {

    chart.addEventListener("mousemove", function(e){

      const parent = this.parentElement;

      const value =
        this.dataset.value ||
        this.querySelector("span")?.textContent ||
        parent.querySelector(".value")?.textContent ||
        this.textContent.trim() ||
        "No data";

      const label =
        this.dataset.label ||
        parent.querySelector("label")?.textContent ||
        "Data";

      const bg = window.getComputedStyle(this).background;

      tooltip.innerHTML = `
        <div style="
          display:flex;
          align-items:center;
          gap:10px;
        ">

          <div style="
            width:16px;
            height:16px;
            border-radius:50%;
            background:${bg};
            border:2px solid white;
            flex-shrink:0;
          "></div>

          <span>${label}: ${value}</span>

        </div>
      `;

      tooltip.style.left = e.pageX + 15 + "px";
      tooltip.style.top = e.pageY - 35 + "px";

      tooltip.style.opacity = 1;
      tooltip.classList.add("show");

    });

    chart.addEventListener("mouseleave", function(){

      tooltip.style.opacity = 0;
      tooltip.classList.remove("show");

    });

  });

}

document.addEventListener("DOMContentLoaded", enableChartTooltips);







document.addEventListener("DOMContentLoaded", function(){

  /* ================= ELEMENTS ================= */

  const saveBtn = document.querySelector(".save-btn");

  const backupBtn = document.querySelector(".primary-btn");

  const restoreBtn = document.querySelector(
    ".backup-actions .secondary-btn"
  );

  const logoInput = document.getElementById("schoolLogoInput");
  const logoPreview = document.getElementById("schoolLogoPreview");
  const changeLogoBtn = document.getElementById("changeLogoBtn");

  const schoolName = document.getElementById("schoolNameInput");
  const schoolId = document.getElementById("schoolIdInput");
  const schoolAddress = document.getElementById("schoolAddressInput");
  const principal = document.getElementById("principalInput");

  const themeSelect = document.getElementById("themeSelect");
  const languageSelect = document.getElementById("languageSelect");
  const rowsSelect = document.getElementById("rowsSelect");

  const timeoutSelect = document.getElementById("timeoutSelect");
  const loginLimitSelect = document.getElementById("loginLimitSelect");


  /* ================= LOAD SAVED DATA ================= */

  if(localStorage.getItem("schoolName")){
    schoolName.value = localStorage.getItem("schoolName");
  }

  if(localStorage.getItem("schoolId")){
    schoolId.value = localStorage.getItem("schoolId");
  }

  if(localStorage.getItem("schoolAddress")){
    schoolAddress.value = localStorage.getItem("schoolAddress");
  }

  if(localStorage.getItem("principal")){
    principal.value = localStorage.getItem("principal");
  }

  if(localStorage.getItem("theme")){
    themeSelect.value = localStorage.getItem("theme");
  }

  if(localStorage.getItem("language")){
    languageSelect.value = localStorage.getItem("language");
  }

  if(localStorage.getItem("rows")){
    rowsSelect.value = localStorage.getItem("rows");
  }

  if(localStorage.getItem("timeout")){
    timeoutSelect.value = localStorage.getItem("timeout");
  }

  if(localStorage.getItem("loginLimit")){
    loginLimitSelect.value = localStorage.getItem("loginLimit");
  }

  if(localStorage.getItem("schoolLogo")){
    logoPreview.src = localStorage.getItem("schoolLogo");
  }


  /* ================= SAVE SETTINGS ================= */

  if(saveBtn){

    saveBtn.addEventListener("click", function(){

      localStorage.setItem("schoolName", schoolName.value);

      document.getElementById("sidebarSchoolName").innerHTML = schoolName.value;

      localStorage.setItem("schoolId", schoolId.value);

      localStorage.setItem(
        "schoolAddress",
        schoolAddress.value
      );

      localStorage.setItem(
        "principal",
        principal.value
      );

      localStorage.setItem(
        "theme",
        themeSelect.value
      );

      localStorage.setItem(
        "language",
        languageSelect.value
      );

      localStorage.setItem(
        "rows",
        rowsSelect.value
      );

      localStorage.setItem(
        "timeout",
        timeoutSelect.value
      );

      localStorage.setItem(
        "loginLimit",
        loginLimitSelect.value
      );

      alert("Settings saved successfully.");

    });

  }


  /* ================= CHANGE LOGO ================= */

  if(changeLogoBtn){

    changeLogoBtn.addEventListener("click", function(){
      logoInput.click();
    });

  }

  if(logoInput){

    logoInput.addEventListener("change", function(){

      const file = this.files[0];

      if(file){

        const reader = new FileReader();

        reader.onload = function(e){

          logoPreview.src = e.target.result;

          localStorage.setItem(
            "schoolLogo",
            e.target.result
          );

        };

        reader.readAsDataURL(file);

      }

    });

  }


  /* ================= THEME ================= */

function applyTheme(theme){

  if(theme === "Dark"){

    document.body.classList.add("dark-mode");

  }

  else{

    document.body.classList.remove("dark-mode");

  }

}

applyTheme(themeSelect.value);

themeSelect.addEventListener("change", function(){

  applyTheme(this.value);

});


  /* ================= BACKUP ================= */

  if(backupBtn){

    backupBtn.addEventListener("click", function(){

      const settings = {...localStorage};

      const blob = new Blob(
        [JSON.stringify(settings,null,2)],
        {type:"application/json"}
      );

      const a = document.createElement("a");

      a.href = URL.createObjectURL(blob);

      a.download = "school-settings-backup.json";

      a.click();

      alert("Backup completed successfully.");

    });

  }


  /* ================= RESTORE ================= */

  if(restoreBtn){

    restoreBtn.addEventListener("click", function(){

      location.reload();

    });

  }

});





function logout(){
  if(confirm("Are you sure you want to logout?")){
    window.location.href = "index.html";
  }
}


function toggleSidebar(){

  document.querySelector(".sidebar").classList.toggle("collapsed");

}





// ================= DEFAULT PAGE =================

window.onload = function(){
openPage("dashboardPage");
};