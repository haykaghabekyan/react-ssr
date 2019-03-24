import React from 'react';

export const MainLayout = ({ children }) => {
    return (
        <div>
            <header>
                Welcome!
            </header>
            <main>
                { children }
            </main>
            <footer>
                <span>Copyright © { new Date().getFullYear() }.</span>
            </footer>
        </div>
    );
};
