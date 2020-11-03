import React from 'react'
import styles from './StoreItem.module.scss';

export default function StoreItem() {
	return (
		<div>
			<h2 className={styles.red}>Store Item</h2>
			<p className={styles.blue}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam fugiat distinctio numquam.</p>
			<img src="http://placekitten.com/200/300" alt="placekitten"/>
		</div>
	)
}
