
function ListGroup() {

  const items = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">Item one</li>
        <li className="list-group-item">Item two</li>
        <li className="list-group-item">Item three</li>
        <li className="list-group-item">Item four</li>
        <li className="list-group-item">Item five</li>
      </ul>
    </>
  );
}

export default ListGroup;
