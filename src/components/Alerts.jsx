import { ReactNode } from "react";

interface AlertsProps {
  children: ReactNode;
}

const Alerts = ({ children }: AlertsProps) => {
  return (
    <div class="alert alert-primary" role="alert">
      {children}
    </div>
  );
};

export default Alerts;
