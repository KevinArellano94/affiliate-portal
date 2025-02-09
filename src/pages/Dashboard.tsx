// import { useNavigate } from "react-router-dom";


const Dashboard = ({ user }: any) => {
    // const navigate = useNavigate();
    
    return (
        <>
            <h2>Welcome { user.fullName }!</h2>
            <h4>Fullname: { user.fullName }</h4>
            <h4>Email: { user.email }</h4>
        </>
    )
}

export default Dashboard;
