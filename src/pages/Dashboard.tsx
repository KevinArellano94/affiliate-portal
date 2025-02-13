// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { DollarSign, Users, Link as LinkIcon, TrendingUp, CreditCard } from "lucide-react";
import "../components/ui/card.css";

// import { userLinks } from "../utils/function/userLinks";
// import { userPerformance } from "../utils/function/userPerformances";
// import { generateAffiliateUrl } from "../utils/function/userGenerateUrl";

import { userRewardfulLinks } from "../utils/function/userRewardfulLinks";

const Dashboard = ({ user }: any) => {
    // const [links, setLinks] = useState([]);
    // const [performances, setPerformances] = useState([]);

    // const [isLoading, setIsLoading] = useState(true);
    // const [_error, setError] = useState(null);

    // const [copiedIndex, setCopiedIndex] = useState(null);

    // const handleCopy = async (link: string, index: any) => {
    //     const affiliateUrl = generateAffiliateUrl(link);
    //     try {
    //         await navigator.clipboard.writeText(affiliateUrl);
    //         setCopiedIndex(index);
    //         setTimeout(() => setCopiedIndex(null), 2000);
    //     } catch (err) {
    //         console.error('Failed to copy URL:', err);
    //     }
    // };

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!user.token) {
    //         navigate("/");
    //     }
    // }, [user.token, navigate]);

    // const handleLogout = () => {
    //     // setUser(null); // Clear user state
    //     navigate("/");
    // };

    const [rewardfulLinks, setRewardfulLinks]: any = useState([]);

    const rewardfulAffiliateID: string = 'c6383d6c-f05b-4550-905c-0d513354a495';

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response: any = await userRewardfulLinks(rewardfulAffiliateID);
                setRewardfulLinks(response.data);
                
            } catch (error) {
                console.error("Error fetching links:", error);
            }
        };
    
        fetchLinks();
    }, []);

    // console.log(rewardfulLinks);

    let totalVisitors: number = 0;
    const activeLinks = [];

    for (const link of rewardfulLinks) {
        totalVisitors += link.visitors;
        activeLinks.push({
            name: `${ link.token }`,
            clicks: link.visitors,
            conversion: `${ link.conversions }`
        })
    }

    // useEffect(() => {
    //     let isSubscribed = true;
    //     let timeoutId: any;
    
    //     const fetchPerformance = async () => {
    //     if (!isSubscribed) return;
        
    //     try {
    //         setIsLoading(true);
    //         const response = await userPerformance(user.id);
            
    //         if (isSubscribed) {
    //             setPerformances(response?.data?.performance || []);
    //             setError(null);
    //         }
    //     } catch (error) {
    //         if (isSubscribed) {
    //             console.error("Error fetching performance data:", error);
    //             console.log(isLoading, _error, copiedIndex); // added otherwise it complains...
    //         }
    //     } finally {
    //         if (isSubscribed) {
    //             setIsLoading(false);
    //             timeoutId = setTimeout(fetchPerformance, 5000);
    //         }
    //     }
    //     };
    
    //     fetchPerformance();
    
    //     return () => {
    //         isSubscribed = false;
    //         if (timeoutId) {
    //             clearTimeout(timeoutId);
    //         }
    //     };
    // }, [user.id]);
    
    // const phoneNumber = JSON.stringify(user.contactInfo['phone']) || JSON.stringify(user.contactInfo['cell']) || '';
    // const cleanedPhoneNumber = phoneNumber.replace('"', '').replace('"', '');

    const performanceData = [
        { month: "Jan", visitors: 1200, leads: 85, commissions: 2450 },
        { month: "Feb", visitors: 1800, leads: 120, commissions: 3600 },
        { month: "Mar", visitors: 1400, leads: 95, commissions: 2850 },
        { month: "Apr", visitors: 2200, leads: 150, commissions: 4500 }
      ];
      
      const paymentHistory = [
        { date: "2025-02-01", amount: 2450, status: "Paid" },
        { date: "2025-01-01", amount: 3600, status: "Paid" },
        { date: "2024-12-01", amount: 2850, status: "Paid" },
      ];
      
    //   const activeLinks = [
    //     { name: "Product A Landing Page", clicks: 450, conversion: "3.2%" },
    //     { name: "Summer Promo Campaign", clicks: 890, conversion: "4.1%" },
    //     { name: "Special Offer Page", clicks: 670, conversion: "3.8%" },
    //   ];

    const StatCard = ({ icon: Icon, title, value, bgColor }: { icon: any; title: string; value: string | number; bgColor: string }) => (
        <div className="metric-card flex items-center">
            <div className={`icon-wrapper flex-shrink-0 ${bgColor}`}>
                <Icon className="metric-icon" />
            </div>
            <div className="metadata-wrapper">
                <p className="metric-label">{title}</p>
                <p className="metric-value">{value}</p>
            </div>
        </div>
    );

    return (
        <div className="dashboard-container">
          <header className="dashboard-header">
            <h1>Affiliate Dashboard</h1>
            <div className="balance-card">
              <p>Available Balance</p>
              <p className="balance-amount">$4,500.00</p>
            </div>
          </header>
    
          <div className="metrics-grid">
            <StatCard icon={Users} title="Total Visitors" value={ totalVisitors } bgColor="bg-blue" />
            <StatCard icon={TrendingUp} title="Total Leads" value={"450"} bgColor="bg-green" />
            <StatCard icon={DollarSign} title="Total Earnings" value={"$13,400"} bgColor="bg-purple" />
          </div>
    
          <div className="chart-section">
            <div className="chart-header">
              <h2>Performance Overview</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="visitors" stroke="#3b82f6" />
                  <Line type="monotone" dataKey="leads" stroke="#10b981" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-header">
              <h2>Commission Earnings</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="commissions" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
    
          <div className="active-links">
            <h2>Active Links</h2>
            {activeLinks.map((link, index) => (
              <div key={index} className="link-item">
                <div className="link-details">
                  <LinkIcon className="link-icon" />
                  <div>
                    <p className="link-info">{link.name}</p>
                    <p className="link-clicks">{link.clicks} clicks</p>
                  </div>
                </div>
                <p className="conversion-rate">{link.conversion}</p>
              </div>
            ))}
          </div>
    
          <div className="payment-history">
            <h2>Payment History</h2>
            {paymentHistory.map((payment, index) => (
              <div key={index} className="payment-item">
                <div className="payment-details">
                  <CreditCard className="icon-small" />
                  <div>
                    <p className="payment-amount">${payment.amount}</p>
                    <p className="payment-date">{payment.date}</p>
                  </div>
                </div>
                <span className="payment-status">{payment.status}</span>
              </div>
            ))}
          </div>
        </div>
      );
    };


export default Dashboard;
