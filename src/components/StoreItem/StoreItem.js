import React from 'react'
import styles from './StoreItem.module.scss';

export default function StoreItem() {
	return (
		<div>
			<img src="http://placekitten.com/200/300" alt="placekitten" />
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
			<p>Reviews: 5/5⭐</p>
			<p className={styles.cost}>CDN $42.00</p>
			
		</div>
	)
}
