

const GRAPHQL_URL = `https://apollo-render-bd2p.onrender.com`;
const GRAPHQL_TOKEN = `derp`;

export const userPerformance = async (userId: string) => {
    // const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL as string;
    // const GRAPHQL_TOKEN = import.meta.env.VITE_GRAPHQL_TOKEN as string;
    
    const query = `query Performance($userId: ID, $linkId: ID, $platform: String) {
        performance(userId: $userId, linkId: $linkId, platform: $platform) {
            linkId
            userId
            platform
            totalClicks
            totalConversions
            totalRevenue
            totalCommission
        }
    }`;
    const variables = {
        userId: `${ userId }`
    }

    try {
        const response = await fetch(GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ GRAPHQL_TOKEN }`
            },
            body: JSON.stringify({ query, variables }),
        });
    
        return await response.json();
    } catch (error) {
        console.error('userPerformance error:', error);
        throw error;
    }
};
