<template>
    <div> 
          <h6>admin settings</h6> 
          <h2>welcome to the settings page</h2> 
    </div>
</template>

<script>
export default {
    name: 'admin-settings',
    middleware: ['auth', 'admin']
}
</script>

<style lang="scss" scoped></style>
