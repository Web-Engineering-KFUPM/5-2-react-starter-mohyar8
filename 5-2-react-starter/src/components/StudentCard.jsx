function StudentCard(props) {
  return (
    <div className="student-card">
      <h3>Name: {props.name}</h3>
      <p>Student ID: {props.id}</p>
      <p>Department: {props.dept}</p>
    </div>
  );
}

export default StudentCard;
