import React from 'react';
import { Layout } from 'antd';
import LandingPage from '../pages/Landing';
import HeaderComponent from '../layout/Header';
import FooterComponent from '../layout/Footer';

const { Content } = Layout;
const styles = {
	layout: { flexDirection: 'row', overflowX: 'hidden' },
	content: {
		padding: '120px 30px 0',
		flexShrink: '0',
		position: 'relative',
		background: '#fff',
	},
};

export default function Home() {
	return (
		<Layout style={{ height: '100vh' }}>
			<HeaderComponent />
			<Layout style={styles.layout}>
				<Layout
					className='isoContentMainLayout'
					style={{
						height: '100vh',
					}}
				>
					<Content className='isomorphicContent' style={styles.content}>
						<LandingPage />
					</Content>
					<FooterComponent />
				</Layout>
			</Layout>
		</Layout>
	);
}
