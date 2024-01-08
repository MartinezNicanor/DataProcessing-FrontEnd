const UserOverview = ({ data, profile }) => {
    const columnsConfig = {
        senior: ['email', 'firstname', 'lastname', 'address', 'paymentmethod', 'subscription', 'numprofiles', 'status'],
        medior: ['email', 'firstname', 'lastname', 'address', 'numprofiles', 'status'],
        junior: ['email', 'numprofiles', 'status'],
    };
  
    const columns = columnsConfig[profile] || [];
  
    return (
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
    );
  };
  
  export default UserOverview;