const { useState, useEffect } = React;

const AIToolsApp = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Set up user data immediately for seamless experience
        const userData = {
            id: '1',
            name: 'Alex Johnson',
            email: 'alex.johnson@example.com',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            level: 'Level 1 Student',
            progress: 45,
            streak: 7
        };
        
        // Set localStorage data
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('authToken', 'sample-token-123');
        
        setUser(userData);

        // Show splash for 3 seconds
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (showSplash) {
        return React.createElement(SplashScreen);
    }

    return React.createElement('div', { className: 'min-h-screen bg-gray-50' },
        React.createElement(Sidebar, { 
            user: user,
            currentPage: 'ai-tools'
        }),
        React.createElement('div', { className: 'content-area' },
            React.createElement(AIToolsPage)
        )
    );
};

// Render the app
ReactDOM.render(React.createElement(AIToolsApp), document.getElementById('root'));