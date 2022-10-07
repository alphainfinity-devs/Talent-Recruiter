export default function footer() {
  return (
    <footer className="py-6 px-16 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between items-center">
      <p className="text-gray-700 mb-6 lg:mb-0">
        Copyright &copy; 2020 - {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/raselmahmud22"
          target="_blank"
          rel="noreferrer"
          className="text-light-blue-500 hover:text-light-blue-700">
          Rasel Mahmud
        </a>
      </p>

      <ul className="list-unstyled flex">
        <li className="mr-6">
          <a
            className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/raselmahmud22">
            About Me
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
            target="_blank"
            rel="noreferrer"
            href="https://dev.to/raselmahmud22">
            Blog
          </a>
        </li>
      </ul>
    </footer>
  );
}
