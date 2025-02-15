

const GRAPHQL_URL = `http://localhost:4000/`;
const GRAPHQL_TOKEN = `derp`;

export const updateUser = async (
    userId: string,
    // email: string,
    // password: string,
    fullName: string,
    contactInfo: string,
    taxInfo: string,
    bankingInfo: string
): Promise<boolean> => {
    // const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL as string;
    // const GRAPHQL_TOKEN = import.meta.env.VITE_GRAPHQL_TOKEN as string;

    const query = `mutation UpdateUser($input: UserUpdateInput!) {
        updateUser(input: $input) {
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
    const variables: any = {
        input: {}
    }

    if (userId) {
        variables.input.id = `${ userId }`
    }
    
    // if (password) {
    //     variables.input.password = `${ password }`
    // }

    if (fullName) {
        variables.input.fullName = `${ fullName }`
    }

    if (contactInfo) {
        variables.input.contactInfo = `${ contactInfo.toString() }`
    } else {
        variables.input.contactInfo = {}
    }

    if (taxInfo) {
        variables.input.taxInfo = `${ taxInfo.toString() }`
    } else {
        variables.input.taxInfo = {}
    }

    if (bankingInfo) {
        variables.input.bankingInfo = `${ bankingInfo.toString() }`
    } else {
        variables.input.bankingInfo = {}
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

        return true;
    } catch (error) {
        console.error('Update account info error:', error);
        throw error;
    }
};