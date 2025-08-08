import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';

/**
 * @component MainLayout
 * @description 메인 레이아웃 컴포넌트 (1080x1920 세로형 키오스크)
 * @returns {JSX.Element} 메인 레이아웃 컴포넌트
 */
export const MainLayout = (): JSX.Element => {

    return (
        <div className="w-full h-full min-h-screen flex flex-col overflow-hidden relative bg-green-1">
            <Outlet />
        </div>
    );
};
