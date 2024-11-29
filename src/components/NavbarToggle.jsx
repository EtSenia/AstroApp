import { useState } from "preact/hooks";

  export default function MenuToggle() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <div class="flex items-center md:hidden absolute right-0 top-0 mr-6 py-4 h-24">
          <button
            id="menu-toggle"
            class="text-white"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          class={`${
            isOpen ? "flex" : "hidden"
          } bg-black text-white absolute left-0 w-full h-auto flex-col items-center space-y-6 py-4`}
        >
          <ul class="space-y-4 text-center">
            <li><a href="/AstroApp">Home</a></li>
            <li><a href="/Genre">Genre</a></li>
            <li><a href="/Animes">Animes</a></li>
            <li><a href="/Features">Features</a></li>
            <li><a href="/News">News</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li>
              <button class="bg-violet-800 py-3 px-6 rounded text-white">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </>
    );
  }