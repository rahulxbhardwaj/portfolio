import React from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link";

const Header = () => {

	return (
		<nav>
      <button class="button" data-text="Awesome">
          <span class="actual-text">&nbsp;RahulBhardwaj&nbsp;</span>
          <span aria-hidden="true" class="hover-text">&nbsp;RahulBhardwaj&nbsp;</span>
      </button>
	
      <main>
          <HashLink to={"/#home"} class="block-link">Home</HashLink>
          <HashLink to={"/#project"} class="block-link">Projects</HashLink>
          <HashLink to={"/#about"} class="block-link">Tech Toolkit</HashLink>
          <HashLink to={"/contact"} class="block-link">Contact</HashLink>
          <HashLink to={"/services"} class="block-link">Services</HashLink>
      </main>

		</nav>
	);
};

export default Header;