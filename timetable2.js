// Admin Portal Button Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Make only the correct Generate Full Report button functional
    const fullReportModal = document.getElementById('fullReportModal');
    const closeFullReportModal = document.getElementById('closeFullReportModal');
    // Find the button inside the Faculty Workload Report card
    const facultyReportCard = Array.from(document.querySelectorAll('.bg-white.rounded-xl.card-shadow')).find(card => {
        return card.querySelector('h3') && card.querySelector('h3').textContent.includes('Faculty Workload Report');
    });
    if (facultyReportCard && fullReportModal && closeFullReportModal) {
        const generateFullReportBtn = Array.from(facultyReportCard.querySelectorAll('button')).find(btn => btn.textContent.includes('Generate Full Report'));
        if (generateFullReportBtn) {
            generateFullReportBtn.addEventListener('click', function() {
                fullReportModal.style.display = 'flex';
                fullReportModal.style.alignItems = 'center';
                fullReportModal.style.justifyContent = 'center';
            });
        }
        closeFullReportModal.addEventListener('click', function() {
            fullReportModal.style.display = 'none';
        });
    }
    // Student list for admin panel
    let adminStudents = [
        {
            name: 'Priya Sharma',
            id: 'STU2025A01',
            batch: 'CSE-A',
            attendance: '96%',
            performance: '8.7 GPA',
            email: 'priya.sharma@college.edu',
            phone: '9876543210',
            subjects: ['Maths', 'Physics', 'AI'],
            fees: 'Paid',
            status: 'Active',
            lastLogin: '2025-09-25',
            remarks: 'Excellent performance',
            demoReport: 'Priya has consistently scored above 90% in all subjects. She is a class representative and participates in AI club activities.'
        },
        // ...other demo students...
    ];

    // Add Student functionality
    const addStudentBtn = document.getElementById('addStudentBtn');
    const addStudentNameInput = document.getElementById('addStudentNameInput');
    if (addStudentBtn && addStudentNameInput) {
        addStudentBtn.onclick = function() {
            const name = addStudentNameInput.value.trim();
            if (!name) {
                alert('Please enter a student name.');
                return;
            }
            // Create a new student object with default/demo details
            const newId = 'STU' + Math.floor(Math.random()*100000);
            const newStudent = {
                name,
                id: newId,
                batch: 'New Batch',
                attendance: '0%',
                performance: 'N/A',
                email: name.replace(/\s+/g, '.').toLowerCase() + '@college.edu',
                phone: '',
                subjects: [],
                fees: 'Unpaid',
                status: 'Active',
                lastLogin: '',
                remarks: '',
                demoReport: 'New student added.'
            };
            adminStudents.push(newStudent);
            addStudentNameInput.value = '';
            renderAdminStudentList();
        };
    }

    // Render student list in admin panel (shows all features for selected student)
    function renderAdminStudentList() {
        const studentSearchResults = document.getElementById('studentSearchResults');
        if (!studentSearchResults) return;
        studentSearchResults.innerHTML = adminStudents.map(s => `
            <div class="bg-blue-50 rounded-lg p-4 mb-4 shadow">
                <div class="flex justify-between items-center">
                    <div class="font-bold text-blue-800 text-lg">${s.name}</div>
                    <span class="text-xs bg-blue-200 px-2 py-1 rounded">${s.id}</span>
                </div>
                <div class="grid grid-cols-2 gap-2 mt-2">
                    <div class="text-sm text-gray-700">Batch: <span class="font-semibold">${s.batch}</span></div>
                    <div class="text-sm text-green-700">Attendance: <span class="font-semibold">${s.attendance}</span></div>
                    <div class="text-sm text-purple-700">Performance: <span class="font-semibold">${s.performance}</span></div>
                    <div class="text-sm text-gray-700">Status: <span class="font-semibold">${s.status}</span></div>
                    <div class="text-sm text-gray-700">Email: <span class="font-semibold">${s.email}</span></div>
                    <div class="text-sm text-gray-700">Phone: <span class="font-semibold">${s.phone}</span></div>
                    <div class="text-sm text-gray-700">Last Login: <span class="font-semibold">${s.lastLogin}</span></div>
                    <div class="text-sm text-gray-700">Fees: <span class="font-semibold">${s.fees}</span></div>
                </div>
                <div class="mt-2 text-sm text-gray-700">Subjects: <span class="font-semibold">${s.subjects.join(', ')}</span></div>
                <div class="mt-1 text-sm text-gray-700">Remarks: <span class="font-semibold">${s.remarks}</span></div>
                <div class="mt-1 text-sm text-blue-900 font-semibold">Demo Report: <span class="font-normal">${s.demoReport}</span></div>
                <div class="flex flex-wrap gap-2 mt-3">
                    <button class="bg-blue-600 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-700 transition" onclick="alert('Demo Report for ${s.name}: ${s.demoReport}')">View Report</button>
                    <button class="bg-green-600 text-white px-3 py-1 rounded-lg shadow hover:bg-green-700 transition" onclick="alert('Attendance for ${s.name}: ${s.attendance}')">Attendance</button>
                    <button class="bg-purple-600 text-white px-3 py-1 rounded-lg shadow hover:bg-purple-700 transition" onclick="alert('Performance for ${s.name}: ${s.performance}')">Performance</button>
                    <button class="bg-yellow-600 text-white px-3 py-1 rounded-lg shadow hover:bg-yellow-700 transition" onclick="alert('Subjects for ${s.name}: ${s.subjects.join(', ')}')">Subjects</button>
                    <button class="bg-red-600 text-white px-3 py-1 rounded-lg shadow hover:bg-red-700 transition" onclick="alert('Fees status for ${s.name}: ${s.fees}')">Fees</button>
                    <button class="bg-gray-600 text-white px-3 py-1 rounded-lg shadow hover:bg-gray-700 transition" onclick="alert('Status for ${s.name}: ${s.status}')">Status</button>
                </div>
            </div>
        `).join('');
    }

    // Initial render for admin panel
    renderAdminStudentList();
    // Student Search Feature (Admin Panel)
    const studentSearchBtn = document.getElementById('studentSearchBtn');
    const studentSearchInput = document.getElementById('studentSearchInput');
    const studentSearchResults = document.getElementById('studentSearchResults');
    // Only use the enhanced demo data logic below for student search
        if (studentSearchBtn && studentSearchInput && studentSearchResults) {
            studentSearchBtn.onclick = function() {
                const query = studentSearchInput.value.trim().toLowerCase();
                // Demo data with more fields
                const students = [
                    {
                        name: 'Priya Sharma',
                        id: 'STU2025A01',
                        batch: 'CSE-A',
                        attendance: '96%',
                        performance: '8.7 GPA',
                        email: 'priya.sharma@college.edu',
                        phone: '9876543210',
                        subjects: ['Maths', 'Physics', 'AI'],
                        fees: 'Paid',
                        status: 'Active',
                        lastLogin: '2025-09-25',
                        remarks: 'Excellent performance',
                        demoReport: 'Priya has consistently scored above 90% in all subjects. She is a class representative and participates in AI club activities.'
                    },
                    {
                        name: 'Rahul Verma',
                        id: 'STU2025B02',
                        batch: 'ECE-B',
                        attendance: '89%',
                        performance: '7.9 GPA',
                        email: 'rahul.verma@college.edu',
                        phone: '9123456780',
                        subjects: ['Electronics', 'Maths', 'Robotics'],
                        fees: 'Due',
                        status: 'Active',
                        lastLogin: '2025-09-26',
                        remarks: 'Needs improvement in Robotics',
                        demoReport: 'Rahul is punctual and regular. He needs to focus more on Robotics. He is a member of the Electronics club.'
                    },
                    {
                        name: 'Amit Singh',
                        id: 'STU2025C03',
                        batch: 'ME-C',
                        attendance: '92%',
                        performance: '8.2 GPA',
                        email: 'amit.singh@college.edu',
                        phone: '9988776655',
                        subjects: ['Mechanics', 'Thermodynamics', 'CAD'],
                        fees: 'Paid',
                        status: 'Inactive',
                        lastLogin: '2025-09-20',
                        remarks: 'On leave',
                        demoReport: 'Amit is currently on leave due to medical reasons. He is a top performer in CAD.'
                    },
                    {
                        name: 'Sneha Patel',
                        id: 'STU2025D04',
                        batch: 'IT-D',
                        attendance: '98%',
                        performance: '9.1 GPA',
                        email: 'sneha.patel@college.edu',
                        phone: '9871234567',
                        subjects: ['Web Dev', 'DBMS', 'Cloud'],
                        fees: 'Paid',
                        status: 'Active',
                        lastLogin: '2025-09-27',
                        remarks: 'Outstanding in Web Development',
                        demoReport: 'Sneha leads the Web Development club and has won several hackathons.'
                    },
                    {
                        name: 'Vikram Joshi',
                        id: 'STU2025E05',
                        batch: 'CIVIL-E',
                        attendance: '85%',
                        performance: '7.5 GPA',
                        email: 'vikram.joshi@college.edu',
                        phone: '9812345678',
                        subjects: ['Structures', 'Surveying', 'Geotech'],
                        fees: 'Due',
                        status: 'Active',
                        lastLogin: '2025-09-24',
                        remarks: 'Needs to improve attendance',
                        demoReport: 'Vikram is a member of the Civil Engineering Society and volunteers for campus events.'
                    }
                ];
                const results = students.filter(s =>
                    s.name.toLowerCase().includes(query) ||
                    s.id.toLowerCase().includes(query) ||
                    s.batch.toLowerCase().includes(query)
                );
                if (results.length > 0) {
                    studentSearchResults.innerHTML = results.map(s => `
                        <div class="bg-blue-50 rounded-lg p-4 mb-4 shadow">
                            <div class="flex justify-between items-center">
                                <div class="font-bold text-blue-800 text-lg">${s.name}</div>
                                <span class="text-xs bg-blue-200 px-2 py-1 rounded">${s.id}</span>
                            </div>
                            <div class="grid grid-cols-2 gap-2 mt-2">
                                <div class="text-sm text-gray-700">Batch: <span class="font-semibold">${s.batch}</span></div>
                                <div class="text-sm text-green-700">Attendance: <span class="font-semibold">${s.attendance}</span></div>
                                <div class="text-sm text-purple-700">Performance: <span class="font-semibold">${s.performance}</span></div>
                                <div class="text-sm text-gray-700">Status: <span class="font-semibold">${s.status}</span></div>
                                <div class="text-sm text-gray-700">Email: <span class="font-semibold">${s.email}</span></div>
                                <div class="text-sm text-gray-700">Phone: <span class="font-semibold">${s.phone}</span></div>
                                <div class="text-sm text-gray-700">Last Login: <span class="font-semibold">${s.lastLogin}</span></div>
                                <div class="text-sm text-gray-700">Fees: <span class="font-semibold">${s.fees}</span></div>
                            </div>
                            <div class="mt-2 text-sm text-gray-700">Subjects: <span class="font-semibold">${s.subjects.join(', ')}</span></div>
                            <div class="mt-1 text-sm text-gray-700">Remarks: <span class="font-semibold">${s.remarks}</span></div>
                            <div class="mt-1 text-sm text-blue-900 font-semibold">Demo Report: <span class="font-normal">${s.demoReport}</span></div>
                            <div class="flex flex-wrap gap-2 mt-3">
                                <button class="bg-blue-600 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-700 transition" onclick="alert('Demo Report for ${s.name}: ${s.demoReport}')">View Report</button>
                                <button class="bg-green-600 text-white px-3 py-1 rounded-lg shadow hover:bg-green-700 transition" onclick="alert('Attendance for ${s.name}: ${s.attendance}')">Attendance</button>
                                <button class="bg-purple-600 text-white px-3 py-1 rounded-lg shadow hover:bg-purple-700 transition" onclick="alert('Performance for ${s.name}: ${s.performance}')">Performance</button>
                                <button class="bg-yellow-600 text-white px-3 py-1 rounded-lg shadow hover:bg-yellow-700 transition" onclick="alert('Subjects for ${s.name}: ${s.subjects.join(', ')}')">Subjects</button>
                                <button class="bg-red-600 text-white px-3 py-1 rounded-lg shadow hover:bg-red-700 transition" onclick="alert('Fees status for ${s.name}: ${s.fees}')">Fees</button>
                                <button class="bg-gray-600 text-white px-3 py-1 rounded-lg shadow hover:bg-gray-700 transition" onclick="alert('Status for ${s.name}: ${s.status}')">Status</button>
                            </div>
                        </div>
                    `).join('');
                } else {
                    studentSearchResults.innerHTML = '<div class="text-red-600 font-bold">No students found.</div>';
                }
            };
        }

    // Make all student control panel buttons show demo alerts
    document.querySelectorAll('.student-card button').forEach(btn => {
        if (!btn.onclick) {
            btn.onclick = function() {
                alert('Demo: ' + btn.textContent + ' feature activated!');
            };
        }
    });
    // Faculty Portal Feature Interactivity
    // Smart Timetable Management
    document.querySelectorAll('#facultyViewSection .student-card .bg-blue-600').forEach(btn => {
        if (btn.textContent.includes('Request Swap') || btn.textContent.includes('Reschedule')) {
            btn.onclick = function() {
                alert('Swap/Reschedule request sent to admin for approval!');
            };
        }
        if (btn.textContent.includes('Join Meeting')) {
            btn.onclick = function() {
                const link = btn.previousElementSibling.value.trim();
                if (link) {
                    window.open(link, '_blank');
                } else {
                    alert('Please enter a meeting link.');
                }
            };
        }
        if (btn.textContent.includes('Record Session')) {
            btn.onclick = function() {
                alert('Recording started! (Demo)');
            };
        }
    });

    // Attendance
    document.querySelectorAll('#facultyViewSection .student-card .bg-green-600').forEach(btn => {
        if (btn.textContent.includes('Mark Attendance')) {
            btn.onclick = function() {
                alert('Attendance marked via QR/Face recognition!');
            };
        }
        if (btn.textContent.includes('Share Resource')) {
            btn.onclick = function() {
                alert('Resource shared with faculty group!');
            };
        }
    });

    // Generate Attendance Report
    document.querySelectorAll('#facultyViewSection .student-card .bg-purple-600').forEach(btn => {
        if (btn.textContent.includes('Generate Report')) {
            btn.onclick = function() {
                alert('Attendance report generated!');
            };
        }
        if (btn.textContent.includes('Create Assignment')) {
            btn.onclick = function() {
                alert('Assignment creation form opened!');
            };
        }
        if (btn.textContent.includes('Manage Joint Class')) {
            btn.onclick = function() {
                alert('Joint class management panel opened!');
            };
        }
    });

    // Upload Resource
    document.querySelectorAll('#facultyViewSection .student-card .bg-yellow-600').forEach(btn => {
        btn.onclick = function() {
            alert('Resource uploaded!');
        };
    });

    // Auto-Grade Test
    document.querySelectorAll('#facultyViewSection .student-card .bg-green-600').forEach(btn => {
        if (btn.textContent.includes('Auto-Grade Test')) {
            btn.onclick = function() {
                alert('Auto-grading completed!');
            };
        }
    });

    // Hybrid toggle
    document.querySelectorAll('#facultyViewSection .student-card input[type="checkbox"]').forEach(chk => {
        chk.onchange = function() {
            if (chk.checked) {
                alert('Hybrid mode enabled!');
            } else {
                alert('Hybrid mode disabled.');
            }
        };
    });
    // Add Student Batch
    document.querySelectorAll('button.bg-orange-600').forEach(btn => {
        if (btn.textContent.includes('+ Add Batch')) {
            btn.addEventListener('click', () => {
                const inputs = btn.closest('.space-y-4').querySelectorAll('input, select');
                const name = inputs[0].value.trim();
                const count = inputs[1].value.trim();
                const type = inputs[2].value;
                if (name && count && type) {
                    let batchList = btn.closest('.bg-white').querySelector('#batchList');
                    if (!batchList) {
                        batchList = document.createElement('div');
                        batchList.id = 'batchList';
                        batchList.className = 'space-y-2 mt-4';
                        btn.closest('.bg-white').appendChild(batchList);
                    }
                    const div = document.createElement('div');
                    div.className = 'flex justify-between items-center p-2 bg-gray-50 rounded text-sm';
                    div.innerHTML = `<span><strong>${name}</strong> (${count} students) - ${type}</span> <button class="text-red-600 hover:text-red-800">Remove</button>`;
                    div.querySelector('button').onclick = () => div.remove();
                    batchList.appendChild(div);
                    inputs[0].value = '';
                    inputs[1].value = '';
                    inputs[2].selectedIndex = 0;
                } else {
                    alert('Please fill all batch fields.');
                }
            });
        }
    });

    // Add Subject
    document.querySelectorAll('button.bg-purple-600').forEach(btn => {
        if (btn.textContent.includes('+ Add Subject')) {
            btn.addEventListener('click', () => {
                const inputs = btn.closest('.space-y-4').querySelectorAll('input, select');
                const name = inputs[0].value.trim();
                const hours = inputs[1].value.trim();
                const type = inputs[2].value;
                if (name && hours && type) {
                    let subjectList = btn.closest('.bg-white').querySelector('#subjectList');
                    if (!subjectList) {
                        subjectList = document.createElement('div');
                        subjectList.id = 'subjectList';
                        subjectList.className = 'space-y-2 mt-4';
                        btn.closest('.bg-white').appendChild(subjectList);
                    }
                    const div = document.createElement('div');
                    div.className = 'flex justify-between items-center p-2 bg-gray-50 rounded text-sm';
                    div.innerHTML = `<span><strong>${name}</strong> (${hours} hrs/week) - ${type}</span> <button class="text-red-600 hover:text-red-800">Remove</button>`;
                    div.querySelector('button').onclick = () => div.remove();
                    subjectList.appendChild(div);
                    inputs[0].value = '';
                    inputs[1].value = '';
                    inputs[2].selectedIndex = 0;
                } else {
                    alert('Please fill all subject fields.');
                }
            });
        }
    });

    // Export Student Batches (demo: export batchList as CSV)
    document.querySelectorAll('.bg-orange-600').forEach(btn => {
        if (btn.textContent.includes('Export')) {
            btn.addEventListener('click', () => {
                exportListAsCSV('batchList', 'StudentBatches.csv');
            });
        }
    });
    // Add Classroom
    document.querySelectorAll('button.bg-blue-600').forEach(btn => {
        if (btn.textContent.includes('+ Add Classroom')) {
            btn.addEventListener('click', () => {
                const inputs = btn.closest('.space-y-4').querySelectorAll('input, select');
                const name = inputs[0].value.trim();
                const capacity = inputs[1].value.trim();
                const type = inputs[2].value;
                if (name && capacity && type) {
                    const classroomList = btn.closest('.bg-white').querySelector('#classroomList');
                    const div = document.createElement('div');
                    div.className = 'flex justify-between items-center p-2 bg-gray-50 rounded text-sm';
                    div.innerHTML = `<span><strong>${name}</strong> (${capacity}) - ${type}</span> <button class="text-red-600 hover:text-red-800">Remove</button>`;
                    div.querySelector('button').onclick = () => div.remove();
                    classroomList.appendChild(div);
                    inputs[0].value = '';
                    inputs[1].value = '';
                    inputs[2].selectedIndex = 0;
                } else {
                    alert('Please fill all classroom fields.');
                }
            });
        }
    });

    // Add Faculty
    document.querySelectorAll('button.bg-green-600').forEach(btn => {
        if (btn.textContent.includes('+ Add Faculty')) {
            btn.addEventListener('click', () => {
                const inputs = btn.closest('.space-y-4').querySelectorAll('input, select');
                const name = inputs[0].value.trim();
                const dept = inputs[1].value.trim();
                const subjects = inputs[2].value.trim();
                const hours = inputs[3].value.trim();
                if (name && dept && subjects && hours) {
                    const facultyList = btn.closest('.bg-white').querySelector('#facultyList');
                    const div = document.createElement('div');
                    div.className = 'flex justify-between items-center p-2 bg-gray-50 rounded text-sm';
                    div.innerHTML = `<span><strong>${name}</strong> (${dept}) - ${hours}h/week</span> <button class="text-red-600 hover:text-red-800">Remove</button>`;
                    div.querySelector('button').onclick = () => div.remove();
                    facultyList.appendChild(div);
                    inputs[0].value = '';
                    inputs[1].value = '';
                    inputs[2].value = '';
                    inputs[3].value = '';
                } else {
                    alert('Please fill all faculty fields.');
                }
            });
        }
    });

    // Export PDF/Excel/iCal (demo: export classroom/faculty as CSV)
    document.querySelectorAll('.bg-red-600, .bg-green-600, .bg-blue-600').forEach(btn => {
        if (btn.textContent.includes('Export as PDF')) {
            btn.addEventListener('click', () => {
                exportListAsCSV('classroomList', 'Classrooms.pdf');
            });
        }
        if (btn.textContent.includes('Export as Excel')) {
            btn.addEventListener('click', () => {
                exportListAsCSV('facultyList', 'Faculty.xlsx');
            });
        }
        if (btn.textContent.includes('Export as iCal')) {
            btn.addEventListener('click', () => {
                exportListAsCSV('classroomList', 'Timetable.ics');
            });
        }
    });

    // Detailed Analytics (demo: show modal with summary)
    document.querySelectorAll('button.bg-green-600').forEach(btn => {
        if (btn.textContent.includes('Detailed Analytics')) {
            btn.addEventListener('click', () => {
                const classroomList = document.getElementById('classroomList');
                const facultyList = document.getElementById('facultyList');
                const classroomCount = classroomList ? classroomList.children.length : 0;
                const facultyCount = facultyList ? facultyList.children.length : 0;
                alert(`Analytics Summary:\nClassrooms: ${classroomCount}\nFaculty: ${facultyCount}`);
            });
        }
    });

    // Helper: Export list as CSV
    function exportListAsCSV(listId, filename) {
        const list = document.getElementById(listId);
        if (!list) return alert('No data to export!');
        let csv = '';
        Array.from(list.children).forEach(div => {
            const text = div.querySelector('span')?.textContent;
            if (text) csv += text + '\n';
        });
        const blob = new Blob([csv], {type: 'text/csv'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});
// timetable2.js - extracted JavaScript from timetable2.html
// Add all your JS logic here. Example:
function logout() {
    // Logout logic: Hide main app, show login screen, reset UI
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('userInfo').textContent = '';
    // Hide all tab sections
    ['adminTabs','departmentTabs','facultyTabs','studentTabs'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    // Hide all content sections
    [
        'dashboardSection','dataInputSection','scheduleSection','editorSection','reportsSection',
        'approvalSection','deptViewSection','deptReportsSection','facultyViewSection','availabilitySection',
        'facultyReportsSection','studentContent'
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    // Optionally clear login form
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('userRole').selectedIndex = 0;
}
function switchTab(tabId) {
    // Tab switching logic for all roles
    // Hide all tab sections
    const sections = [
        'dashboardSection',
        'dataInputSection',
        'scheduleSection',
        'editorSection',
        'reportsSection',
        'approvalSection',
        'deptViewSection',
        'deptReportsSection',
        'facultyViewSection',
        'availabilitySection',
        'facultyReportsSection',
        'studentContent'
    ];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });

    // Show the selected section
    switch(tabId) {
        case 'dashboardTab':
            showSection('dashboardSection'); break;
        case 'dataInputTab':
            showSection('dataInputSection'); break;
        case 'scheduleTab':
            showSection('scheduleSection'); break;
        case 'editorTab':
            showSection('editorSection'); break;
        case 'reportsTab':
            showSection('reportsSection'); break;
        case 'approvalTab':
            showSection('approvalSection'); break;
        case 'deptViewTab':
            showSection('deptViewSection'); break;
        case 'deptReportsTab':
            showSection('deptReportsSection'); break;
        case 'facultyViewTab':
            showSection('facultyViewSection'); break;
        case 'availabilityTab':
            showSection('availabilitySection'); break;
        case 'facultyReportsTab':
            showSection('facultyReportsSection'); break;
        case 'studentScheduleTab':
        case 'studentBatchTab':
        case 'studentReportTab':
            showSection('studentContent'); break;
        default:
            showSection('dashboardSection');
    }
}

function showSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) el.classList.remove('hidden');
}

