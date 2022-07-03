<template>
  <nav class="navbar navbar-expand-lg py-3 bg-primary">
    <div class="container">
      <a class="navbar-brand text-white fw-bold fs-3" href="#"
        >Vue+Laravel Api Crud Test</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto" @click="activeChanger">
          <router-link to="/" class="button">
            <li class="nav-item active">
              <a class="nav-link text-white active" aria-current="page" data-id="category"
                >Category List</a
              >
            </li>
          </router-link>
          <router-link to="/product" class="button">
            <li class="nav-item">
              <a class="nav-link text-white" aria-current="page" data-id="product"
                >Product List</a
              >
            </li>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    activeChanger(e) {
      const navActive = document.querySelectorAll(".nav-link");
      const id = e.target.dataset.id;
      if (id) {
        navActive.forEach(function (a) {
          a.classList.remove("active");
        });
        e.target.classList.add("active");
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  transition: all 0s;
}

a.nav-link.active {
  background-color: black;
  border-radius: 1rem;
  transition: all 0s;
}
</style>

// const nav = document.querySelector(".navbar-nav") // //
nav.addEventListener("click",(e)=>{ // });
