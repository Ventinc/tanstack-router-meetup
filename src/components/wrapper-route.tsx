import { ReactNode } from '@tanstack/react-router';

export const WrapperRoute = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      {children}
      <div className="absolute inset-0 border-red-500 bg-red-50/50 z-10 border-2 rounded-lg pointer-events-none"></div>
    </div>
  );
};
