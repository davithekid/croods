export const Logo = () => (
  <>
    <div className="block dark:hidden">
      <img src="./images/logo-dark.svg" className="w-13" alt="" />
    </div>
    <div className="hidden dark:block">
      <img src="./images/logo.svg" className="w-13" alt="" />
    </div>
  </>
);
