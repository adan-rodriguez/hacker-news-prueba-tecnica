export default function Header() {
  return (
    <header>
      <nav className="bg-[#ff6600] flex items-center gap-4">
        <img
          className="border border-solid border-white ml-1"
          src="/logo.gif"
          alt="Logo de Hacker News"
        />
        <a className="font-bold" href="/">
          Hacker News
        </a>
      </nav>
    </header>
  );
}
