import React from 'react'

import styles from './Header.module.scss';

export default function Header() {
	return (
		<header>
			<div className="wrapper">
				<div className={styles.container}>
					<h1>eCommerce App</h1>
		
					<form action="#">
						<label className="sr-only" htmlFor="search">Search</label>
						<input type="text" id="search" placeholder="search"/>
						<button type="submit">🔎</button>
					</form>

					<label className="sr-only" htmlFor="currency">Currency</label>
					<select id="currency">
						<option value="CDN">CDN</option>
						<option value="USD">USD</option>
						<option value="GBP">GBP</option>
					</select>

					<div>
						<button>Log In</button> / <button>Sign Up</button>
					</div>
					
					<button>Cart 🛒</button>


				</div>
			</div>
		</header>
	)
}
