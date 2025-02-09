

const GRAPHQL_URL = process.env.GRAPHQL_URL as string || `http://localhost:4000/`;

export const loginUser = async (email: string, password: string) => {
    const query = `query User($email: String!, $password: String!) {
        user(email: $email, password: $password) {
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
        token
        }
    }`;
    const variables = {
        "email": `${ email }`,
        "password": `${ password }`
    }
    try {
        const response = await fetch(GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer derp'
            },
            body: JSON.stringify({ query, variables }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.errors) {
            throw new Error(result.errors[0].message);
        }

        const user = result.data?.user?.[0];
        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};
