const Header = () => {
  return (
    <header className="flex items-center bg-orange-500 h-7 gap-1 font-mono mb-4">
      <img
        className="size-6 m-px self-center"
        src="/assets/Logo.svg"
        alt="Logo"
      />
      <h1 className="font-bold text-[16px] leading-none">UK News</h1>
      <div className="ml-2 flex items-center gap-1 divide-neutral-800">
        <a className="hover:text-white" href="https://github.com/kessleru">
          <p className="text-[14px] leading-none font-mono">GitHub</p>
        </a>
        <span>|</span>
        <a
          className="hover:text-white"
          href="https://www.linkedin.com/in/otavio-ustra-8b50bb364/"
        >
          <p className="text-[14px] leading-none font-mono">Linkedin</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
