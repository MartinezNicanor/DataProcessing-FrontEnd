import { useEffect } from "react";
import { useAuthContext } from "../../components/hooks/useAuthContext";

const Statistics = () => {
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchStatistics = async () => {
            const response = await fetch(`http://localhost:4000/admin/statistics`, {
                method: 'GET',
                headers: {'Authorization': `Bearer ${user.token}`},
            })
            const json = await response.json()
            
            if (!response.ok) {
                console.log(json.error);
            }
            
            if (response.ok) {
                console.log(json.data);
            }
        }

        fetchStatistics();
    }, [user])

    return(
        <div className="stats-container">
            <h1 className="homepage-title">WORLD WIDE</h1>
            <div className="tables-container">
                <div className="stats-table">
                    <div className="stats-title">
                        <p>Number of monthly subscriptions</p>
                        <select name="monthly-subs">
                            <option value="">year</option>
                            <option value="">year</option>
                            <option value="">year</option>
                        </select>
                    </div>
                    <div className="stats"></div>
                </div>
                <div className="stats-table">
                    <div className="stats-title">
                        <p>Most popular subscription type</p>
                        <select name="monthly-subs">
                            <option value="">year</option>
                            <option value="">year</option>
                            <option value="">year</option>
                        </select>
                    </div>
                    <div className="stats"></div>
                </div>
                <div className="stats-table">
                    <div className="stats-title">
                        <p>Annaul revenue</p>
                        <select name="monthly-subs">
                            <option value="">year</option>
                            <option value="">year</option>
                            <option value="">year</option>
                        </select>
                    </div>
                    <div className="stats"></div>
                </div>
                <div className="stats-table">
                    <div className="stats-title">
                        <p>Monthly revenue</p>
                        <select name="monthly-subs">
                            <option value="">year</option>
                            <option value="">year</option>
                            <option value="">year</option>
                        </select>
                    </div>
                    <div className="stats"></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;