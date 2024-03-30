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
        {/* <iframe src="https://lottie.host/embed/fd2187c2-857e-4502-976f-25411a2c0b98/qkD9y9B4NF.json" id="if1"></iframe> */}
          <HashLink to={"/#home"} class="block-link">Home</HashLink>
          <HashLink to={"/#project"} class="block-link">Projects</HashLink>
          <HashLink to={"/#techtoolkit"} class="block-link">Tech Toolkit</HashLink>
          <HashLink to={"/#contact"} class="block-link">Contact</HashLink>
          {/* <HashLink to={"/services"} class="block-link">Services</HashLink> */}
      </main>

		</nav>
	);
};

export default Header;