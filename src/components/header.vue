<template>
  <nav class="navbar navbar-expand-lg bg-gradient navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand d-none-sm d-none-xs" href="index.html"
        >OpenOrigin <span class="text-success">SportsLive</span></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id="nav" class="navbar-nav me-auto p-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page"
            >Home</router-link
          >
          |
        </li>
        <li class="nav-item">
          <router-link to="/events" class="nav-link" aria-current="page"
            >Events</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/live"
            class="nav-link text-success"
            aria-current="page"
            >Live</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/leagues" class="nav-link" aria-current="page"
            >Leagues</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/teams" class="nav-link" aria-current="page"
            >Teams</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>