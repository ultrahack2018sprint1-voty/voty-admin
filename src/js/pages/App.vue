<template>
  <main>
    <nav
      class="navbar is-success"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <span class="navbar-item has-text-weight-bold" href="/">
          Voty Admin
        </span>
      </div>
      <div class="navbar-start">
        <router-link to="home" class="navbar-item">
          Home
        </router-link>
      </div>
    </nav>
    <router-view/>
  </main>
</template>;
