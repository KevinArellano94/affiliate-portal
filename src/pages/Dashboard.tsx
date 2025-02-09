// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { userLinks } from "../utils/function/userLinks";


const Dashboard = ({ user }: any) => {
    const [links, setLinks] = useState([]);
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
    
    return (
        <>
            <div>
                <h2>Welcome { user.fullName }!</h2>
                <h4>Fullname: { user.fullName }</h4>
                <h4>Email: { user.email }</h4>

                <h4>Links:</h4>
                {links.length > 0 ? (
                    <table border={2}>
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
            </div>
        </>
    )
}

export default Dashboard;
