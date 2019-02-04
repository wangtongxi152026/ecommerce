<template>
<v-layout column justify-center align-center>
	<v-responsive width='100%' id='responsive_header' height='600' dark style='border-radius: 15px;'>
		<v-container class='white--text' style='margin-top: 14rem;'>
			<v-layout
			align-center
			column
			justify-center
			>
			<h1 class="display-2 font-weight-thin mb-3">Al-Dokkaan</h1>
			<h4 class="subheading">1000 stores in your pocket - Buy & Sell Securely!</h4>
			<v-btn to='/register' color='#D50000' class='white--text px-5' round red raised ripple large>Begin your journey</v-btn>
			</v-layout>
		</v-container>
	</v-responsive>
	<categories class='my-5'/>
</v-layout>
</template>

<script>
import Categories from '~/components/Categories.vue'
export default {
	head: {
		title: 'Al-Dokkaan - Buy & Sell Securely!',
		meta: [
			{ hid: 'description', name: 'description', content: '1000 stores in your pocket - Buy & Sell Securely!' }
		]
	},
	components: {
		Categories
	}
}
</script>

<style scoped>
#responsive_header{
	background-color: #ff7700;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23c50022' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23a3001b' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23be0044' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%239c0036' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23b80066' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23960052' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23b10088' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%238f006d' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
	background-position-x: right;
	background-position-y: bottom;
	background-repeat: no-repeat;
	/* background by SVGBackgrounds.com */
}
</style>


