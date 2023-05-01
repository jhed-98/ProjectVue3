<template>
  <div v-if="$route.params.userId">
    <!-- <h1>Aqui se vera la detalle de un usuario {{ $route.params.userId }}</h1> -->
    <h1>Aqui se vera la detalle de un usuario con id {{ userId }}</h1>
  </div>

  <div v-else>
    <h1>Aqui se vera la lista de usuario</h1>
  </div>

  <header>
    <nav>
      <!-- <RouterLink :to="'/users/' + $route.params.userId + '/profile'">Perfil</RouterLink>
      <RouterLink :to="'/users/' + $route.params.userId + '/courses'">Cursos</RouterLink> -->
      <!-- <RouterLink :to="{ name: 'UserIndex', params: { userId: $route.params.userId } }"
        >Index</RouterLink
      >
      <RouterLink :to="{ name: 'UserProfile', params: { userId: $route.params.userId } }"
        >Perfil</RouterLink
      >
      <RouterLink :to="{ name: 'UserCourses', params: { userId: $route.params.userId } }"
        >Cursos</RouterLink
      > -->
      <RouterLink :to="{ name: 'UserIndex', params: { userId: userId } }">Index</RouterLink>
      <RouterLink :to="{ name: 'UserProfile', params: { userId: userId } }">Perfil</RouterLink>
      <RouterLink :to="{ name: 'UserCourses', params: { userId: userId } }">Cursos</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script>
export default {
  props: ['userId']
}
</script>

<style></style>
