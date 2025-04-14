import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authModalMode, setAuthModalMode] = useState('signin');
    const [isLoading, setIsLoading] = useState(true);

    // Check for existing session on mount
    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Check if user is already logged in (from localStorage or session)
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (error) {
                console.error('Error checking authentication:', error);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    const openAuthModal = (mode = 'signin') => {
        setAuthModalMode(mode);
        setIsAuthModalOpen(true);
    };

    const closeAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    const signIn = async (credentials) => {
        try {
            // TODO: Replace with actual API call
            // Simulating API call with timeout
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Validate credentials (simple validation for demo)
            if (!credentials.email || !credentials.password) {
                return { 
                    success: false, 
                    error: 'Email and password are required' 
                };
            }
            
            // Mock successful sign in
            const userData = {
                id: '1',
                name: 'John Doe',
                email: credentials.email,
                avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
                role: 'buyer'
            };
            
            // Save to localStorage for persistence
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
            closeAuthModal();
            
            return { success: true };
        } catch (error) {
            console.error('Sign in error:', error);
            return { 
                success: false, 
                error: error.message || 'Failed to sign in. Please try again.' 
            };
        }
    };

    const signUp = async (userData) => {
        try {
            // TODO: Replace with actual API call
            // Simulating API call with timeout
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Validate user data
            if (!userData.name || !userData.email || !userData.password) {
                return { 
                    success: false, 
                    error: 'All fields are required' 
                };
            }
            
            // Mock successful sign up
            const newUser = {
                id: '1',
                name: userData.name,
                email: userData.email,
                avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
                role: 'buyer'
            };
            
            // Save to localStorage for persistence
            localStorage.setItem('user', JSON.stringify(newUser));
            setUser(newUser);
            closeAuthModal();
            
            return { success: true };
        } catch (error) {
            console.error('Sign up error:', error);
            return { 
                success: false, 
                error: error.message || 'Failed to create account. Please try again.' 
            };
        }
    };

    const signOut = () => {
        // Remove from localStorage
        localStorage.removeItem('user');
        setUser(null);
    };

    const value = {
        user,
        isLoading,
        isAuthModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        signIn,
        signUp,
        signOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 