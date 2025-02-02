import React from 'react';

// Mock do contexto do Clerk
export const MockClerkContext = React.createContext({
    user: null,
    signOut: () => Promise.resolve(),
});

// Mock do ClerkProvider
export const MockClerkProvider = ({ children }: { children: React.ReactNode }) => {
    const mockValue = {
        user: null,
        signOut: () => Promise.resolve(),
    };

    return (
        <MockClerkContext.Provider value={mockValue}>
            {children}
        </MockClerkContext.Provider>
    );
};

// Mock do hook useClerk
export const useMockClerk = () => {
    return React.useContext(MockClerkContext);
};
