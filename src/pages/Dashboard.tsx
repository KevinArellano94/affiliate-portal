// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { userLinks } from "../utils/function/userLinks";
import { userPerformance } from "../utils/function/userPerformances";


const Dashboard = ({ user }: any) => {
    const [links, setLinks] = useState([]);
    const [performances, setPerformances] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [_error, setError] = useState(null);

    // const navigate = useNavigate();

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await userLinks(user.id);
                setLinks(response?.data?.link || []);
                
            } catch (error) {
                console.error("Error fetching links:", error);
            }
        };
    
        fetchLinks();
    }, []);

    useEffect(() => {
        let isSubscribed = true;
        let timeoutId: any;
    
        const fetchPerformance = async () => {
        if (!isSubscribed) return;
        
        try {
            setIsLoading(true);
            const response = await userPerformance(user.id);
            
            if (isSubscribed) {
                setPerformances(response?.data?.performance || []);
                setError(null);
            }
        } catch (error) {
            if (isSubscribed) {
                console.error("Error fetching performance data:", error);
                console.log(isLoading, _error); // added otherwise it complains...
            }
        } finally {
            if (isSubscribed) {
                setIsLoading(false);
                timeoutId = setTimeout(fetchPerformance, 5000);
            }
        }
        };
    
        fetchPerformance();
    
        return () => {
            isSubscribed = false;
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [user.id]);
    
    const phoneNumber = JSON.stringify(user.contactInfo['phone']) || JSON.stringify(user.contactInfo['cell']) || '';
    const cleanedPhoneNumber = phoneNumber.replace('"', '').replace('"', '');

    return (
        <>
            <div className="dashboard-container">
                <section className="profile-section">
                    <h1 className="welcome-header">Welcome { user.fullName }!</h1>
                    <div className="profile-details">
                        <p>Fullname: { user.fullName }</p>
                        <p>Email: { user.email }</p>
                        <p>Phone: { cleanedPhoneNumber }</p>
                    </div>
                </section>

                <h2>Links:</h2>
                {links.length > 0 ? (
                    <table className="data-grid" border={2}>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Slug</th>
                            <th>Target Url</th>
                            <th>Platform</th>
                            <th>Active</th>
                            <th>Created At</th>
                            <th>Expires At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {links.map((link: any, index) => (
                            <tr key={index}>
                                <td>{link.id}</td>
                                <td>{link.urlSlug}</td>
                                <td>{link.targetUrl}</td>
                                <td>{link.platform}</td>
                                <td>{link.isActive.toString()}</td>
                                <td>{link.createdAt}</td>
                                <td>{link.expiresAt}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No links available.</p>
                )}

                <br /><br /><br /><br />
                
                <h2>Performance:</h2>
                {performances.length > 0 ? (
                    <table className="data-grid" border={2}>
                        <thead>
                            <tr>
                            <th>LinkId</th>
                            <th>UserId</th>
                            <th>Platform</th>
                            <th>Total Clicks</th>
                            <th>Total Conversions</th>
                            <th>Total Revenue</th>
                            <th>Total Commission</th>
                            </tr>
                        </thead>
                        <tbody>
                            {performances.map((performance: any, index) => (
                            <tr key={index}>
                                <td>{performance.linkId}</td>
                                <td>{performance.userId}</td>
                                <td>{performance.platform}</td>
                                <td>{performance.totalClicks}</td>
                                <td>{performance.totalConversions}</td>
                                <td>{performance.totalRevenue}</td>
                                <td>{performance.totalCommission}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No performances available.</p>
                )}
            </div>
        </>
    )
}

export default Dashboard;
