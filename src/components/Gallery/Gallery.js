import React from 'react'

import StoreItem from '../StoreItem/StoreItem';

import styles from './Gallery.module.scss';

export default function Gallery() {
	return (
		<div>
			<div className="wrapper">
				<h2>Featured</h2>
				<div className={styles.container}>
					<StoreItem />
					<StoreItem />
					<StoreItem />
					<StoreItem />
					<StoreItem />
					<StoreItem />
					<StoreItem />
					<StoreItem />
					<StoreItem />
					<StoreItem />
				</div>
			</div>
		</div>
	)
}
