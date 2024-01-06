const CountryStatistics = ({ country }) => {
    return(
        <div className="stats-container">
            <h1 className="homepage-title">{ country }</h1>
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

export default CountryStatistics;