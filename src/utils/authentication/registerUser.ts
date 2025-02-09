

const GRAPHQL_URL = `https://apollo-render-bd2p.onrender.com`;
const GRAPHQL_TOKEN = `derp`;

export const registerUser = async (email: string, password: string, fullName: string): Promise<boolean> => {
    // const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL as string;
    // const GRAPHQL_TOKEN = import.meta.env.VITE_GRAPHQL_TOKEN as string;

    const query = `mutation AddUser($input: UserInput!) {
        addUser(input: $input) {
            id
            email
            hashedPassword
            fullName
            contactInfo
            taxInfo
            bankingInfo
            twoFactorSettings
            createdAt
            updatedAt
            isActive
        }
    }`;
    const variables = {
        input: {
            email: `${ email.toLocaleLowerCase() }`,
            password: `${ password }`,
            fullName: `${ fullName }`
        }
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

        if (!response.ok) {
            return false;
        }

        const result = await response.json();
        
        if (result.errors) {
            return false;
        }

        const user = result.data?.addUser?.[0];
        if (!user) {
            return false;
        }

        return true;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};