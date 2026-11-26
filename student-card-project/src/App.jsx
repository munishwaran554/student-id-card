import { useMemo, useState } from "react";
import { GraduationCap, UserRound, Mail, Phone, MapPin, CalendarDays, Printer, RotateCcw, CreditCard } from "lucide-react";

const initial = {
  name: "Alex Johnson",
  studentId: "STU2026001",
  department: "Computer Science",
  year: "2026 - 2027",
  email: "alex.johnson@example.com",
  phone: "+91 98765 43210",
  bloodGroup: "O+",
  campus: "Main Campus",
  photo: ""
};

export default function App() {
  const [student, setStudent] = useState(initial);
  const [notice, setNotice] = useState("");

  const initials = useMemo(() => student.name.trim().split(/\s+/).slice(0, 2).map(x => x[0] || "").join("").toUpperCase() || "ST", [student.name]);

  const update = (key, value) => setStudent(prev => ({ ...prev, [key]: value }));
  const reset = () => { setStudent(initial); setNotice(""); };

  const handlePhoto = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setNotice("Please choose an image file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => update("photo", reader.result);
    reader.readAsDataURL(file);
  };

  const handlePrint = () => {
    setNotice("");
    window.print();
  };

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-icon"><GraduationCap size={22}/></span><span>Campus<span className="brand-light">Card</span></span></a>
        <span className="top-tag"><span className="live-dot"/> STUDENT CARD STUDIO</span>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">STUDENT IDENTITY • MADE SIMPLE</p>
          <h1>Create your student <span>ID card.</span></h1>
          <p className="hero-copy">Enter your details, preview your card instantly, and print a clean student ID layout.</p>
        </div>
        <div className="hero-mark"><CreditCard size={34}/><span>01 / 02</span></div>
      </section>

      <section className="workspace">
        <div className="form-panel">
          <div className="section-heading">
            <div><p className="eyebrow">CARD DETAILS</p><h2>Student information</h2></div>
            <span className="step-pill">STEP 01</span>
          </div>
          <div className="form-grid">
            <label className="field full"><span>Full name</span><div className="input-wrap"><UserRound size={17}/><input value={student.name} onChange={e => update("name", e.target.value)} placeholder="Enter full name"/></div></label>
            <label className="field"><span>Student ID</span><input value={student.studentId} onChange={e => update("studentId", e.target.value)} placeholder="e.g. STU2026001"/></label>
            <label className="field"><span>Department</span><input value={student.department} onChange={e => update("department", e.target.value)} placeholder="e.g. Computer Science"/></label>
            <label className="field"><span>Academic year</span><div className="input-wrap"><CalendarDays size={17}/><input value={student.year} onChange={e => update("year", e.target.value)} placeholder="2026 - 2027"/></div></label>
            <label className="field"><span>Campus</span><div className="input-wrap"><MapPin size={17}/><input value={student.campus} onChange={e => update("campus", e.target.value)} placeholder="Campus name"/></div></label>
            <label className="field full"><span>Email address</span><div className="input-wrap"><Mail size={17}/><input type="email" value={student.email} onChange={e => update("email", e.target.value)} placeholder="student@example.com"/></div></label>
            <label className="field"><span>Phone number</span><div className="input-wrap"><Phone size={17}/><input value={student.phone} onChange={e => update("phone", e.target.value)} placeholder="+91 ..."/></div></label>
            <label className="field"><span>Blood group</span><select value={student.bloodGroup} onChange={e => update("bloodGroup", e.target.value)}><option>Not specified</option><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>AB+</option><option>AB-</option><option>O+</option><option>O-</option></select></label>
            <label className="field full upload-field"><span>Student photo</span><input type="file" accept="image/*" onChange={handlePhoto}/><small>Choose a JPG or PNG image. Photo stays in this browser preview.</small></label>
          </div>
          {notice && <p className="notice">{notice}</p>}
          <div className="form-actions"><button className="btn btn-quiet" onClick={reset}><RotateCcw size={16}/> Reset</button><button className="btn btn-primary" onClick={handlePrint}><Printer size={17}/> Print student card</button></div>
        </div>

        <aside className="preview-panel">
          <div className="section-heading preview-heading"><div><p className="eyebrow">LIVE PREVIEW</p><h2>Your ID card</h2></div><span className="preview-status">● LIVE</span></div>
          <div className="card-stage">
            <article className="student-card">
              <div className="card-top">
                <div className="college-mark"><GraduationCap size={22}/></div>
                <div className="college-title"><strong>YOUR INSTITUTION</strong><small>STUDENT IDENTITY CARD</small></div>
                <div className="card-chip">2026</div>
              </div>
              <div className="card-accent"/>
              <div className="card-body">
                <div className="avatar">{student.photo ? <img src={student.photo} alt="Student"/> : <span>{initials}</span>}</div>
                <div className="student-main"><span className="card-label">STUDENT NAME</span><h3>{student.name || "Student Name"}</h3><p>{student.department || "Department"}</p></div>
              </div>
              <div className="card-id-row"><span>STUDENT ID</span><strong>{student.studentId || "—"}</strong></div>
              <div className="card-details">
                <div><small>ACADEMIC YEAR</small><strong>{student.year || "—"}</strong></div>
                <div><small>CAMPUS</small><strong>{student.campus || "—"}</strong></div>
                <div><small>BLOOD GROUP</small><strong>{student.bloodGroup}</strong></div>
              </div>
              <div className="card-bottom"><span>AUTHORIZED STUDENT</span><span className="card-bars">▥ ▥ ▥ ▥ ▥</span></div>
            </article>
            <p className="preview-caption">FRONT SIDE · DIGITAL PREVIEW</p>
          </div>
          <div className="preview-note"><span className="note-icon">i</span><p>Update any field on the left to see your student card change instantly. Replace “YOUR INSTITUTION” in the code with your college name.</p></div>
        </aside>
      </section>
      <footer><span>CampusCard Studio</span><span>Student ID card generator · React + Vite</span></footer>
    </main>
  );
}