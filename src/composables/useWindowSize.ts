import { ref, onMounted, type Ref, onUnmounted } from 'vue';
import type IWindowSize from '../types/IWindowSize';

export default function useWindowSize() {
	const windowSize: Ref<IWindowSize> = ref({
		x: window.innerWidth,
		y: window.innerHeight,
	});
	const getWindowSize = () => {
		windowSize.value = { x: window.innerWidth, y: window.innerHeight };
	};

	onMounted(() => {
		getWindowSize();
		window.addEventListener('resize', getWindowSize);
	});

	onUnmounted(() => {
		window.removeEventListener('resize', getWindowSize);
	});

	return { windowSize };
}
