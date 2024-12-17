<script lang="ts" setup>
function scrollToSection(sectionId: string) {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
}
</script>

<template>
	<header class="header">
		<div class="container">
			<div class="header-content">
				<a class="header-content__link" href="#" aria-label="Ссылка на главную страницу">
					<svg
						class="header-content__logo"
						width="64px"
						height="64px"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="SVGRepo_bgCarrier" stroke-width="0" />
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
						<g id="SVGRepo_iconCarrier">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8 16L3.54223 12.3383C1.93278 11.0162 1 9.04287 1 6.96005C1 3.11612 4.15607 0 8 0C11.8439 0 15 3.11612 15 6.96005C15 9.04287 14.0672 11.0162 12.4578 12.3383L8 16ZM3 6H5C6.10457 6 7 6.89543 7 8V9L3 7.5V6ZM11 6C9.89543 6 9 6.89543 9 8V9L13 7.5V6H11Z"
								fill="current-color"
							/>
						</g>
					</svg>
					<span class="header-content__name">Евгений Горлов</span>
				</a>
				<nav class="main-nav">
					<ul class="main-nav__list">
						<li class="main-nav__item">
							<button class="main-nav__link" @click="scrollToSection('section-hero')">Обо мне</button>
						</li>
						<li class="main-nav__item">
							<button class="main-nav__link" @click="scrollToSection('section-skills')">Навыки</button>
						</li>
						<li class="main-nav__item">
							<button class="main-nav__link" @click="scrollToSection('section-portfolio')">Мои работы</button>
						</li>
						<li class="main-nav__item">
							<button class="main-nav__link" @click="scrollToSection('section-footer')">Контакты</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	padding: 24px 0;
	position: relative;
	z-index: 20;
	align-items: center;
	justify-content: center;
	display: flex;

	@include vp-767 {
		padding: 10px 0;
	}
}

.header-content {
	align-items: center;
	display: flex;
	justify-content: space-between;

	@include vp-767 {
		justify-content: center;
	}

	&__link {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	&__logo {
		width: 50px;
		fill: rgba(227, 227, 227, 0.642);
		transition: $transition-300;

		@include vp-767 {
			display: none;
		}
	}

	&__link:hover {
		.header-content__logo {
			fill: rgba(255, 255, 255, 0.786);
		}
	}

	&__name {
		display: flex;
		color: rgb(209, 209, 209);
		font-weight: 700;
		font-size: 24px;
		line-height: 25px;
		transition: $transition-300;
		flex-wrap: wrap;
		width: 100px;

		@include vp-767 {
			display: none;
		}
	}

	&__link:hover {
		.header-content__name {
			color: rgb(244, 244, 244);
		}
	}
}

.main-nav {
	&__list {
		list-style: none;
		display: flex;
		gap: 25px;

		@include vp-1023 {
			gap: 6px;
		}

		@include vp-767 {
			padding: 0;
			gap: 2px;
		}
	}

	&__link {
		background-color: transparent;
		color: rgb(209, 209, 209);
		border: none;
		cursor: pointer;
		font-weight: 400;
		font-size: 20px;
		line-height: 25px;
		transition: $transition-300;
		flex-wrap: wrap;

		@include vp-1023 {
			font-size: 19px;
		}

		@include vp-767 {
			font-size: 13px;
			line-height: 14px;
		}
	}

	&__link:hover {
		color: rgb(244, 244, 244);
	}
}
</style>
