// import { useNavigate } from "react-router-dom";


const Dashboard = ({ user }: any) => {
    // const navigate = useNavigate();
    
    return (
        <>
            <h2>Welcome { user.fullName }!</h2>
        </>
    )
}

export default Dashboard;
