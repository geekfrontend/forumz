const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[480px] mx-auto bg-gradient-to-br  md:shadow-md min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
