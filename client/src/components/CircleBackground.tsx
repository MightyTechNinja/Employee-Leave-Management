import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const CircleBackground = ({ children }: Props) => {
    return (
        <div className="bg-login-1 w-screen h-screen flex items-center justify-center overflow-hidden">
            <div className="bg-login-2 rounded-full w-lvw h-lvh flex items-center justify-center antialiased">
                <div className="bg-login-3 rounded-full w-1/3 h-1/3 flex items-center justify-center antialiased">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CircleBackground;
