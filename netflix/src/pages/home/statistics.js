import { useEffect, useState } from "react";
import { useAuthContext } from "../../components/hooks/useAuthContext";
import { Chart } from "react-google-charts";

const Statistics = () => { 
    const [statistics, setStatistics] = useState([]);
    const [topCountries, setTopCountries] = useState([]);

    const { user } = useAuthContext();

    useEffect(() => {
        const fetchStatistics = async () => {
            const response = await fetch(`http://localhost:4000/admin/topRevenueCountries`, {
                method: 'GET',
                headers: {'Authorization': `Bearer ${user.token}`},
            })
            const json = await response.json()
            
            if (!response.ok) {
                console.log(json.error);
            }
            
            if (response.ok) {
                setTopCountries(json.data);
            }
        }

        fetchStatistics();
    }, [user])

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
                setStatistics(json.data);
            }
        }

        fetchStatistics();
    }, [user])

    //functions for google charts    
    function getSubscribers(status) {     
        let sum = 0;
        Number(sum);
        const totalSubscribers = statistics.map((row) => (
            (status === "active") ? sum += Number(row.active_subscriptions) :
            (status === "inactive") ? sum += Number(row.inactive_subscriptions) :
            "Status not found"
        ));
        return sum;
    }

    function getPaymentMethod(payment) {
        let sum = 0;
        Number(sum);
        const paymentMethods = statistics.map((row) => (
            (payment === 'Mastercard') ? sum += Number(row.usage_of_mastercard) :
            (payment === 'Visa') ? sum += Number(row.usage_of_visa) :
            (payment === 'Apple Pay') ? sum += Number(row.usage_of_apple_pay) :
            (payment === 'Google pay') ? sum += Number(row.usage_of_google_pay) :
            (payment === 'Ideal') ? sum += Number(row.usage_of_ideal) :
            "Payment not found"
        ))
        return sum;
    }
    
    const paymentData = [
        ["Payment Method", "Accounts"],
        ["Mastercard", 5175000],
        ["Visa", 4792000],
        ["Apple Pay", 3695000],
        ["Google Pay", 2299000],
        ["Ideal", 1526000],
    ];

    const paymentOptions = {
        chartArea: { width: "60%"},
        backgroundColor: {
                fill: "black",
                stroke: "black",
                strokeWidth: 1,
            },
        colors: ["#E50914", "#8E1212", "#F70505", "#680303", "#F15757"],
        legend: {
            textStyle: {
                color: 'white',
            },
        },
    };

    const subscriptionData = [
        ["Subscriptions", "Accounts"],
        ["Active", getSubscribers("active")],
        ["Inactive", getSubscribers("inactive")],
    ];

    const subscriptionOptions = {
        chartArea: { width: "60%"},
        backgroundColor: {
                fill: "black",
                stroke: "black",
                strokeWidth: 1,
            },
        colors: ["red", "gray"],
        legend: {
            textStyle: {
                color: 'white',
            },
        },
    };

    const topTenData = [
        ["Country", "Revenue"],
        ["USA", 9175756],
        ["Canada", 8792865],
        ["UK", 7695268],
        ["China", 6896512],
        ["Germany", 5657429],
        ["Japan", 5099584],
        ["Australia", 4524579],
        ["Italy", 3657842],
        ["Netherlands", 2598411],
        ["Nepal", 1256994],
    ];

    const topTenOptions = {
        chartArea : {width: "75%"},
        hAxis: {
            title: "Country",
            textStyle: {
                color: 'white',
                },
            titleTextStyle: {
                color: 'white',
                },
            minValue: 0,
        },
        vAxis: {
            title: "Revenue",
            textStyle: {
                color: 'white',
                },
            titleTextStyle: {
                color: 'white',
                },
        },
        backgroundColor: {
            fill: "black",
            stroke: "black",
            strokeWidth: 1,
        },
        colors: ["#E50914", "#8E1212"],
        legend: {
            textStyle: {
            color: 'white',
            },
        },
    };
        
    return(
        <div className="stats-container">
            <h1 className="homepage-title">WORLD WIDE</h1>
            <div className="tables-container">
                <div className="stats-table">
                    <div className="stats-title">
                        <p>Most Used Payment Method</p>
                    </div>
                    <div className="stats">
                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="400px"
                            data={paymentData}
                            options={paymentOptions}
                        />
                    </div>
                </div>
                <div className="stats-table">
                    <div className="stats-title">
                        <p>Active and Inactive Subscription</p>
                    </div>
                    <div className="stats">
                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="400px"
                            data={subscriptionData}
                            options={subscriptionOptions}
                        />
                    </div>
                </div>
                <div className="topTenStat">
                    <div className="stats-title">
                        <p>Top Ten Country by Revenue</p>
                    </div>
                    <div className="stats">
                        <Chart
                            chartType="ColumnChart"
                            width="100%"
                            height="400px"
                            data={topTenData}
                            options={topTenOptions}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;