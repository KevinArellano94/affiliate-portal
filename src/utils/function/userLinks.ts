

export const userLinks = async (userId: string) => {
    const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL as string;
    const GRAPHQL_TOKEN = import.meta.env.VITE_GRAPHQL_TOKEN as string;
    
    const query = `query Link($userId: ID!) {
        link(userId: $userId) {
            id
            userId
            urlSlug
            targetUrl
            platform
            metadata
            isActive
            createdAt
            expiresAt
        }
    }`;
    const variables = {
        userId: `${ userId }`
    }

    console.log(variables);
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
        console.error('userLinks error:', error);
        throw error;
    }
};