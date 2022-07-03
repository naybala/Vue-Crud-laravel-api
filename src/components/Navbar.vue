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
        <div class="navbar-nav ms-auto">
          <router-link to="/" class="button">
            <li class="nav-item active">
              <a class="nav-link text-white active" aria-current="page">Category List</a>
            </li>
          </router-link>
          <router-link to="/product" class="button">
            <li class="nav-item">
              <a class="nav-link text-white" aria-current="page">Product List</a>
            </li>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script></script>
<style>
a {
  text-decoration: none;
}

a.nav-link.active {
  background-color: black;
  border-radius: 1rem;
}
</style>
