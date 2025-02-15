export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-28 m-3 drop-shadow-xl rounded-md border-2 border-b-gray-300 flex justify-center items-center">
      {children}
    </div>
  );
};
