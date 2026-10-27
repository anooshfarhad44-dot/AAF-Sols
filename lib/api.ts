// Frontend-only client authentication service (no backend server required)

export interface User {
    id?: string;
    name: string;
    email: string;
    role?: string;
}

const getStoredUsers = (): any[] => {
    if (typeof window === 'undefined') return [];
    try {
        const users = localStorage.getItem('studio_mock_users');
        return users ? JSON.parse(users) : [];
    } catch {
        return [];
    }
};

const saveStoredUsers = (users: any[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('studio_mock_users', JSON.stringify(users));
    }
};

export const authService = {
    register: async (userData: { name: string; email: string; password?: string }) => {
        // Small simulated delay for realistic feel
        await new Promise((res) => setTimeout(res, 400));

        const users = getStoredUsers();
        const existing = users.find((u) => u.email.toLowerCase() === userData.email.toLowerCase());
        if (existing) {
            throw {
                response: {
                    data: { error: 'An account with this email already exists' }
                }
            };
        }

        const newUser = {
            id: 'usr_' + Date.now(),
            name: userData.name,
            email: userData.email,
            password: userData.password,
            role: 'client'
        };

        users.push(newUser);
        saveStoredUsers(users);

        const token = 'mock_jwt_token_' + Math.random().toString(36).substring(2);
        const userPublic = { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role };

        if (typeof window !== 'undefined') {
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(userPublic));
        }

        return { success: true, token, user: userPublic };
    },

    login: async (userData: { email: string; password?: string }) => {
        await new Promise((res) => setTimeout(res, 400));

        const users = getStoredUsers();
        let user = users.find((u) => u.email.toLowerCase() === userData.email.toLowerCase());

        // If user wasn't registered yet, create or allow login gracefully in frontend-only mode
        if (!user) {
            const nameFromEmail = userData.email.split('@')[0];
            const capitalizedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
            user = {
                id: 'usr_' + Date.now(),
                name: capitalizedName || 'Studio Client',
                email: userData.email,
                role: 'client'
            };
            users.push(user);
            saveStoredUsers(users);
        }

        const token = 'mock_jwt_token_' + Math.random().toString(36).substring(2);
        const userPublic = { id: user.id, name: user.name, email: user.email, role: user.role || 'client' };

        if (typeof window !== 'undefined') {
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(userPublic));
        }

        return { success: true, token, user: userPublic };
    },

    logout: async () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    },

    forgotPassword: async (email: string) => {
        await new Promise((res) => setTimeout(res, 400));
        return { success: true, message: `Password reset instructions sent to ${email}` };
    },

    resetPassword: async (token: string, password: string) => {
        await new Promise((res) => setTimeout(res, 400));
        return { success: true, message: 'Password updated successfully' };
    },

    getMe: async () => {
        if (typeof window !== 'undefined') {
            const user = localStorage.getItem('user');
            if (user) {
                return { success: true, data: JSON.parse(user) };
            }
        }
        return { success: false, data: null };
    },
};

const api = {
    get: async () => ({ data: {} }),
    post: async () => ({ data: {} }),
    put: async () => ({ data: {} }),
    delete: async () => ({ data: {} }),
};

export default api;

