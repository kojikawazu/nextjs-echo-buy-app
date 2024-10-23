'use client';

import React from 'react';
import { signOut } from 'next-auth/react';

const LogoutBtn = () => {
    return (
        <div className="flex justify-end mb-4">
            <button onClick={() => signOut()}>ログアウト</button>
        </div>
    );
};

export default LogoutBtn;
