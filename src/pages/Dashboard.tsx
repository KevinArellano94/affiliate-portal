import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { userLinks } from "../utils/function/userLinks";
import { userPerformance } from "../utils/function/userPerformances";
import { generateAffiliateUrl } from "../utils/function/userGenerateUrl";


const Dashboard = ({ user }: any) => {
    const [links, setLinks] = useState([]);
    const [performances, setPerformances] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [_error, setError] = useState(null);

    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = async (link: string, index: any) => {
        const affiliateUrl = generateAffiliateUrl(link);
        try {
            await navigator.clipboard.writeText(affiliateUrl);
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        } catch (err) {
            console.error('Failed to copy URL:', err);
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (!user.token) {
            navigate("/");
        }
    }, [user.token, navigate]);

    const handleLogout = () => {
        // setUser(null); // Clear user state
        navigate("/");
    };

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
                console.log(isLoading, _error, copiedIndex); // added otherwise it complains...
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

                <h1 className="performance-title">Links</h1>
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
                            <th>Copy URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {links.map((link: any, index) => (
                            <tr key={index}>
                                <td data-label="ID">{link.id}</td>
                                <td data-label="Slug">{link.urlSlug}</td>
                                <td data-label="Target Url">{link.targetUrl}</td>
                                <td data-label="Platform">{link.platform}</td>
                                <td data-label="Active">{link.isActive.toString()}</td>
                                <td data-label="Created At">{link.createdAt}</td>
                                <td data-label="Expires At">{link.expiresAt}</td>
                                <td data-label="Copy URL">
                                    <a href="#" onClick={() => handleCopy(link, index)}>
                                        {/* <h3 className="profile-details">[CLICK ME]</h3> */}
                                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.59961 11.3974C6.59961 8.67119 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C17.9549 5.61426 19.3125 5.61426 20.1561 6.46118C20.9996 7.3081 20.9996 8.6712 20.9996 11.3974V16.2167C20.9996 18.9429 20.9996 20.306 20.1561 21.1529C19.3125 21.9998 17.9549 21.9998 15.2396 21.9998H12.3596C9.64432 21.9998 8.28667 21.9998 7.44314 21.1529C6.59961 20.306 6.59961 18.9429 6.59961 16.2167V11.3974Z" fill="#CF00FF"/>
                                            <path opacity="0.5" d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V12C3 15.7712 3 17.6569 4.17157 18.8284C4.78913 19.446 5.6051 19.738 6.79105 19.8761C6.59961 19.0353 6.59961 17.8796 6.59961 16.2167V11.3974C6.59961 8.6712 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C16.8915 5.61426 18.0409 5.61426 18.8777 5.80494C18.7403 4.61146 18.4484 3.79154 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157Z" fill="#FFFFFF"/>
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No links available.</p>
                )}

                <br /><br /><br /><br />
                
                <h1 className="performance-title">Performance</h1>
                {performances.length > 0 ? (
                    <table className="data-grid" border={2}>
                        <thead>
                            <tr>
                            <th>LinkId</th>
                            {/* <th>UserId</th> */}
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
                                <td data-label="LinkId">{performance.linkId}</td>
                                {/* <td data-label="UserId">{performance.userId}</td> */}
                                <td data-label="Platform">{performance.platform}</td>
                                <td data-label="Clicks">{performance.totalClicks}</td>
                                <td data-label="Conversions">{performance.totalConversions}</td>
                                <td data-label="Revenue">{performance.totalRevenue}</td>
                                <td data-label="Commission">{performance.totalCommission}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No performances available.</p>
                )}

                <br /><br /><br /><br />
                
                <button onClick={handleLogout} className="cta-button">Logout</button>
            </div>
        </>
    )
}

export default Dashboard;
