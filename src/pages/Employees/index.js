
import EmployeeList from './components/EmployeeList';
import EmployeeContextProvider from './contexts/EmployeeContext';

function Employees() {

    return (
        <>
            <div className="table-responsive">
                <div className="table-wrapper">
                    <EmployeeContextProvider>
                        <EmployeeList />
                    </EmployeeContextProvider>
                </div>
            </div>
        </>
    );

}

export default Employees;
