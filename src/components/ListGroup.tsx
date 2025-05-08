




function ListGroup() {


 let items = ['new york','Nepal','london'
  ];
items =[];

 
 
  return (
    <>
      <div>
        <h1>List</h1>
        {items.length===0 ? <p>No item found</p>: null}
      
        <ul className="list-group">
       { items.map(item => (
       <li key={item}> {item}</li>))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
//40min