// Add event listeners for all tab and quick action buttons after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Tab buttons for admin
    ['dashboardTab','dataInputTab','scheduleTab','editorTab','reportsTab'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', () => switchTab(id));
    });
    // Tab buttons for department
    ['approvalTab','deptViewTab','deptReportsTab'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', () => switchTab(id));
    });
    // Tab buttons for faculty
    ['facultyViewTab','availabilityTab','facultyReportsTab'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', () => switchTab(id));
    });
    // Tab buttons for student
    ['studentScheduleTab','studentBatchTab','studentReportTab'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', () => switchTab(id));
    });
    // Quick action buttons
    const quickActions = [
        {id:'scheduleTab',btn:'switchTab("scheduleTab")'},
        {id:'editorTab',btn:'switchTab("editorTab")'},
        {id:'reportsTab',btn:'switchTab("reportsTab")'}
    ];
    quickActions.forEach(action => {
        const btn = document.getElementById(action.id);
        if (btn) btn.addEventListener('click', () => switchTab(action.id));
    });
});
// Add more functions as needed
// Student login and portal logic
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const role = document.getElementById('userRole').value;
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            // Reset all tabs and sections
            ['adminTabs','departmentTabs','facultyTabs','studentTabs'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.classList.add('hidden');
            });
            [
                'dashboardSection','dataInputSection','scheduleSection','editorSection','reportsSection',
                'approvalSection','deptViewSection','deptReportsSection','facultyViewSection','availabilitySection',
                'facultyReportsSection','studentContent'
            ].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.classList.add('hidden');
            });
            if (role === 'student') {
                // Demo: check static credentials
                if (username === 'student' && password === 'student123') {
                    document.getElementById('loginScreen').classList.add('hidden');
                    document.getElementById('mainApp').classList.remove('hidden');
                    document.getElementById('userInfo').textContent = '🎒 Student';
                    document.getElementById('studentTabs').classList.remove('hidden');
                    // Show student content (add if not present)
                    let studentContent = document.getElementById('studentContent');
                    if (!studentContent) {
                        studentContent = document.createElement('div');
                        studentContent.id = 'studentContent';
                        studentContent.className = 'space-y-8';
                        studentContent.innerHTML = `
                            <div class="student-card">
                                <h2 class="student-section-title">👤 Student Info <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-base">Profile</span></h2>
                                <div class="grid md:grid-cols-2 gap-6 text-lg">
                                    <div><strong>Name:</strong> Priya Sharma</div>
                                    <div><strong>ID:</strong> <span class="bg-blue-200 px-2 py-1 rounded">STU2025A01</span></div>
                                    <div><strong>Batch:</strong> <span class="bg-green-200 px-2 py-1 rounded">CSE-A</span></div>
                                    <div><strong>Department:</strong> Computer Science</div>
                                    <div><strong>Email:</strong> <span class="underline text-blue-700">priya.sharma@example.com</span></div>
                                    <div><strong>Contact:</strong> <span class="font-mono">+91 98765 43210</span></div>
                                </div>
                                <button id="editStudentInfo" class="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">Edit Info</button>
                            </div>
                            <div class="student-card">
                                <h2 class="student-section-title">📅 Personalized Timetable <span class="bg-indigo-600 text-white px-3 py-1 rounded-full text-base">Auto-Synced</span></h2>
                                <div class="text-lg text-gray-700 mb-2">Mon: Math | Tue: AI | Wed: DS | Thu: ES | Fri: AI</div>
                                <div class="text-base text-blue-700 mb-2">Next class: AI (Tue, 10:00 AM)</div>
                                <div class="text-base text-orange-600">Alert: Math class rescheduled to 11:00 AM</div>
                            </div>
                            <div class="student-card">
                                <h2 class="student-section-title">📊 Attendance Tracking <span class="bg-green-600 text-white px-3 py-1 rounded-full text-base">Smart</span></h2>
                                <div class="progress-label">Attendance</div>
                                <div class="progress-bar"><div class="progress-bar-inner" style="width:96%"></div></div>
                                <div class="text-base text-gray-700 mb-2">Last 5 days: <span class="text-green-600">✔️✔️✔️</span><span class="text-red-600">❌</span><span class="text-green-600">✔️</span></div>
                                <div class="mb-2 text-blue-700">QR/Face/RFID attendance enabled (demo)</div>
                                <button id="markAttendance" class="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition">Mark Attendance</button>
                            </div>
                            <div class="student-card diagram-box">
                                <h2 class="student-section-title">📈 Performance Report <span class="bg-orange-600 text-white px-3 py-1 rounded-full text-base">Progress</span></h2>
                                <div class="bar-chart">
                                    <div class="bar" style="height:92px">92</div>
                                    <div class="bar" style="height:88px">88</div>
                                    <div class="bar" style="height:90px">90</div>
                                    <div class="bar" style="height:85px">85</div>
                                </div>
                                <div class="flex gap-4">
                                    <div class="bar-label">Math</div>
                                    <div class="bar-label">AI</div>
                                    <div class="bar-label">DS</div>
                                    <div class="bar-label">ES</div>
                                </div>
                                <div class="progress-label">GPA</div>
                                <div class="progress-bar"><div class="progress-bar-inner" style="width:87%"></div></div>
                                <div class="mb-2 text-blue-700">AI Suggestion: Revise Chapter 3 (Math)</div>
                            </div>
                            <div class="student-card">
                                <h2 class="student-section-title">📚 Lecture Notes & Study Materials <span class="bg-yellow-600 text-white px-3 py-1 rounded-full text-base">Access</span></h2>
                                <ul class="mb-4 text-lg">
                                    <li><a href="#" class="text-blue-600 underline">Math Notes.pdf</a></li>
                                    <li><a href="#" class="text-blue-600 underline">AI Slides.pptx</a></li>
                                    <li><a href="#" class="text-blue-600 underline">DS Recording.mp4</a></li>
                                </ul>
                                <div class="flex gap-2">
                                    <input id="newResourceInput" type="text" placeholder="Add resource link..." class="border px-3 py-2 rounded-lg flex-1">
                                    <button id="addResourceBtn" class="bg-yellow-600 text-white px-5 py-2 rounded-lg shadow hover:bg-yellow-700 transition">Add Resource</button>
                                </div>
                            </div>
                            <div class="student-card">
                                <h2 class="student-section-title">📝 Assignments & Submissions <span class="bg-purple-600 text-white px-3 py-1 rounded-full text-base">Digital</span></h2>
                                <ul id="taskList" class="mb-4 text-lg">
                                    <li>Math Assignment 1 <span class="text-xs text-green-600">Completed</span></li>
                                    <li>AI Project <span class="text-xs text-orange-600">Pending</span></li>
                                    <li>Data Science Quiz <span class="text-xs text-green-600">Completed</span></li>
                                </ul>
                                <div class="flex gap-2 mb-2">
                                    <input id="newTaskInput" type="text" placeholder="Add new assignment..." class="border px-3 py-2 rounded-lg flex-1">
                                    <button id="addTaskBtn" class="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700 transition">Add Assignment</button>
                                </div>
                                <div class="mb-2 text-blue-700">Instant plagiarism/AI-check feedback (demo)</div>
                            </div>
                            <div class="student-card">
                                <h2 class="student-section-title">💬 Doubt Clearing / Q&A Forum <span class="bg-pink-600 text-white px-3 py-1 rounded-full text-base">Forum</span></h2>
                                <div class="mb-4 text-lg">Ask questions, get answers, upvote best responses.</div>
                                <div class="flex gap-2 mb-2">
                                    <input id="chatInput" type="text" placeholder="Ask a question..." class="border px-3 py-2 rounded-lg flex-1">
                                    <button id="sendChatBtn" class="bg-pink-600 text-white px-5 py-2 rounded-lg shadow hover:bg-pink-700 transition">Ask</button>
                                </div>
                                <div id="chatMessages" class="mt-4 text-base text-gray-700"></div>
                            </div>
                            <div class="student-card">
                                <h2 class="student-section-title">🎮 Interactive Learning Tools <span class="bg-teal-600 text-white px-3 py-1 rounded-full text-base">Quizzes</span></h2>
                                <div class="mb-2 text-lg">Quiz: AI Basics <span class="text-green-600">Score: 8/10</span></div>
                                <div class="mb-2 text-lg">Poll: Favorite Subject <span class="text-blue-600">AI</span></div>
                                <div class="mb-2 text-lg">Leaderboard: <span class="text-purple-600">#3</span></div>
                            </div>
                            <div class="student-card">
                                <h2 class="student-section-title">🗣️ Feedback <span class="bg-gray-600 text-white px-3 py-1 rounded-full text-base">Feedback</span></h2>
                                <div class="flex gap-2">
                                    <input id="feedbackInput" type="text" placeholder="Give feedback..." class="border px-3 py-2 rounded-lg flex-1">
                                    <button id="submitFeedbackBtn" class="bg-gray-600 text-white px-5 py-2 rounded-lg shadow hover:bg-gray-700 transition">Submit</button>
                                </div>
                                <div id="feedbackStatus" class="mt-4 text-base text-gray-700"></div>
                            </div>
                            <div class="student-card">
                                <h2 class="student-section-title">🌐 Cross-College Elective Access <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-base">NEP 2020</span></h2>
                                <div class="mb-2 text-lg">Current Elective: Data Science</div>
                                <div class="mb-2 text-lg">Available Electives: AI, ML, Cybersecurity, IoT</div>
                                <div class="mb-2 text-blue-700">AI Recommendation: Try ML for career boost!</div>
                                <button id="chooseElectiveBtn" class="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">Choose Elective</button>
                            </div>
                        `;
                        document.querySelector('.container.mx-auto.px-6.py-8').appendChild(studentContent);
                    } else {
                        studentContent.classList.remove('hidden');
                    }
                    // Add interactivity for demo data
                    setTimeout(() => {
                        // Edit student info
                        document.getElementById('editStudentInfo').onclick = function() {
                            alert('Demo: Edit student info feature coming soon!');
                        };
                        // Mark attendance
                        document.getElementById('markAttendance').onclick = function() {
                            alert('Demo: Attendance marked!');
                        };
                        // Add task
                        document.getElementById('addTaskBtn').onclick = function() {
                            const val = document.getElementById('newTaskInput').value.trim();
                            if (val) {
                                const li = document.createElement('li');
                                li.textContent = val + ' '; 
                                const status = document.createElement('span');
                                status.className = 'text-xs text-orange-600';
                                status.textContent = 'Pending';
                                li.appendChild(status);
                                document.getElementById('taskList').appendChild(li);
                                document.getElementById('newTaskInput').value = '';
                            }
                        };
                        // Add resource
                        document.getElementById('addResourceBtn').onclick = function() {
                            const val = document.getElementById('newResourceInput').value.trim();
                            if (val) {
                                const li = document.createElement('li');
                                const a = document.createElement('a');
                                a.href = '#';
                                a.textContent = val;
                                a.className = 'text-blue-600 underline';
                                li.appendChild(a);
                                document.getElementById('newResourceInput').value = '';
                                document.querySelector('#studentContent ul').appendChild(li);
                            }
                        };
                        // Chat
                        document.getElementById('sendChatBtn').onclick = function() {
                            const val = document.getElementById('chatInput').value.trim();
                            if (val) {
                                const msgDiv = document.createElement('div');
                                msgDiv.textContent = 'You: ' + val;
                                document.getElementById('chatMessages').appendChild(msgDiv);
                                document.getElementById('chatInput').value = '';
                            }
                        };
                        // Leave application
                        document.getElementById('applyLeaveBtn').onclick = function() {
                            const val = document.getElementById('leaveReasonInput').value.trim();
                            if (val) {
                                document.getElementById('leaveStatus').textContent = 'Leave applied: ' + val;
                                document.getElementById('leaveReasonInput').value = '';
                            }
                        };
                        // Feedback
                        document.getElementById('submitFeedbackBtn').onclick = function() {
                            const val = document.getElementById('feedbackInput').value.trim();
                            if (val) {
                                document.getElementById('feedbackStatus').textContent = 'Feedback submitted: ' + val;
                                document.getElementById('feedbackInput').value = '';
                            }
                        };
                    }, 100);
                } else {
                    alert('Invalid student credentials!');
                }
            } else if (role === 'admin') {
                // Demo: check static credentials
                if (username === 'admin' && password === 'admin123') {
                    document.getElementById('loginScreen').classList.add('hidden');
                    document.getElementById('mainApp').classList.remove('hidden');
                    document.getElementById('userInfo').textContent = '👑 Admin';
                    document.getElementById('adminTabs').classList.remove('hidden');
                    showSection('dashboardSection');
                } else {
                    alert('Invalid admin credentials!');
                }
            } else if (role === 'department') {
                if (username === 'dept' && password === 'dept123') {
                    document.getElementById('loginScreen').classList.add('hidden');
                    document.getElementById('mainApp').classList.remove('hidden');
                    document.getElementById('userInfo').textContent = '🏛️ Department Head';
                    document.getElementById('departmentTabs').classList.remove('hidden');
                    showSection('dashboardSection');
                } else {
                    alert('Invalid department credentials!');
                }
            } else if (role === 'faculty') {
                if (username === 'faculty' && password === 'faculty123') {
                    document.getElementById('loginScreen').classList.add('hidden');
                    document.getElementById('mainApp').classList.remove('hidden');
                    document.getElementById('userInfo').textContent = '👨‍🏫 Faculty Member';
                    document.getElementById('facultyTabs').classList.remove('hidden');
                    showSection('dashboardSection');
                } else {
                    alert('Invalid faculty credentials!');
                }
            }
        });
    }
});
