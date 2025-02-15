// using slots folders for parallel fetching/routing

export default function ComplexDashboardLayout({
  children,
  notifications,
  revenue,
  users,
  // archived,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  // archived: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) {
  // console.log(notifications);
  return (
    <>
      <div>{children}</div>
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">
          {notifications}
          {/* {archived} */}
        </div>
      </div>
    </>
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
