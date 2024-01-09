const UserOverview = ({ data, profile }) => {
    const columnsConfig = {
        senior: ['Email', 'FirstName', 'LastName', 'Address', 'PaymentMethod', 'Subscription', 'NumProfiles', 'Status'],
        medior: ['Email', 'FirstName', 'LastName', 'Address', 'NumProfiles', 'Status'],
        junior: ['Email', 'NumProfiles', 'Status'],
    };
  
    const columns = columnsConfig[profile] || [];
  
    return (
        <div className="container">
        <table className="user-overview-table">
            <thead className="table-header">
            <tr>
                {columns.map((column) => (
                <th className="column-name" key={column}>{column}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row) => (
                <tr key={row.id}>
                {columns.map((column) => (
                    <td className="table-cell" key={column}>{row[column]}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>  
    );
  };
  
  export default UserOverview;