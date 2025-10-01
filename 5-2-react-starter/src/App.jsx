import './App.css'
import StudentCard from './components/StudentCard/.'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <StudentCard name="Mohammed Yar" id="202173410" dept="Computer Science" />
          <StudentCard name="Aziz ziad" id="20220000" dept="Finance" />
        </div>
      </main>
    </div>
  )
}

export default App
