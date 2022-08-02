import Table from 'react-bootstrap/Table';
const List = () => {
    const employees = [

        { Id: 101,Name: 'Abhinav',Location: 'Bangalore',Salary: 12345 },

        { Id: 102,Name: 'Abhishek',Location: 'Chennai',Salary: 23456 },

        { Id: 103,Name: 'Ajay',Location: 'Bangalore',Salary: 34567 }

    ];
    return (
        <div className="wrapper">
            <h1>Employees List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp) =>
                            <tr>
                                <td>{ emp.Id }</td>
                                <td>{ emp.Name }</td>
                                <td>{ emp.Location }</td>
                                <td>{ emp.Salary }</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};
export default List;