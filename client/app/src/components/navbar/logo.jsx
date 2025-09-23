export const Logo = () => (
  <>
    <div className="block dark:hidden">
      <img src="./logo-dark.svg" className="w-13" alt="" />
    </div>
    <div className="hidden dark:block">
      <img src="./logo.svg" className="w-13" alt="" />
    </div>
  </>
);
