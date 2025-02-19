// using slots folders for parallel fetching/routing
export const metadata = {
  title: "Admin DashBoard",
  description: "DashBoard 2.0",
};

export default function ComplexDashboardLayout({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-auto">
          {notifications}
          {/* {archived} */}
        </div>
      </div>
    </div>
  );
}

// The standard way to import multiple components
// import UserAnalytics from "path";
// import RevenueMetrics from "path";
// import Notifications from "path";

// export default function ComplexDashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <div>{children}</div>
//       <UserAnalytics />
//       <RevenueMetrics />
//       <Notifications />
//     </>
//   );
// }
