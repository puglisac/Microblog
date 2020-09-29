import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = (props) => {
	const [ collapsed, setCollapsed ] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar color="" dark>
				<NavbarBrand href="/" className="ml-auto">
					Microblog
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className="ml-5" />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href="/">Blog</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/new">Add Post</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
