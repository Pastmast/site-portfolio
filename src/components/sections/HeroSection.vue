<script lang="ts" setup></script>

<template>
	<section id="section-hero" class="hero-block">
		<div class="container">
			<div class="hero-block__inner">
				<div class="hero-block__wrapper">
					<span class="hero-block__welcome">Добро пожаловать в моё портфолио!</span>
					<h1 class="hero-block__name">Привет, меня зовут <b class="hero-block__name-main">Евгений</b>.</h1>
					<p class="hero-block__description">
						Я
						<span class="hero-block__description-main">frontend-разработчик</span>. Работаю с применением следующих
						навыков и технологий: HTML, CSS, JavaScript, TypeScript, Vue 3 (Composition API, Options API), Nuxt 3, SQL (базовый уровень).
					</p>
				</div>
				<div class="hero-block__photo">
					<img class="hero-block__photo-img" src="/images/my-photo.jpeg" alt="моё фото" width="400px" height="400px" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.hero-block {
	padding: 100px 0;

	@include vp-1023 {
		padding: 5px 0;
	}

	@include vp-767 {
		padding: 10px 0;
	}

	&__inner {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 120px;

		@media (max-width: 1146px) {
			gap: 30px;
		}

		@include vp-1023 {
			flex-direction: column-reverse;
			gap: 15px;
		}

		@include vp-767 {
			gap: 25px;
		}
	}

	&__wrapper {
		@include vp-1023 {
			text-align: center;
		}
	}

	&__welcome {
		color: $color-hawkes-blue;
		font-weight: 400;
		display: block;
		font-size: 24px;
		line-height: 25px;
		word-spacing: 2px;
		margin-bottom: 20px;

		@include vp-1023 {
			margin-bottom: 18px;
		}

		@include vp-767 {
			font-size: 18px;
			margin-bottom: 10px;
		}
	}

	&__name {
		color: $color-solitude;
		font-weight: 700;
		font-size: 45px;
		line-height: 25px;
		margin: 0 0 40px;

		@media (max-width: 1304px) {
			font-size: 35px;
		}

		@include vp-1023 {
			margin-bottom: 20px;
		}

		@include vp-767 {
			line-height: 35px;
			font-size: 30px;
			margin-bottom: 20px;
		}
	}

	&__name-main {
		color: $color-dodger-blue;
	}

	&__description {
		color: $color-link-water;
		display: block;
		font-size: 24px;
		line-height: 27px;
		width: 580px;
		margin: 0;
		word-spacing: 2px;

		@media (max-width: 1304px) {
			font-size: 20px;
			line-height: 25px;
		}

		@include vp-767 {
			width: 100%;
			font-size: 19px;
		}
	}

	&__description-main {
		margin: 0;
		color: $color-dodger-blue;
		font-weight: 550;
	}

	&__photo-img {
		border-radius: 50%;
		border: 8px solid rgb(50, 89, 233);
		border-style: groove;
		box-shadow: 0px -1px 20px 10px rgb(15, 65, 165);
		transition: ease-in 0.5s;
		cursor: pointer;
		opacity: 0.95;
		flex-shrink: 0;

		@media (max-width: 1146px) {
			width: 100%;
			height: 300px;
		}

		@media (max-width: 1146px) {
			width: 100%;
			height: 260px;
		}

		@media (max-width: 1027px) {
			width: 100%;
			height: 230px;
		}

		@media (max-width: 1146px) {
			width: 100%;
			height: 300px;
		}

		@include vp-1023 {
			width: 266px;
			height: 245px;
		}

		@include vp-767 {
			width: 217px;
			height: 200px;
		}
	}

	&__photo-img:hover {
		box-shadow: 0px -1px 40px 30px rgb(15, 65, 165);
	}

	&__photo-img:hover {
		opacity: 1;
	}
}
</style>
