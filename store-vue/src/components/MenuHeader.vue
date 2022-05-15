<template>
    <nav :style="{backgroundColor: background}">
        <router-link v-for="tab in tabs" :key="tab.path" :to="tab.path">
            {{tab.name}}
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'MenuHeader',
    props: {
        background: String,
        tabs: Array
    }
}
</script>

<style scoped>
.router-link-active {
    background-color: whitesmoke;
    color: black;
}

nav {
    display: flex;
    justify-content: space-around;
}

nav a {
    flex: 1;
    text-decoration: none;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    color: black;
}

</style>